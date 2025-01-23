import { Author, Post } from 'build-assets/assets.gen'
import { NextRequest, NextResponse } from 'next/server'
import { BlogPostMetadataPlus, getPostBySlug, getPostsMetadata } from '~/utils/blog/posts'
import { getAuthorAssets, getPostAssets } from '~/utils/blog/utils'

type PageProperties = {
  params: { slug: string }
}

export type PostMetadata = BlogPostMetadataPlus & {
  assets: {
    post: Partial<{
      [K in 'cover' | 'cover-thumb']: Awaited<Post[K]>
    }>
    authors: Record<
      string,
      Partial<{
        avatar: Awaited<Author['avatar']>
        records: Author['records']
      }>
    >
  }
}

export async function generateStaticParams() {
  const pages = await getPostsMetadata()

  return pages.map(post => ({
    slug: post.slug,
  }))
}

export async function GET(_request: NextRequest, { params }: PageProperties) {
  const postData = await getPostBySlug(params.slug)
  const postAssets = getPostAssets(postData.file)

  const data: PostMetadata = {
    ...postData,
    assets: {
      post: {
        'cover': await postAssets?.cover,
        'cover-thumb': await postAssets?.['cover-thumb'],
      },
      authors: {},
    },
  }

  for (const author of data.authors ?? []) {
    const authorAssets = getAuthorAssets(author)

    if (authorAssets) {
      data.assets.authors[author] = {
        avatar: await authorAssets.avatar,
        records: authorAssets.records,
      }
    }
  }

  return NextResponse.json(data)
}
