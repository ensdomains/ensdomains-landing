import { clsx } from 'clsx'
import type { FC, ReactNode } from 'react'

import ui from '~/styles/ui.module.css'
import styles from './Carousel.module.css'

export const Carousel: FC<{ children: ReactNode[]; className?: string }> = ({
  children,
  className,
}) => {
  // later will be a real carousel
  return (
    <div className={clsx(ui.flex, ui['flex-col'], styles.carousel, className)}>
      {children}
    </div>
  )
}
