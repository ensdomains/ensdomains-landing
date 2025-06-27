import { useEffect, useState } from 'react'

export const queries = {
  desktop: '(min-width: 1280px)',
  tablet: '(min-width: 768px)',
  mobile: '(max-width: 768px)',
} as const

export type Dimension = keyof typeof queries

export function useMq() {
  const [queryMatch, setQueryMatch] = useState<Dimension>('mobile')

  useEffect(() => {
    const mediaQueryLists: Record<Dimension, MediaQueryList | undefined> = {
      tablet: undefined,
      mobile: undefined,
      desktop: undefined,
    }
    const keys = Object.keys(queries) as Dimension[]

    const handleQueryListener = () => {
      for (const media of keys) {
        if (mediaQueryLists[media]?.matches) {
          setQueryMatch(media)
          break
        }
      }
    }

    for (const media of keys) {
      mediaQueryLists[media] = window.matchMedia(queries[media])
    }

    handleQueryListener()

    for (const media of keys) {
      if (typeof queries[media] === 'string') {
        mediaQueryLists[media]?.addEventListener('change', handleQueryListener)
      }
    }

    return () => {
      for (const media of keys) {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media]?.removeEventListener(
            'change',
            handleQueryListener,
          )
        }
      }
    }
  }, [])

  return queryMatch
}
