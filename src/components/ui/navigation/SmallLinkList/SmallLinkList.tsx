import type { FC } from 'react'
import { ExternalLink } from 'react-external-link'
import styles from './SmallLinkList.module.css'

export type ILink = {
  title: string
  href: string
}

export const SmallLinkList: FC<{ links: ILink[] }> = ({ links }) => {
  return (
    <ul className={styles.list}>
      {links.map(({ title, href }) => (
        <li key={title}>
          <ExternalLink href={href}>
            <span>{title}</span>
            <span>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="presentation"
              >
                <path
                  d="M1.07143 12.4286L12 1.5M12 1.5H0M12 1.5V13.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}
