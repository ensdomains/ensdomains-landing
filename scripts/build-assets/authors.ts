import sharp from 'sharp'
import type { BlogPostMetadata } from '~/utils/blog/metadata'
import { logger } from './logger'
import type { ImageSettings } from './types'
import {
  AUTHORS_ASSETS_FOLDER,
  getPostDirectories,
  makeDirectoryIfNotExists,
  POSTS_FOLDER,
} from './utils'

const authorLogger = logger.scope('Authors')

// Configuration for which ENS records to store
const ENS_RECORDS_TO_STORE = [
  'com.discord',
  'com.github',
  'com.twitter',
  'email',
  'org.telegram',
  'url',
  'description',
] as const

type ENSRecord = (typeof ENS_RECORDS_TO_STORE)[number]

type ENSData = {
  name: string
  address?: string
  avatar?: {
    xs: string
    sm: string
    md: string
    lg: string
  }
  texts: Record<string, string>
  coins: Record<string, { name: string; address: string }>
}

const AVATAR_IMG_SETTINGS: ImageSettings[] = [
  {
    width: 512,
    height: 512,
  },
]

/**
 * Validates ENS data structure
 * @param data - The data to validate
 * @returns boolean indicating if the data is valid
 */
function isValidENSData(data: unknown): data is ENSData {
  if (!data || typeof data !== 'object') return false

  const ensData = data as ENSData
  return (
    typeof ensData.name === 'string' &&
    typeof ensData.texts === 'object' &&
    typeof ensData.coins === 'object'
  )
}

/**
 * Fetches an avatar from a given URL
 * @param url - The URL of the avatar to fetch
 * @returns Promise containing the avatar buffer or null if fetch fails
 */
async function fetchAvatar(url: string): Promise<Buffer | null> {
  try {
    authorLogger.debug(`Fetching avatar from ${url}`)
    const response = await fetch(url)
    if (response.ok) {
      return Buffer.from(await response.arrayBuffer())
    }
    authorLogger.error(`Failed to fetch avatar from ${url}:`, {
      status: response.status,
      statusText: response.statusText,
    })
  } catch (error) {
    authorLogger.warn(`Failed to fetch avatar from ${url}:`, error)
  }
  return null
}

interface AuthorData {
  avatar?: Buffer
  records: Partial<Record<ENSRecord, string>>
}

/**
 * Attempts to fetch avatar from various sources
 * @param author - The ENS name of the author
 * @param ensData - The resolved ENS data
 * @returns Promise containing the avatar buffer or null
 */
async function attemptAvatarFetch(
  author: string,
  ensData: ENSData | null,
): Promise<Buffer | null> {
  const rawAvatarRecord = ensData?.texts?.avatar
  let avatar: Buffer | null = null

  // Try to fetch avatar from resolver first
  if (ensData?.avatar?.md) {
    avatar = await fetchAvatar(ensData.avatar.md)
    if (avatar) return avatar
  }

  // Try IPFS if available
  if (!avatar && rawAvatarRecord?.startsWith('ipfs://')) {
    authorLogger.debug(
      `Attempting to fetch avatar from ipfs.euc.li for ${author}`,
    )
    avatar = await fetchAvatar(
      `https://ipfs.euc.li/${rawAvatarRecord.slice(7)}`,
    )
    if (avatar) return avatar
  }

  // Try ENS metadata as last resort
  if (!avatar && rawAvatarRecord) {
    authorLogger.debug(`Falling back to ENS metadata for ${author}`)
    avatar = await fetchAvatar(
      `https://metadata.ens.domains/mainnet/avatar/${author}`,
    )
    if (avatar) return avatar
  }

  if (rawAvatarRecord) {
    authorLogger.error(
      `Author has an avatar record but no avatar could be fetched`,
      author,
      rawAvatarRecord,
    )
  }

  return null
}

/**
 * Processes a single author's ENS data and avatar
 * @param author - The ENS name of the author
 * @returns Promise containing the processed author data
 */
async function processAuthorData(author: string): Promise<AuthorData> {
  authorLogger.debug(`Processing author: ${author}`)

  const ensData = await resolveENSData(author)
  const records: Partial<Record<ENSRecord, string>> = {}

  if (ensData) {
    // Store selected records
    for (const record of ENS_RECORDS_TO_STORE) {
      if (ensData.texts[record]) {
        records[record] = ensData.texts[record]
      }
    }
  }

  const avatar = await attemptAvatarFetch(author, ensData)

  return {
    avatar: avatar ?? undefined,
    records,
  }
}

/**
 * Extracts unique authors from all blog posts
 * @param posts - Array of post directories
 * @returns Set of unique author ENS names
 */
async function extractUniqueAuthors(posts: string[]): Promise<Set<string>> {
  const foundAuthors = new Set<string>()

  for (const post of posts) {
    const path = new URL(`${post}/meta.json`, POSTS_FOLDER).pathname
    try {
      const meta: BlogPostMetadata = await import(
        new URL(`${post}/meta.json`, POSTS_FOLDER).pathname
      )
      meta.authors.forEach((author) => foundAuthors.add(author))
    } catch (error) {
      authorLogger.error(
        `Failed to process meta.json for post ${post}:`,
        error,
        path,
      )
    }
  }

  return foundAuthors
}

/**
 * Gets author data for all unique authors in the blog posts
 * @returns Promise containing a record of author data
 */
async function getAuthorData(): Promise<Record<string, AuthorData>> {
  const posts = await getPostDirectories()
  const authorData: Record<string, AuthorData> = {}
  const uniqueAuthors = await extractUniqueAuthors(posts)

  const authorPromises = Array.from(uniqueAuthors).map(async (author) => {
    authorData[author] = await processAuthorData(author)
    authorLogger.success(`Processed data for author: ${author}`)
  })

  await Promise.all(authorPromises)
  return authorData
}

/**
 * Validates and processes image settings
 * @param settings - The image settings to validate
 * @returns Validated and normalized image settings
 */
function validateImageSettings(
  settings: ImageSettings,
): Required<ImageSettings> {
  const { width, height, format = 'webp', prefix = '', suffix = '' } = settings

  if (!width || !height || width <= 0 || height <= 0) {
    throw new Error(
      `Invalid image dimensions: width=${width}, height=${height}`,
    )
  }

  return {
    width,
    height,
    format,
    prefix,
    suffix,
  }
}

/**
 * Processes an author's avatar according to specified image settings
 * @param author - The ENS name of the author
 * @param avatar - The avatar buffer to process
 * @param settings - Image processing settings
 */
async function processAvatar(
  author: string,
  avatar: Buffer,
  settings: ImageSettings,
): Promise<void> {
  try {
    const validatedSettings = validateImageSettings(settings)
    const { prefix, suffix, width, height, format } = validatedSettings
    const key = `${prefix}avatar${suffix ? `-${suffix}` : ''}`
    const output = new URL(`${author}/${key}.${format}`, AUTHORS_ASSETS_FOLDER)
      .pathname

    authorLogger.info(`Converting avatar for ${author} to ${output}`)

    // Validate input buffer
    if (!Buffer.isBuffer(avatar)) {
      throw new Error('Invalid avatar buffer provided')
    }

    const image = sharp(avatar, {
      pages: -1,
      animated: true,
    })

    // Validate image metadata
    const metadata = await image.metadata()
    if (!metadata.width || !metadata.height) {
      throw new Error('Invalid image metadata')
    }

    await image
      .resize(width, height, {
        fit: 'cover',
        position: 'center',
      })
      .toFormat(format)
      .toFile(output)

    authorLogger.success(`Successfully converted avatar for ${author}`)
  } catch (error) {
    authorLogger.error(`Failed to process avatar for ${author}:`, error)
    throw error // Re-throw to handle in the calling function
  }
}

/**
 * Generates TypeScript exports for author data
 * @param authorData - Record of processed author data
 * @returns String containing TypeScript export statements
 */
function generateTypeScriptExports(
  authorData: Record<string, AuthorData>,
): string {
  let result = 'export const authors: Record<string, Author> = {\n'

  for (const [author, data] of Object.entries(authorData)) {
    result += `  '${author}': {\n`

    if (data.avatar) {
      for (const settings of AVATAR_IMG_SETTINGS) {
        const { prefix, suffix, format } = settings
        const key = `${prefix || ''}avatar${suffix ? `-${suffix}` : ''}`
        result += `    '${key}': import('./authors/${author}/${key}.${
          format || 'webp'
        }').then(asset => asset.default),\n`
      }
    }

    result += `    records: ${JSON.stringify(data.records)},\n`
    result += '  },\n'
  }

  result += '}\n\n'
  result += `export type Author = {
  avatar?: Promise<StaticImageData>
  records: Partial<Record<ENSRecord, string>>
}\n`
  result += `export type ENSRecord = ${ENS_RECORDS_TO_STORE.map(
    (r) => `'${r}'`,
  ).join(' | ')}\n`

  return result
}

/**
 * Resolves ENS data for a given name using the ENState resolver
 * @param name - The ENS name to resolve
 * @returns Promise containing the ENS data or null if resolution fails
 */
async function resolveENSData(name: string): Promise<ENSData | null> {
  try {
    authorLogger.debug(`Resolving ENS data for ${name}`)
    const response = await fetch(`https://ens-api.gregskril.com/name/${name}`)

    if (!response.ok) {
      authorLogger.error(`Failed to fetch ENS data for ${name}:`, {
        status: response.status,
        statusText: response.statusText,
      })
      return null
    }

    const data = await response.json()

    if (!isValidENSData(data)) {
      authorLogger.error(`Invalid ENS data structure for ${name}:`, data)
      return null
    }

    return data
  } catch (error) {
    authorLogger.warn(`Failed to resolve ENS data for ${name}:`, error)
    return null
  }
}

/**
 * Main function to process author data and generate TypeScript exports
 * @returns Promise containing the generated TypeScript code
 */
export async function handleAuthors(): Promise<string> {
  authorLogger.info('Starting author data processing')
  const authorData = await getAuthorData()
  const processedAuthors = new Set<string>()

  // Process all authors in parallel
  await Promise.all(
    Object.entries(authorData).map(async ([author, data]) => {
      try {
        await makeDirectoryIfNotExists(
          new URL(`${author}`, AUTHORS_ASSETS_FOLDER).pathname,
        )

        // Process avatar if available
        if (data.avatar) {
          await Promise.all(
            AVATAR_IMG_SETTINGS.map((settings) =>
              // biome-ignore lint/style/noNonNullAssertion: non-null assertion is covered by the if statement
              processAvatar(author, data.avatar!, settings),
            ),
          )
          processedAuthors.add(author)
        }
      } catch (error) {
        authorLogger.error(`Failed to process author ${author}:`, error)
        // Continue processing other authors
      }
    }),
  )

  if (processedAuthors.size > 0) {
    authorLogger.info(`Successfully processed ${processedAuthors.size} authors`)
  }

  const result = generateTypeScriptExports(authorData)
  authorLogger.success('Finished processing author data')
  return result
}
