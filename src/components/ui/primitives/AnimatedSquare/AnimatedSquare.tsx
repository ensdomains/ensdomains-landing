import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'
import styles from './AnimatedSquare.module.css'

export const AnimatedSquare = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={clsx(styles['animated-square'], className)}></div>
)
