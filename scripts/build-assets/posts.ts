import { readFile } from 'node:fs/promises'
import sharp from 'sharp'
import { logger } from './logger'
import { ImageFormats, type ImageSettings } from './types'
import {
  getPostDirectories,
  makeDirectoryIfNotExists,
  POSTS_ASSETS_FOLDER,
  POSTS_FOLDER,
} from './utils'

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

/**
 * Attempts to find a local cover image for a post
 * @param post - The post directory name
 * @returns Promise containing the cover data or null if not found
 */
async function findLocalCover(post: string): Promise<Cover | null> {
  for (const format of ImageFormats) {
    const cover = new URL(`${post}/cover.${format}`, POSTS_FOLDER).pathname
    try {
      const data = await readFile(cover)
      postLogger.debug(`Found cover image for post ${post} in format ${format}`)
      return { post, format, data }
    } catch {}
  }
  return null
}

/**
 * Attempts to fetch a remote cover image from a URL
 * @param post - The post directory name
 * @param url - The URL of the cover image
 * @returns Promise containing the cover data or null if fetch fails
 */
async function fetchRemoteCover(post: string, url: URL): Promise<Cover | null> {
  try {
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      postLogger.error(`Invalid protocol for cover image URL: ${url.protocol}`)
      return null
    }

    postLogger.debug(`Fetching remote cover for post ${post} from ${url}`)
    const response = await fetch(url)

    if (!response.ok) {
      postLogger.error(`Failed to fetch cover image for ${post}:`, {
        status: response.status,
        statusText: response.statusText,
        url: url.toString(),
      })
      return null
    }

    const data = Buffer.from(await response.arrayBuffer())
    const format = url.pathname.split('.').pop() || 'webp'
    postLogger.success(`Successfully fetched remote cover for post ${post}`)
    return { post, format, data }
  } catch (error) {
    postLogger.error(`Error fetching remote cover for ${post}:`, error)
    return null
  }
}

/**
 * Attempts to get cover image from meta.json
 * @param post - The post directory name
 * @returns Promise containing the cover data or null if not found
 */
async function getCoverFromMeta(post: string): Promise<Cover | null> {
  try {
    const meta = await import(
      new URL(`${post}/meta.json`, POSTS_FOLDER).pathname
    )
    if (!meta?.cover) return null

    try {
      const url = new URL(meta.cover)
      return await fetchRemoteCover(post, url)
    } catch {
      postLogger.error(
        `Invalid cover URL in meta.json for ${post}:`,
        meta.cover,
      )
      return null
    }
  } catch {
    postLogger.error(`Failed to read meta.json for ${post}`)
    return null
  }
}

/**
 * Gets cover images for all posts
 * @returns Promise containing array of cover data
 */
async function getCoverImages(): Promise<Cover[]> {
  const posts = await getPostDirectories()
  const coverPromises = posts.map(async (post) => {
    // First try to find local cover image
    const localCover = await findLocalCover(post)
    if (localCover) return localCover

    // If no local cover found, try meta.json
    return await getCoverFromMeta(post)
  })

  const results = await Promise.all(coverPromises)
  return results.filter((cover): cover is Cover => cover !== null)
}

/**
 * Validates and processes image data
 * @param data - The image buffer to process
 * @param settings - Image processing settings
 * @param outputPath - Path to save the processed image
 */
async function processImage(
  data: Buffer,
  settings: ImageSettings,
  outputPath: string,
): Promise<void> {
  try {
    if (!Buffer.isBuffer(data)) {
      throw new Error('Invalid image buffer provided')
    }

    const { width, height, format = 'webp' } = settings
    const image = sharp(data)

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
      .toFile(outputPath)

    postLogger.success(`Successfully processed image: ${outputPath}`)
  } catch (error) {
    postLogger.error(`Failed to process image ${outputPath}:`, error)
    throw error
  }
}

/**
 * Generates TypeScript exports for post data
 * @param covers - Array of processed cover data
 * @returns String containing TypeScript export statements
 */
function generateTypeScriptExports(covers: Cover[]): string {
  let result = 'export const posts: Record<string, Post> = {\n'

  for (const cover of covers) {
    result += `  '${cover.post}': {\n`
    for (const settings of COVER_IMG_SETTINGS) {
      const { prefix, suffix, format = 'webp' } = settings
      const key = `${prefix || ''}cover${suffix ? `-${suffix}` : ''}`
      result += `    '${key}': import('./posts/${cover.post}/${key}.${format}').then(asset => asset.default),\n`
    }
    result += '  },\n'
  }

  result += '}\n\n'
  result += `export type Post = {
  cover?: Promise<StaticImageData>
  'cover-thumb'?: Promise<StaticImageData>
}`

  return result
}

/**
 * Main function to process post cover images and generate TypeScript exports
 * @returns Promise containing the generated TypeScript code
 */
export async function handlePosts(): Promise<string> {
  postLogger.info('Starting cover image processing')
  const covers = await getCoverImages()
  const processedPosts = new Set<string>()

  // Process all covers in parallel
  await Promise.all(
    covers.map(async (cover) => {
      try {
        const POST_FOLDER = new URL(`${cover.post}/`, POSTS_ASSETS_FOLDER)
        await makeDirectoryIfNotExists(POST_FOLDER.pathname)

        // Process all sizes for each cover in parallel
        await Promise.all(
          COVER_IMG_SETTINGS.map(async (settings) => {
            const { prefix, suffix, format = 'webp' } = settings
            const key = `${prefix || ''}cover${suffix ? `-${suffix}` : ''}`
            const output = new URL(`${key}.${format}`, POST_FOLDER).pathname

            postLogger.info(`Converting image to ${output}`)
            await processImage(cover.data, settings, output)
          }),
        )

        processedPosts.add(cover.post)
      } catch (error) {
        postLogger.error(`Failed to process post ${cover.post}:`, error)
        // Continue processing other posts
      }
    }),
  )

  if (processedPosts.size > 0) {
    postLogger.info(`Successfully processed ${processedPosts.size} posts`)
  }

  const result = generateTypeScriptExports(covers)
  postLogger.success('Finished processing cover images')
  return result
}
