'use client'
import MiniSearch, { type Options } from 'minisearch'
import { useEffect, useState } from 'react'

export type FaqSearchType = {
  question: string
  answer: string
  tags?: string[]
}

export const searchIndexOptions = {
  fields: ['question', 'answer', 'tags'],
  searchOptions: {
    fuzzy: true,
    prefix: true,
    boost: {
      question: 2,
    },
  },
} satisfies Options<FaqSearchType>

export function useSearchIndex(): MiniSearch<FaqSearchType> | null {
  const [searchIndex, setSearchIndex] =
    useState<MiniSearch<FaqSearchType> | null>(null)

  useEffect(() => {
    ;(async () => {
      const response = await fetch('/ensv2/search.json')
      const data = await response.text()
      const searchIndex = MiniSearch.loadJSON(data, searchIndexOptions)
      setSearchIndex(searchIndex)
    })()
  }, [])

  return searchIndex
}
