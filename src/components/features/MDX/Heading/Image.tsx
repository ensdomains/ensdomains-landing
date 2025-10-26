'use client'

import NextImage, { type ImageProps as NextImageProperties } from 'next/image'
import {
  startTransition,
  useEffect,
  useEffectEvent,
  useState,
  ViewTransition,
} from 'react'
import { cn } from '~/utils/style'
import { useMq } from '~/utils/useMq'
import { Breakout } from './Breakout'

type ImageProperties = NextImageProperties & {}

const getImageDimensions = (
  properties: ImageProperties,
): {
  width: number | undefined
  height: number | undefined
  aspectRatio: number | undefined
} => {
  const src =
    typeof properties.src === 'object'
      ? 'default' in properties.src
        ? properties.src.default
        : properties.src
      : undefined
  const rawWidth = properties.width ?? src?.width
  const rawHeight = properties.height ?? src?.height
  const width = typeof rawWidth === 'string' ? parseInt(rawWidth) : rawWidth
  const height = typeof rawHeight === 'string' ? parseInt(rawHeight) : rawHeight

  const aspectRatio = width && height ? width / height : undefined
  return { width, height, aspectRatio }
}

const ExpandableImage = (properties: ImageProperties) => {
  const [fullScreen, setFullScreen] = useState(false)

  const openModal = () => {
    startTransition(() => {
      setFullScreen(true)
    })
  }

  const closeModal = () => {
    startTransition(() => {
      setFullScreen(false)
    })
  }

  const handleEscape = useEffectEvent((e: KeyboardEvent) => {
    if (e.key === 'Escape' && fullScreen) {
      closeModal()
    }
  })

  // biome-ignore lint/correctness/useExhaustiveDependencies: useEffectEvent should not be used in the dependency array
  useEffect(() => {
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const { aspectRatio } = getImageDimensions(properties)

  return (
    <Breakout>
      {fullScreen && (
        <>
          {/** biome-ignore lint/a11y/useKeyWithClickEvents: click event is handled by the keyboard event */}
          {/** biome-ignore lint/a11y/noStaticElementInteractions: backdrop is interactive */}
          <div
            className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop-blur-xs"
            onClick={closeModal}
          />
          <div style={{ aspectRatio: aspectRatio ?? 4 / 3 }} />
        </>
      )}
      <ViewTransition>
        <NextImage
          {...properties}
          className={cn(
            'h-auto w-full cursor-pointer rounded',
            fullScreen &&
              '-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-20 w-[80%]',
            properties.className,
          )}
          onClick={fullScreen ? closeModal : openModal}
        />
      </ViewTransition>
    </Breakout>
  )
}

export const Image = (properties: ImageProperties) => {
  const deviceSize = useMq()
  const isDesktop = deviceSize === 'desktop'

  if (isDesktop) {
    return <ExpandableImage {...properties} />
  }

  return (
    <Breakout>
      <NextImage
        {...properties}
        className={cn('h-auto w-full rounded', properties.className)}
      />
    </Breakout>
  )
}
