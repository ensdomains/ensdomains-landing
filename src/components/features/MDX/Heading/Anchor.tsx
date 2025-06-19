'use client'
import Link from 'next/link'
import type { PropsWithChildren, SVGProps } from 'react'
import styles from './Anchor.module.css'

export const AnchorIcon = (properties: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...properties}
    >
      <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3" />
    </svg>
  )
}

export const Anchor = ({ id, children }: PropsWithChildren<{ id: string }>) => {
  return (
    <div className={styles.anchor}>
      <Link href={`#${id}`} className={styles.iconContainer}>
        <AnchorIcon className={styles.icon} />
      </Link>
      {children}
    </div>
  )
}
