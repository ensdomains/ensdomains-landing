import MiniSearch, { type SearchResult } from 'minisearch'
import { NextResponse } from 'next/server'
import { getPostsMetadata, importPost } from '~/utils/blog/posts'

export type BlogSearchType = {
  id: string
  title: string
  description: string
  content: string
  authors: string[]
  tags: string[]
  readingTime: string
  date: string
}

const storedFields = [
  'title',
  'description',
  'authors',
  'tags',
] as const satisfies (keyof BlogSearchType)[]

export type BlogSearchResult = SearchResult & {
  [key in (typeof storedFields)[number]]: BlogSearchType[key]
}

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
    id: post.meta.slug,
    title: post.meta.title,
    description: post.meta.description,
    content: post.content.plainContent,
    authors: post.meta.authors,
    tags: post.meta.tags,
    readingTime: post.content.readingTime,
    date: post.meta.date,
  }))

  const miniSearch = new MiniSearch<BlogSearchType>({
    fields: ['title', 'description', 'content', 'authors', 'tags'],
    storeFields: storedFields,
    searchOptions: {
      fuzzy: true,
      prefix: true,
      boost: {
        title: 3,
        description: 2,
        content: 1,
        authors: 2,
        tags: 2,
      },
    },
  })

  miniSearch.addAll(data)

  return NextResponse.json(miniSearch)
}
