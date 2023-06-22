import React from 'react'

const defaultValue = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
}

const queries = {
  xs: '(min-width: 400px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
}

const BreakpointContext = React.createContext(defaultValue)

function BreakpointProvider({
  children,
}) {
  const [queryMatch, setQueryMatch] = React.useState({})

  React.useEffect(() => {
    const mediaQueryLists = {}
    const keys = Object.keys(queries)
    let isAttached = false

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media]?.matches)
        return acc
      }, {} )
      setQueryMatch(updatedMatches)
    }

    if (window && window.matchMedia) {
      const matches = {}
      keys.forEach((media) => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media] = window.matchMedia(queries[media])
          matches[media] = mediaQueryLists[media]?.matches || false
        } else {
          matches[media] = false
        }
      })
      setQueryMatch(matches)
      isAttached = true
      keys.forEach((media) => {
        if (typeof queries[media] === 'string') {
          mediaQueryLists[media]?.addListener(handleQueryListener)
        }
      })
    }

    return () => {
      if (isAttached) {
        keys.forEach((media) => {
          if (typeof queries[media] === 'string') {
            mediaQueryLists[media]?.removeListener(handleQueryListener)
          }
        })
      }
    }
  }, [queries])

  return <BreakpointContext.Provider value={queryMatch}>{children}</BreakpointContext.Provider>
}

function useBreakpoint() {
  const context = React.useContext(BreakpointContext)
  if (context === defaultValue) {
    throw new Error('useBreakpoint must be used within BreakpointProvider')
  }
  return context
}
export { useBreakpoint, BreakpointProvider }
