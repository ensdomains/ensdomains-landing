import { clsx } from 'clsx'
import type { FC, ReactNode } from 'react'
import { ExternalLink } from 'react-external-link'
import ui from '~/styles/ui.module.css'
import styles from './LinkList.module.css'

export type ILink = {
  title: string
  href?: string
  description: ReactNode
}

export const LinkList: FC<{ links: ILink[] }> = ({ links }) => {
  return (
    <ul className={styles.list}>
      {links.map(({ title, href, description }) => (
        <li key={title}>
          {href ? (
            <ExternalLink href={href}>
              <span>{title}</span>
              <svg
                className={styles.arrow}
                width="77"
                height="76"
                viewBox="0 0 77 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="presentation"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.84668 0.276611H76.3245V75.7545H64.7126V20.0995L11.1728 73.6392L2.96193 65.4283L56.5017 11.8886H0.84668V0.276611Z"
                  fill="currentColor"
                />
              </svg>
            </ExternalLink>
          ) : (
            <span>{title}</span>
          )}
          <p className={clsx(ui.serif, styles.paragraph)}>{description}</p>
        </li>
      ))}
    </ul>
  )
}
