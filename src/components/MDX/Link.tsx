import clsx from 'clsx'
import type { AnchorHTMLAttributes } from 'react'
import styles from './Link.module.css'

export const Link = ({
  className,
  ...properties
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <a {...properties} className={clsx(styles.link, className)} />
}
