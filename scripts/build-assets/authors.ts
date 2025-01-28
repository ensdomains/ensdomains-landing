import { BlogPostMetadata } from '~/utils/blog/metadata'
import sharp from 'sharp'
import { ImageSettings } from './types'
import { AUTHORS_ASSETS_FOLDER, POSTS_FOLDER, getPostDirectories, makeDirectoryIfNotExists } from './utils'
import { logger } from './logger'

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

type ENSRecord = typeof ENS_RECORDS_TO_STORE[number]

type EnstateResponse = {
  name: string
  address: string
  avatar?: string
  display: string
  records: Partial<Record<string, string>>
  chains: Record<string, string>
  fresh: number
  resolver: string
  errors: Record<string, unknown>
}

type ENSData = {
  name: string
  address: string
  avatar?: string
  display: string
  records: Partial<Record<string, string>>
  chains: Record<string, string>
  fresh: number
  resolver: string
  errors: Record<string, unknown>
}

const AVATAR_IMG_SETTINGS: ImageSettings[] = [
  {
    width: 512,
    height: 512,
  },
]

async function resolveENSData(name: string): Promise<ENSData | null> {
  try {
    authorLogger.debug(`Resolving ENS data for ${name}`)
    // Currently using ENState as the primary resolver
    const response = await fetch(`https://enstate.rs/n/${name}`)
    if (response.ok) {
      const data = await response.json()
      return data as EnstateResponse
    }
  }
  catch (error) {
    authorLogger.warn(`Failed to resolve ENS data for ${name}:`, error)
  }
  return null
}

async function fetchAvatar(url: string): Promise<Buffer | null> {
  try {
    authorLogger.debug(`Fetching avatar from ${url}`)
    const response = await fetch(url)
    if (response.ok) {
      return Buffer.from(await response.arrayBuffer())
    }
  }
  catch (error) {
    authorLogger.warn(`Failed to fetch avatar from ${url}:`, error)
  }
  return null
}

interface AuthorData {
  avatar?: Buffer
  records: Partial<Record<ENSRecord, string>>
}

async function getAuthorData(): Promise<Record<string, AuthorData>> {
  const posts = await getPostDirectories()
  const authorData: Record<string, AuthorData> = {}
  const authorPromises: Promise<void>[] = []
  const foundAuthors = new Set<string>()

  for (const post of posts) {
    const path = new URL(`${post}/meta.json`, POSTS_FOLDER).pathname
    try {
      const meta: BlogPostMetadata = await import(new URL(`${post}/meta.json`, POSTS_FOLDER).pathname)

      for (const author of meta.authors) {
        if (foundAuthors.has(author)) {
          authorLogger.debug(`Skipping already processed author: ${author}`)
          continue
        }

        foundAuthors.add(author)

        const promise = (async () => {
          authorLogger.debug(`Processing author: ${author}`)

          // Try primary resolver first
          const ensData = await resolveENSData(author)

          let avatar: Buffer | null = null
          const records: Partial<Record<ENSRecord, string>> = {}

          if (ensData) {
            // Store selected records
            for (const record of ENS_RECORDS_TO_STORE) {
              if (ensData.records[record]) {
                records[record] = ensData.records[record]
              }
            }

            // Try to fetch avatar from resolver
            if (ensData.avatar) {
              avatar = await fetchAvatar(ensData.avatar)
            }
          }

          // Fallback to ENS metadata for avatar if needed
          if (!avatar) {
            authorLogger.debug(`Falling back to ENS metadata for ${author}`)
            avatar = await fetchAvatar(`https://metadata.ens.domains/mainnet/avatar/${author}`)
          }

          if (!avatar) {
            authorLogger.warn(`No avatar found for author: ${author}`)
          }

          authorData[author] = {
            avatar,
            records,
          }

          authorLogger.success(`Processed data for author: ${author}`)
        })()

        authorPromises.push(promise)
      }
    }
    catch (error) {
      authorLogger.error(`Failed to process meta.json for post ${post}:`, error, path)
      continue
    }
  }

  await Promise.all(authorPromises)
  return authorData
}

async function processAvatar(
  author: string,
  avatar: Buffer,
  settings: ImageSettings,
): Promise<void> {
  const { prefix, suffix, width, height, format } = settings
  const key = `${prefix || ''}avatar${suffix ? `-${suffix}` : ''}`
  const output = new URL(`${author}/${key}.${format || 'webp'}`, AUTHORS_ASSETS_FOLDER).pathname

  authorLogger.info(`Converting avatar for ${author} to ${output}`)

  try {
    await sharp(avatar, {
      pages: -1,
      animated: true,
    })
      .resize(width, height)
      .toFile(output)
    authorLogger.success(`Successfully converted avatar for ${author}`)
  }
  catch (error) {
    authorLogger.error(`Failed to convert avatar for ${author}:`, error)
  }
}

export async function handleAuthors(): Promise<string> {
  authorLogger.info('Starting author data processing')
  const authorData = await getAuthorData()
  let result = 'export const authors: Record<string, Author> = {\n'

  // Process all authors in parallel
  await Promise.all(
    Object.entries(authorData).map(async ([author, data]) => {
      await makeDirectoryIfNotExists(new URL(`${author}`, AUTHORS_ASSETS_FOLDER).pathname)

      // Process avatar if available
      if (data.avatar) {
        await Promise.all(
          AVATAR_IMG_SETTINGS.map(settings =>
            processAvatar(author, data.avatar!, settings),
          ),
        )
      }
    }),
  )

  // Generate TypeScript exports
  for (const [author, data] of Object.entries(authorData)) {
    result += `  '${author}': {\n`

    // Add avatar exports if available
    if (data.avatar) {
      for (const settings of AVATAR_IMG_SETTINGS) {
        const { prefix, suffix, format } = settings
        const key = `${prefix || ''}avatar${suffix ? `-${suffix}` : ''}`
        result += `    '${key}': import('./authors/${author}/${key}.${format || 'webp'}').then(asset => asset.default),\n`
      }
    }

    // Inline records data
    result += `    records: ${JSON.stringify(data.records)},\n`
    result += '  },\n'
  }

  result += '}\n\n'
  result += `export type Author = {
  avatar?: Promise<StaticImageData>
  records: Partial<Record<ENSRecord, string>>
}\n`
  result += `export type ENSRecord = ${ENS_RECORDS_TO_STORE.map(r => `'${r}'`).join(' | ')}\n`

  authorLogger.success('Finished processing author data')
  return result
}
