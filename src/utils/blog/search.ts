import type { PostMetadata } from '~/app/(root)/blog/post/[slug]/metadata.json/route'

export type MatchesPosition = { start: number; length: number }[]

export type SearchEntry = {
  slug: string
  title: string
  description: string
  _formatted: {
    content: string
    slug: string
    title: string
    description: string
  }
  _matchesPosition: {
    content: MatchesPosition
    slug: MatchesPosition
    title: MatchesPosition
    description: MatchesPosition
  }
}

export type SearchResult = {
  estimatedTotalHits: number
  hits: SearchEntry[]
  limit: number
  offset: number
  processingTimeMs: number
}

// Temporary dev url
const SEARCH_URL = 'https://search.ens.dev/indexes/ens-landing-posts/search'
const SEARCH_API_KEY =
  '7464a61301612803bdb73b27dc8113ff96f70a45ccc13a8e6749b5ea918ea30f'

export const getSearchResults = async (
  query: string,
): Promise<SearchResult> => {
  if (!query || query.length < 3)
    return {
      hits: [],
      estimatedTotalHits: 0,
      limit: 0,
      offset: 0,
      processingTimeMs: 0,
    }

  const result = await fetch(SEARCH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SEARCH_API_KEY}`,
    },
    body: JSON.stringify({
      q: query,
      limit: 5,
      showMatchesPosition: true,
      attributesToCrop: [],
      // attributesToCrop: ['content'],
      attributesToRetrieve: [
        'title',
        'slug',
        // 'description',
        'authors',
        'tags',
      ],
      cropLength: 10,
      attributesToHighlight: [],
      // attributesToHighlight: ['content', 'title'],
    }),
  })

  if (!result.ok) {
    throw new Error('Failed to fetch search results')
  }

  return result.json()
}

export const fetchPostMetadata = async (slug: string) => {
  const response = await fetch(`/blog/post/${slug}/metadata.json`)

  if (!response.ok) {
    throw new Error('Failed to fetch post metadata')
  }

  return response.json() as Promise<PostMetadata>
}
