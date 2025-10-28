'use client'

import { useMemo, useState } from 'react'
import type {
  BlogSearchResult,
  BlogSearchType,
} from '~/app/(root)/blog/search.json/route'
import { useSearchIndex } from '../../../../hooks/useSearchIndex'

const searchIndexOptions = {
  fields: ['title', 'description', 'content', 'authors', 'tags'],
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
}

export function useBlogSearch() {
  const searchIndex = useSearchIndex<BlogSearchType>(
    '/blog/search.json',
    searchIndexOptions,
  )

  const [searchResults, setSearchResults] = useState<BlogSearchResult[]>([])

  const search = useMemo(
    () => (query: string) => {
      if (!searchIndex || !query) {
        setSearchResults([])
        return
      }

      const results = searchIndex.search(query)

      setSearchResults(
        results
          .sort((a, b) => b.score - a.score)
          .slice(0, 5) as BlogSearchResult[],
      )
    },
    [searchIndex],
  )

  return { search, searchResults, isLoading: !searchIndex }
}
