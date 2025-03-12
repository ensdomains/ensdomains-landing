import { readdir } from 'node:fs/promises'
import { POSTS_DIR } from './utils'
import { unstable_cache } from 'next/cache'
import { BlogPostMetadata, BlogPostMetadataSchema } from './metadata'
import fs from 'node:fs/promises'
import { cache, type JSX } from 'react'
import { MDXProps } from 'mdx/types'

export type BlogPostMetadataPlus = BlogPostMetadata & {
  file: string
}

const getPostDirectories = async () => {
  return readdir(POSTS_DIR)
}

const getPost = async (slug: string) => {
  try {
    const metaPath = `${POSTS_DIR.pathname}/${slug}/meta.json`
    const metaContent = await fs.readFile(metaPath, 'utf-8')
    const meta = JSON.parse(metaContent)

    const pageMetadata = await BlogPostMetadataSchema.parseAsync(meta)

    return { ...pageMetadata, file: slug }
  }
  catch (error) {
    console.error(`Error reading meta.json for slug ${slug}:`, error)
    throw error
  }
}

export const getPostsMetadata = async () => {
  const folderNames = await getPostDirectories()

  return unstable_cache(_getPostsMetadata, [folderNames.join(',')], {})()
}

export const _getPostsMetadata = async () => {
  // Load all posts from the content directory
  const files = await getPostDirectories()

  const posts = await Promise.all(files.map(getPost)).then(posts => posts.filter((post) => {
    if (post.draft && process.env.NODE_ENV == 'production') return false

    return true
  }))

  return posts.sort((a, b) => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)

    if (aDate.getTime() == bDate.getTime()) return 0

    return aDate.getTime() > bDate.getTime() ? -1 : 1
  })
}

export const getPostBySlug = cache(async (slug: string) => {
  const allPosts = await getPostsMetadata()

  const post = allPosts.find(post => post.slug === slug)

  if (!post) {
    throw new Error(`No post found with slug ${slug}`)
  }

  return post
})

export const importPost = async (post: string) => {
  const { default: PostContent, readingTime, plainContent } = (await import(`posts/${post}/readme.mdx`)) as {
    default: (_properties: MDXProps) => JSX.Element
    readingTime: string
    plainContent: string
  }

  return { PostContent, readingTime, plainContent }
}

export const getTags = async () => {
  const pages = await getPostsMetadata()

  const tags: Record<string, BlogPostMetadataPlus[]> = {}

  // Make the object tags with the tag as key and the value an array of the posts that have that tag
  for (const page of pages) {
    for (let tag of page.tags) {
      tag = tag.toLowerCase().replaceAll(' ', '-')

      if (tags[tag]) {
        tags[tag].push(page)
      }
      else {
        tags[tag] = [page]
      }
    }
  }

  return tags
}

export const getAuthors = async () => {
  const pages = await getPostsMetadata()

  const authors: Record<string, BlogPostMetadataPlus[]> = {}

  // Make the object tags with the author as key and the value an array of the posts that have that tag
  for (const page of pages) {
    for (let author of page.authors) {
      author = author.toLowerCase().replaceAll(' ', '_')

      if (authors[author]) {
        authors[author].push(page)
      }
      else {
        authors[author] = [page]
      }
    }
  }

  return authors
}
