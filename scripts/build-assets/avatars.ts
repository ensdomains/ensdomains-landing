import { BlogPostMetadata } from '~/utils/blog/metadata'
import sharp from 'sharp'
import { ImageSettings } from './types'
import { AUTHORS_ASSETS_FOLDER, POSTS_FOLDER, getPostDirectories, makeDirectoryIfNotExists } from './utils'
import { logger } from './logger'

const avatarLogger = logger.scope('Avatars')

const AVATAR_IMG_SETTINGS: ImageSettings[] = [
  {
    width: 512,
    height: 512,
  },
]

async function fetchAvatar(url: string): Promise<Buffer | null> {
  try {
    avatarLogger.debug(`Fetching avatar from ${url}`)
    const response = await fetch(url)
    if (response.ok) {
      return Buffer.from(await response.arrayBuffer())
    }
  }
  catch (error) {
    avatarLogger.warn(`Failed to fetch avatar from ${url}:`, error)
  }
  return null
}

async function getAvatarImages(): Promise<Record<string, Buffer>> {
  const posts = await getPostDirectories()
  const avatars: Record<string, Buffer> = {}
  const authorPromises: Promise<void>[] = []

  for (const post of posts) {
    const path = new URL(`${post}/meta.json`, POSTS_FOLDER).pathname
    try {
      const meta: BlogPostMetadata = await import(new URL(`${post}/meta.json`, POSTS_FOLDER).pathname)

      for (const author of meta.authors) {
        if (avatars[author]) {
          avatarLogger.debug(`Skipping already processed author: ${author}`)
          continue
        }

        const promise = (async () => {
          // Try ENState first
          avatarLogger.debug(`Processing author: ${author}`)
          let avatar = await fetchAvatar(`https://enstate.rs/n/${author}`)
            .then(async (response) => {
              if (!response) return null
              const data = JSON.parse(response.toString())
              return data.avatar ? fetchAvatar(data.avatar) : null
            })

          // Fallback to ENS metadata
          if (!avatar) {
            avatarLogger.debug(`Falling back to ENS metadata for ${author}`)
            avatar = await fetchAvatar(`https://metadata.ens.domains/mainnet/avatar/${author}`)
          }

          if (!avatar) {
            avatarLogger.warn(`No avatar found for author: ${author}`)
            return
          }

          avatars[author] = avatar
          avatarLogger.success(`Found avatar for author: ${author}`)
        })()

        authorPromises.push(promise)
      }
    }
    catch (error) {
      avatarLogger.error(`Failed to process meta.json for post ${post}:`, error, path)
      continue
    }
  }

  await Promise.all(authorPromises)
  return avatars
}

async function processAvatar(
  author: string,
  avatar: Buffer,
  settings: ImageSettings,
): Promise<void> {
  const { prefix, suffix, width, height, format } = settings
  const key = `${prefix || ''}avatar${suffix ? `-${suffix}` : ''}`
  const output = new URL(`${author}/${key}.${format || 'webp'}`, AUTHORS_ASSETS_FOLDER).pathname

  avatarLogger.info(`Converting avatar for ${author} to ${output}`)

  try {
    await sharp(avatar, {
      pages: -1,
      animated: true,
    })
      .resize(width, height)
      .toFile(output)
    avatarLogger.success(`Successfully converted avatar for ${author}`)
  }
  catch (error) {
    avatarLogger.error(`Failed to convert avatar for ${author}:`, error)
  }
}

export async function handleAvatarImages(): Promise<string> {
  avatarLogger.info('Starting avatar processing')
  const avatars = await getAvatarImages()
  let result = 'export const avatars = {\n'

  // Process all avatars in parallel
  await Promise.all(
    Object.entries(avatars).map(async ([author, avatar]) => {
      await makeDirectoryIfNotExists(new URL(`${author}`, AUTHORS_ASSETS_FOLDER).pathname)

      // Process all sizes for each avatar in parallel
      await Promise.all(
        AVATAR_IMG_SETTINGS.map(settings =>
          processAvatar(author, avatar, settings),
        ),
      )
    }),
  )

  // Generate TypeScript exports
  for (const [author] of Object.entries(avatars)) {
    result += `  '${author}': {\n`
    for (const settings of AVATAR_IMG_SETTINGS) {
      const { prefix, suffix, format } = settings
      const key = `${prefix || ''}avatar${suffix ? `-${suffix}` : ''}`
      result += `    '${key}': import('./authors/${author}/${key}.${format || 'webp'}') as Promise<{ default: StaticImageData }>,\n`
    }
    result += '  },\n'
  }

  result += '}\n\n'
  result += 'export type Avatar = keyof typeof avatars[keyof typeof avatars]'

  avatarLogger.success('Finished processing avatars')
  return result
}
