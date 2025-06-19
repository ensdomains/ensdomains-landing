'use client'

import { clsx } from 'clsx'
import type { ReactNode } from 'react'
import { MessageBubbleIcon } from '~/components/shared/icons/index'
import ui from '~/styles/ui.module.css'
import { useIntersectionObserver } from '~/utils/useIntersectionObserver'
import styles from './MessageAnimation.module.css'

const MessageBox = ({
  children,
  isIntersecting,
}: {
  children: ReactNode
  isIntersecting: boolean
}) => {
  return (
    <div
      className={clsx(
        styles.box,
        isIntersecting ? styles.animating : undefined,
      )}
    >
      <span className={styles.boxContent}>{children}</span>
      <MessageBubbleIcon className={styles.bubble} />
    </div>
  )
}

export const MessageAnimation = ({ messages }: { messages: string[] }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.75,
  })

  return (
    <div className={clsx(styles.container, ui.flex, ui['flex-col'])} ref={ref}>
      {messages.map((message) => (
        <MessageBox key={message} {...{ isIntersecting }}>
          {message}
        </MessageBox>
      ))}
    </div>
  )
}
