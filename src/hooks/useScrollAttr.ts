import { useCallback, useEffect } from 'react'
import { useEventListener } from '~/utils/useEventListener'

export const useScrollAttr = (
  ref: React.RefObject<HTMLElement | null>,
  attribute: string,
  scrollThreshold: number,
) => {
  const checkScroll = useCallback(() => {
    const element = ref.current
    if (!element) return

    const currentValue = element.getAttribute(attribute)

    if (window.scrollY > scrollThreshold && !currentValue) {
      element.setAttribute(attribute, 'true')
    } else if (window.scrollY < scrollThreshold && currentValue) {
      element.removeAttribute(attribute)
    }
  }, [ref, attribute, scrollThreshold])

  useEffect(() => {
    checkScroll()
  }, [checkScroll])

  useEventListener('scroll', checkScroll)
}
