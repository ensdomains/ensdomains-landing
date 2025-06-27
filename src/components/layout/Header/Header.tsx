import { clsx } from 'clsx'
import type { FC, HTMLAttributes, PropsWithChildren } from 'react'

import ui from '~/styles/ui.module.css'
import styles from './Header.module.css'

export const Header: FC<
  PropsWithChildren<
    {
      title: string
      subtitle?: string
      description?: string
      tag?: string
      cta?: [string, string][]
    } & HTMLAttributes<HTMLElement>
  >
> = ({
  title,
  subtitle,
  tag,
  description,
  children,
  cta,
  className,
  ...props
}) => {
  return (
    <header
      {...props}
      className={clsx(
        ui['flex'],
        ui['flex-center'],
        ui['flex-col'],
        tag && ui['dots-bg'],
        styles.header,
        className,
      )}
    >
      {tag && <div className={styles.tag}>{tag}</div>}
      <div
        className={clsx(
          ui.flex,
          ui['flex-col'],
          ui['flex-center'],
          styles['h1-section'],
        )}
      >
        <h1 className={styles.h1}>
          {title}
          {subtitle && (
            <>
              <br />
              <span className={styles.feelBetter}>{subtitle}</span>
            </>
          )}
        </h1>
        {description && <p className={styles.p}>{description}</p>}
        <div className={styles.children}>{children}</div>
      </div>
      {cta && (
        <div className={clsx(ui.flex, ui['flex-row'], styles.cta)}>
          {cta.map(([text, url]) => (
            <a key={url} href={url} className={clsx(ui.button)}>
              {text}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
