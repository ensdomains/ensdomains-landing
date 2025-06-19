import { clsx } from 'clsx'
import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

import styles from './CrossFadeImage.module.css'

type CrossFadeImageProperties = {
  sources: { src: string; alt: string }[]
  duration: number
  className?: string
  children?: (props: { alt: string; index: number }) => ReactNode
}

export const CrossFadeImage = ({
  sources,
  duration,
  className,
  children,
}: CrossFadeImageProperties) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1 % sources.length)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionTimeoutReference = useRef<number | null>(null)

  useEffect(() => {
    const transition = () => {
      setIsTransitioning(true)
      transitionTimeoutReference.current = window.setTimeout(() => {
        setCurrentImageIndex(nextImageIndex)
        setNextImageIndex((nextIndex) => (nextIndex + 1) % sources.length)
        setIsTransitioning(false)
      }, duration)
    }

    const interval = setInterval(transition, duration)

    return () => {
      clearInterval(interval)

      if (transitionTimeoutReference.current) {
        clearTimeout(transitionTimeoutReference.current)
      }
    }
  }, [sources, duration, nextImageIndex])

  const opacity = (index: number) => {
    if (currentImageIndex === index) return 1
    else if (nextImageIndex === index && isTransitioning) {
      return 1 - duration / 1000 / 2
    } else return 0
  }

  const style = (index: number) =>
    ({
      opacity: opacity(index),
      '--duration': `${duration}ms`,
    }) as CSSProperties

  return (
    <>
      <div className={clsx(styles.container, className)}>
        {sources.map(({ src, alt }, index) => {
          return (
            <img
              key={src}
              className={clsx(styles.img)}
              src={src}
              alt={alt}
              style={style(index)}
            />
          )
        })}
      </div>
      {typeof children === 'function'
        ? children({
            alt: sources[currentImageIndex].alt,
            index: currentImageIndex,
          })
        : undefined}
    </>
  )
}
