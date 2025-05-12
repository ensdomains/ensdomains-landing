import { writeFile } from 'node:fs/promises'
import { handleAuthors } from './authors'
import { logger } from './logger'
import { handlePosts } from './posts'
import {
  ASSETS_FOLDER,
  AUTHORS_ASSETS_FOLDER,
  makeDirectoryIfNotExists,
  POSTS_ASSETS_FOLDER,
  writeOutput,
} from './utils'

async function main() {
  logger.info('Starting asset build process')

  // Make sure assets folder exists
  await makeDirectoryIfNotExists(ASSETS_FOLDER.pathname)
  await makeDirectoryIfNotExists(POSTS_ASSETS_FOLDER.pathname)
  await makeDirectoryIfNotExists(AUTHORS_ASSETS_FOLDER.pathname)

  // Run cover and avatar processing in parallel
  logger.info('Processing covers and avatars in parallel')
  const [coverOutput, avatarOutput] = await Promise.all([
    handlePosts(),
    handleAuthors(),
  ])

  // Write the final output
  logger.info('Writing final output')
  const output = await writeOutput([coverOutput, avatarOutput])
  await writeFile(`${ASSETS_FOLDER.pathname}/assets.gen.ts`, output, 'utf8')

  logger.success('Asset build process completed successfully')
}

main().catch((error) => {
  logger.fatal('Asset build process failed:', error)
  process.exit(1)
})
