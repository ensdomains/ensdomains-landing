import clsx from 'clsx'
import Link from 'next/link'
import type { HTMLAttributes } from 'react'
import styles from './PageButtons.module.css'

type NativeDivProperties = HTMLAttributes<HTMLDivElement>

type Properties = {
  /** Total number of pages */
  total: number
  current: number
  /** Maximum number of buttons to show */
  max?: number
  hrefPrefix?: string
} & Omit<NativeDivProperties, 'children' | 'onChange'>

enum Marker {
  ellipsis = -1,
}

/**
 * PageButtons component with improved pagination logic
 */
export const PageButtons = ({
  total,
  current,
  hrefPrefix = '',
  ...properties
}: Properties) => {
  if (total <= 1) {
    return null
  }

  const pageNumbers: number[] = []

  // Always show first page
  pageNumbers.push(1)

  // If there's a gap before the current page's group
  if (current - 1 > 2) {
    pageNumbers.push(Marker.ellipsis)
  }

  // Show the page before current (if it exists and isn't 1)
  if (current - 1 > 1) {
    pageNumbers.push(current - 1)
  }

  // Show current page (if it isn't 1 or last)
  if (current !== 1 && current !== total) {
    pageNumbers.push(current)
  }

  // Show the page after current (if it exists and isn't last)
  if (current + 1 < total) {
    pageNumbers.push(current + 1)
  }

  // If there's a gap after the current page's group
  if (current + 1 < total - 1) {
    pageNumbers.push(Marker.ellipsis)
  }

  // Always show last page (if it's not already included)
  if (pageNumbers[pageNumbers.length - 1] !== total) {
    pageNumbers.push(total)
  }

  return (
    <div className={styles.container} {...properties}>
      {pageNumbers.map((value, index) =>
        value === Marker.ellipsis ? (
          <p
            data-testid="pagebutton-dots"
            // biome-ignore lint/suspicious/noArrayIndexKey: Page buttons
            key={`${value}-${index}`}
            className={styles.dots}
          >
            ...
          </p>
        ) : (
          <Link
            className={clsx(
              styles.button,
              value === current && styles.buttonCurrent,
            )}
            data-testid="pagebutton"
            key={value}
            type="button"
            href={`${hrefPrefix}${
              value === 1 ? (hrefPrefix ? '' : '/') : '/' + value
            }`}
          >
            {value}
          </Link>
        ),
      )}
    </div>
  )
}
