'use client'

import { useQuery } from '@tanstack/react-query'
import MiniSearch, { type Options } from 'minisearch'

export interface SearchIndexOptions<T> extends Options<T> {
  fields: string[]
}

/**
 * A reusable hook for loading and managing search indices using TanStack Query
 * @param searchPath - The path to the search JSON file
 * @param options - MiniSearch configuration options
 * @returns The search index instance or null if not loaded
 */
export function useSearchIndex<T extends Record<string, unknown>>(
  searchPath: string,
  options: SearchIndexOptions<T>,
): MiniSearch<T> | null {
  const { data: searchIndex } = useQuery({
    queryKey: ['searchIndex', searchPath],
    queryFn: async () => {
      const response = await fetch(searchPath)
      if (!response.ok) {
        throw new Error(`Failed to fetch search index from ${searchPath}`)
      }
      const data = await response.text()
      return MiniSearch.loadJSON(data, options as Options<T>)
    },
    staleTime: Infinity, // Search indices don't change often
    gcTime: 1000 * 60 * 60, // Keep in cache for 1 hour
  })

  return searchIndex || null
}
