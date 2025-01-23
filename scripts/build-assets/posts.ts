import { readFile } from 'node:fs/promises'
import sharp from 'sharp'
import { ImageFormats, ImageSettings } from './types'
import { POSTS_ASSETS_FOLDER, POSTS_FOLDER, getPostDirectories, makeDirectoryIfNotExists } from './utils'
import { logger } from './logger'

const postLogger = logger.scope('Posts')

const COVER_IMG_SETTINGS: ImageSettings[] = [
  {
    width: 1920,
    height: 1080,
  },
  {
    suffix: 'thumb',
    width: 426 * 1.5,
    height: 240 * 1.5,
  },
]

type Cover = {
  post: string
  format: string
  data: Buffer
}

async function getCoverImages(): Promise<Cover[]> {
  const posts = await getPostDirectories()
  const coverPromises = posts.map(async (post) => {
    // Check if post has a cover image
    for (const format of ImageFormats) {
      const cover = new URL(`${post}/cover.${format}`, POSTS_FOLDER).pathname
      try {
        const data = await readFile(cover)
        postLogger.debug(`Found cover image for post ${post} in format ${format}`)
        return { post, format, data }
      }
      catch {
        continue
      }
    }

    // Try meta.json if no direct cover file found
    try {
      const meta = await import(new URL(`${post}/meta.json`, POSTS_FOLDER).pathname)
      if (meta?.cover) {
        try {
          const url = new URL(meta.cover)
          if (url.protocol === 'http:' || url.protocol === 'https:') {
            postLogger.debug(`Fetching remote cover for post ${post} from ${url}`)
            const response = await fetch(meta.cover)
            if (!response.ok) {
              postLogger.error(`Failed to fetch cover image for ${post}:`, meta.cover)
              return null
            }
            const data = Buffer.from(await response.arrayBuffer())
            const format = url.pathname.split('.').pop() || 'webp'
            postLogger.success(`Successfully fetched remote cover for post ${post}`)
            return { post, format, data }
          }
        }
        catch {
          return null
        }
      }
    }
    catch {
      return null
    }
    return null
  })

  const results = await Promise.all(coverPromises)
  return results.filter((cover): cover is Cover => cover !== null)
}

async function processImage(
  data: Buffer,
  settings: ImageSettings,
  outputPath: string,
): Promise<void> {
  const { width, height } = settings
  await sharp(data)
    .resize(width, height)
    .toFile(outputPath)
}

export async function handlePosts(): Promise<string> {
  postLogger.info('Starting cover image processing')
  const covers = await getCoverImages()
  let result = 'export const posts: Record<string, Post> = {\n'

  // Process all covers in parallel
  await Promise.all(
    covers.map(async (cover) => {
      const POST_FOLDER = new URL(`${cover.post}/`, POSTS_ASSETS_FOLDER)
      await makeDirectoryIfNotExists(POST_FOLDER.pathname)

      // Process all sizes for each cover in parallel
      await Promise.all(
        COVER_IMG_SETTINGS.map(async (settings) => {
          const { prefix, suffix, format } = settings
          const key = `${prefix || ''}cover${suffix ? `-${suffix}` : ''}`
          const output = new URL(`${key}.${format || 'webp'}`, POST_FOLDER).pathname

          postLogger.info(`Converting image to ${output}`)
          await processImage(cover.data, settings, output)
          postLogger.success(`Successfully converted image to ${output}`)
        }),
      )
    }),
  )

  // Generate TypeScript exports
  for (const cover of covers) {
    result += `  '${cover.post}': {\n`
    for (const settings of COVER_IMG_SETTINGS) {
      const { prefix, suffix, format } = settings
      const key = `${prefix || ''}cover${suffix ? `-${suffix}` : ''}`
      result += `    '${key}': import('./posts/${cover.post}/${key}.${format || 'webp'}').then(asset => asset.default),\n`
    }
    result += '  },\n'
  }

  result += '}\n\n'
  result += `export type Post = {
  cover?: Promise<StaticImageData>
  'cover-thumb'?: Promise<StaticImageData>
}`

  postLogger.success('Finished processing cover images')
  return result
}
