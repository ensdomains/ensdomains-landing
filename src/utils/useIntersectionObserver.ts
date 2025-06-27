import { useEffect, useRef, useState } from 'react'

type State = {
  isIntersecting: boolean
  entry?: IntersectionObserverEntry
}

type UseIntersectionObserverOptions = {
  root?: Element | Document | null
  rootMargin?: string
  threshold?: number | number[]
  freezeOnceVisible?: boolean
  onChange?: (isIntersecting: boolean, entry: IntersectionObserverEntry) => void
  initialIsIntersecting?: boolean
}

type IntersectionReturn = [
  (node?: Element | null) => void,
  boolean,
  IntersectionObserverEntry | undefined,
] & {
  ref: (node?: Element | null) => void
  isIntersecting: boolean
  entry?: IntersectionObserverEntry
}

export function useIntersectionObserver({
  threshold = 0,
  root,
  rootMargin = '0%',
  freezeOnceVisible = false,
  initialIsIntersecting = false,
  onChange,
}: UseIntersectionObserverOptions = {}): IntersectionReturn {
  const [reference, setReference] = useState<Element | undefined>()

  const [state, setState] = useState<State>(() => ({
    isIntersecting: initialIsIntersecting,
    entry: undefined,
  }))

  const callbackReference =
    useRef<UseIntersectionObserverOptions['onChange']>(undefined)

  callbackReference.current = onChange

  const frozen = state.entry?.isIntersecting && freezeOnceVisible

  // biome-ignore lint/correctness/useExhaustiveDependencies: threshold is covered by the JSON.stringify
  useEffect(() => {
    // Ensure we have a ref to observe
    if (!reference) return

    // Ensure the browser supports the Intersection Observer API
    if (!('IntersectionObserver' in window)) return

    // Skip if frozen
    if (frozen) return

    let unobserve: (() => void) | undefined

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        const thresholds = Array.isArray(observer.thresholds)
          ? observer.thresholds
          : [observer.thresholds]

        for (const entry of entries) {
          const isIntersecting =
            entry.isIntersecting &&
            thresholds.some((threshold) => entry.intersectionRatio >= threshold)

          setState({ isIntersecting, entry })

          if (callbackReference.current) {
            callbackReference.current(isIntersecting, entry)
          }

          if (isIntersecting && freezeOnceVisible && unobserve) {
            unobserve()
            unobserve = undefined
          }
        }
      },
      { threshold, root, rootMargin },
    )

    observer.observe(reference)

    return () => {
      observer.disconnect()
    }
  }, [
    reference,
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
    freezeOnceVisible,
  ])

  // ensures that if the observed element changes, the intersection observer is reinitialized
  const previousReference = useRef<Element | null>(null)

  useEffect(() => {
    if (
      !reference &&
      state.entry?.target &&
      !freezeOnceVisible &&
      !frozen &&
      previousReference.current !== state.entry.target
    ) {
      previousReference.current = state.entry.target
      setState({
        isIntersecting: initialIsIntersecting,
        entry: undefined,
      })
    }
  }, [reference, state.entry, freezeOnceVisible, frozen, initialIsIntersecting])

  const result = [
    setReference,
    !!state.isIntersecting,
    state.entry,
  ] as IntersectionReturn

  // Support object destructuring, by adding the specific values.
  result.ref = result[0]
  result.isIntersecting = result[1]
  result.entry = result[2]

  return result
}
