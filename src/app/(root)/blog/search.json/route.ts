import { NextResponse } from 'next/server'
import { getPostsMetadata, importPost } from '~/utils/blog/posts'

export const dynamic = 'force-static'

export async function GET() {
  const postMetadata = await getPostsMetadata()

  const posts = await Promise.all(
    postMetadata.map(async (post) => ({
      meta: post,
      content: await importPost(post.file),
    })),
  )

  const data = posts.map((post) => ({
    ...post.meta,
    content: post.content.plainContent,
    readingTime: post.content.readingTime,
  }))

  return NextResponse.json(data)
}
