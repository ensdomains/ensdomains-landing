import type { StaticImageData } from 'next/image'
import { type BlogPostMetadataPlus, getPostsMetadata } from '~/utils/blog/posts'
import { getAuthorAssets, getPostAssets } from '~/utils/blog/utils'
import { BlogSectionCarousel } from './Carousel'

export type BlogPostWithAssets = Omit<BlogPostMetadataPlus, 'authors'> & {
  thumbnail?: StaticImageData
  authors: (readonly [string, StaticImageData | undefined])[]
}

export const BlogSection = async () => {
  const posts = await getPostsMetadata()

  const ensV2Posts = posts.filter((post) => post.tags.includes('ens-v2'))

  const postsWithAssets = await Promise.all(
    ensV2Posts.map(async (post) => {
      const thumbnail = await getPostAssets(post.file)?.['cover-thumb']
      const authors = await Promise.all(
        post.authors.map(async (author) => {
          const avatar = await getAuthorAssets(author)?.avatar
          return [author, avatar] as const
        }),
      )
      return { ...post, thumbnail, authors }
    }),
  )

  if (postsWithAssets.length === 0) {
    return null
  }

  return <BlogSectionCarousel posts={postsWithAssets} />
}
