'use client'
import type MiniSearch from 'minisearch'
import type { FaqSearchType } from '~/app/(root)/ensv2/search.json/route'
import { useSearchIndex as useReusableSearchIndex } from '~/hooks/useSearchIndex'

export const faqIndexOptions = {
  fields: ['question', 'answer', 'tags'],
  searchOptions: {
    fuzzy: true,
    prefix: true,
    boost: {
      question: 2,
    },
  },
}

export function useFaqIndex(): MiniSearch<FaqSearchType> | null {
  return useReusableSearchIndex('/ensv2/search.json', faqIndexOptions)
}
