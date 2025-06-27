'use client'

import { clsx } from 'clsx'
import type { ReactNode } from 'react'
import CountUp, { type CountUpProps } from 'react-countup'
import ui from '~/styles/ui.module.css'
import styles from './StatsCounter.module.css'

export const StatsCounter = ({
  captions,
  stats,
  children,
  ...props
}: {
  captions: Record<string, string>
  stats: Record<string, number>
  children?: ReactNode
} & Partial<Omit<CountUpProps, 'children'>>) => {
  return (
    <div className={clsx(ui.flex, ui['flex-center'], styles.container)}>
      <div className={styles.bg}>
        {children}
        <div className={ui['dots-bg']} />
      </div>
      <div className={styles.statGrid}>
        {Object.entries(stats).map(([key, count], i) => (
          <div key={key} className={styles.stat}>
            <CountUp
              start={count * 0.8}
              end={count}
              enableScrollSpy
              className={styles.value}
              scrollSpyDelay={100 * i}
              formattingFn={(n) => n.toLocaleString()}
              {...props}
            />{' '}
            {captions[key]}
          </div>
        ))}
      </div>
    </div>
  )
}
