import { clsx } from 'clsx'
import type { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react'

import ui from '~/styles/ui.module.css'
import type { Color } from '~/utils/types'
import styles from './FeaturePreview.module.css'

const Indicator = ({
  indicatorColor,
  isCurrent,
}: {
  indicatorColor: Color
  isCurrent: boolean
}) => {
  return (
    <div
      className={styles.dot}
      style={
        {
          '--dot-color': isCurrent
            ? 'var(--feature-text)'
            : `var(--${indicatorColor})`,
        } as CSSProperties
      }
    ></div>
  )
}

export const FeaturePreview: FC<
  {
    title: string
    text: string
    backgroundColor: Color
    textColor: Color
    position: 0 | 1 | 2
    indicatorColor: Color
    gridSrc: string
    children: ReactNode
  } & Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children'>
> = ({
  title,
  text,
  children,
  className,
  backgroundColor,
  indicatorColor,
  textColor,
  style,
  position: currentPosition,
  gridSrc,
  ...props
}) => {
  return (
    <div
      {...props}
      style={
        {
          backgroundImage: `url(/assets/${gridSrc})`,
          ...style,
          '--feature-bg': `var(--${backgroundColor})`,
          '--feature-text': `var(--${textColor})`,
        } as CSSProperties
      }
      className={clsx(className, styles.container, ui.flex, ui['flex-col'])}
    >
      <div className={styles.top}>
        <div className={clsx(ui.flex, ui['flex-row'], styles.menubar)}>
          {[0, 1, 2].map((position) => (
            <Indicator
              key={position}
              indicatorColor={indicatorColor}
              isCurrent={currentPosition === position}
            />
          ))}
        </div>
        <div className={styles.headline}>
          <h4>{title}</h4>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
      <div className={clsx(ui.flex, ui['flex-center'], styles.children)}>
        {children}
      </div>
    </div>
  )
}
