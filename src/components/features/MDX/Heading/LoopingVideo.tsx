'use client'

import {
  type ComponentProps,
  startTransition,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  ViewTransition,
} from 'react'
import { cn } from '~/utils/style'
import { useMq } from '~/utils/useMq'
import { Breakout } from './Breakout'

type VideoProperties = ComponentProps<'video'>

const isVideoPlaying = (video: HTMLVideoElement | null) => {
  if (!video) return false

  return (
    video.currentTime > 0 &&
    !video.paused &&
    !video.ended &&
    video.readyState > 2
  )
}

const ExpandableVideo = (properties: VideoProperties) => {
  const [fullScreen, setFullScreen] = useState(false)

  const openModal = () => {
    // Prevent entering fullscreen if the video isn't currently playing.
    // This handles cases where the browser (e.g., Safari in low power mode) blocks autoplay;
    // the first click should start playback, not trigger fullscreen mode.
    if (!isVideoPlaying(videoRef.current)) return

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

  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <Breakout className="my-[30px] md:my-[36px]">
      {fullScreen && (
        <>
          {/** biome-ignore lint/a11y/useKeyWithClickEvents: click event is handled by the keyboard event */}
          {/** biome-ignore lint/a11y/noStaticElementInteractions: backdrop is interactive */}
          <div
            className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop-blur-xs"
            onClick={closeModal}
          />
          <div
            style={{
              aspectRatio:
                (videoRef.current?.videoWidth ?? 4) /
                (videoRef.current?.videoHeight ?? 3),
            }}
          />
        </>
      )}
      <ViewTransition>
        <video
          autoPlay
          loop
          muted
          playsInline
          {...properties}
          className={cn(
            'cursor-pointer rounded',
            fullScreen
              ? '-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-20 max-h-screen w-[80%] object-contain'
              : 'h-auto w-full',
            properties.className,
          )}
          onClick={fullScreen ? closeModal : openModal}
          ref={videoRef}
        />
      </ViewTransition>
    </Breakout>
  )
}

export const LoopingVideo = (properties: VideoProperties) => {
  const deviceSize = useMq()
  const isDesktop = deviceSize === 'desktop'

  if (isDesktop) {
    return <ExpandableVideo {...properties} />
  }

  return (
    <Breakout>
      <video
        className={cn('h-auto w-full rounded', properties.className)}
        autoPlay
        loop
        muted
        playsInline
        {...properties}
      />
    </Breakout>
  )
}
