/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, FC, PropsWithChildren } from 'react'

import { Anchor } from './Anchor'
import clsx from 'clsx'
import styles from './Heading.module.css'
export const Heading: FC<
  PropsWithChildren & {
    level?: 2 | 3 | 4 | 5 | 6
    id: string
    anchor?: boolean
    className?: string
  }
> = ({ level = 2, children, id, anchor = true, ...properties }) => {
  const Component = `h${level}` as any as ComponentType<React.HTMLAttributes<HTMLHeadingElement>>

  return (
    <>
      <Component
        id={anchor ? id : undefined}
        className={clsx(styles.heading, styles[`h${level}`], properties.className)}
        children={
          (
            <>
              {anchor
                ? (
                    <Anchor id={id}>{children}</Anchor>
                  )
                : (
                    children
                  )}
            </>
          ) as any
        }
        {...properties}
      />
    </>
  )
}
