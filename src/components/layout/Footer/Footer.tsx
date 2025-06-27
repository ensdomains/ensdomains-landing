import { clsx } from 'clsx'
import type { FC } from 'react'
import { ExternalLink } from 'react-external-link'
import ui from '~/styles/ui.module.css'
import styles from './Footer.module.css'

export const Footer: FC<{
  footerItems: {
    title: string
    entries: {
      title: string
      link: string
    }[]
  }[]
  copyrightNotice: string
}> = ({ footerItems, copyrightNotice }) => {
  return (
    <>
      <footer className={styles.container}>
        <img
          className={styles.logo}
          src="/assets/ens_logo_white.svg"
          alt="ENS"
          width={80}
          height={91.285}
        />
        <div className={styles.columns}>
          {footerItems.map((list) => (
            <ul className={styles.ul} key={list.title}>
              <div className={styles.h3}>{list.title}</div>
              {list.entries.map((entry) => (
                <li key={entry.title}>
                  <ExternalLink href={entry.link}>{entry.title}</ExternalLink>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className={styles.ltd}>{copyrightNotice}</div>
      </footer>
      <div className={clsx(styles.extra, ui['dots-bg'])}></div>
    </>
  )
}
