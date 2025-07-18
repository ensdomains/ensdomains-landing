/*
 * Based on https://github.com/ibrahimcesar/react-lite-youtube-embed
 */
'use client'
import * as React from 'react'
import styles from './LiteYoutubeEmbed.module.css'

export type imgResolution =
  | 'default'
  | 'mqdefault'
  | 'hqdefault'
  | 'sddefault'
  | 'maxresdefault'

export interface LiteYouTubeProps {
  announce?: string
  id: string
  title: string
  buttonText?: string
  activatedClass?: string
  adNetwork?: boolean
  aspectHeight?: number
  aspectWidth?: number
  iframeClass?: string
  noCookie?: boolean
  cookie?: boolean
  enableJsApi?: boolean
  alwaysLoadIframe?: boolean
  params?: string
  playerClass?: string
  playlist?: boolean
  playlistCoverId?: string
  poster?: imgResolution
  webp?: boolean
  wrapperClass?: string
  onIframeAdded?: () => void
  muted?: boolean
  thumbnail?: string
  blurThumbnail?: boolean
  rel?: string
  containerElement?: keyof React.JSX.IntrinsicElements
  style?: React.CSSProperties
}

function PlayButton() {
  return (
    <svg
      width="102"
      height="91"
      viewBox="0 0 102 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <path
        d="M98.6953 41.4608L30.429 1.63878C28.0277 0.238016 24.9449 1.06401 23.5656 3.47773L0.810186 43.2998C-0.068552 44.8375 -0.0685521 46.7254 0.810186 48.2632L23.5656 88.0852C24.9449 90.4989 28.0277 91.3249 30.429 89.9242L98.6953 50.1021C102.004 48.1719 102.004 43.391 98.6953 41.4608Z"
        fill="#F53293"
      />
    </svg>
  )
}

function LiteYouTubeEmbedComponent(
  props: LiteYouTubeProps,
  ref: React.Ref<HTMLIFrameElement>,
) {
  const [preconnected, setPreconnected] = React.useState(false)
  const [iframe, setIframe] = React.useState(props.alwaysLoadIframe || false)
  const videoId = encodeURIComponent(props.id)
  const videoPlaylistCoverId =
    typeof props.playlistCoverId === 'string'
      ? encodeURIComponent(props.playlistCoverId)
      : null
  const videoTitle = props.title
  const posterImp = props.poster || 'hqdefault'
  const announceWatch = props.announce || 'Watch'

  // Iframe Parameters
  const iframeParams = new URLSearchParams({
    ...(props.muted ? { mute: '1' } : {}),
    // When the iframe is not loaded immediately, the video should play as soon as its loaded (which happens when the button is clicked)
    ...(props.alwaysLoadIframe ? {} : { autoplay: '1', state: '1' }),
    ...(props.enableJsApi ? { enablejsapi: '1' } : {}),
    ...(props.playlist ? { list: videoId } : {}),
  })

  let ytUrl = props.noCookie
    ? 'https://www.youtube-nocookie.com'
    : 'https://www.youtube.com'
  ytUrl = props.cookie
    ? 'https://www.youtube.com'
    : 'https://www.youtube-nocookie.com'

  const iframeSrc = !props.playlist
    ? `${ytUrl}/embed/${videoId}?${iframeParams.toString()}`
    : `${ytUrl}/embed/videoseries?${iframeParams.toString()}`

  const format = props.webp ? 'webp' : 'jpg'
  const vi = props.webp ? 'vi_webp' : 'vi'
  const posterUrl =
    props.thumbnail ||
    (!props.playlist
      ? `https://i.ytimg.com/${vi}/${videoId}/${posterImp}.${format}`
      : `https://i.ytimg.com/${vi}/${videoPlaylistCoverId}/${posterImp}.${format}`)

  const activatedClassImp = props.activatedClass || styles['lyt-activated']
  const adNetworkImp = props.adNetwork || false
  const aspectHeight = props.aspectHeight || 9
  const aspectWidth = props.aspectWidth || 16
  const iframeClassImp = props.iframeClass || ''
  const playerClassImp = props.playerClass || styles['lty-playbtn']
  const wrapperClassImp = props.wrapperClass || styles['yt-lite']
  const onIframeAdded = props.onIframeAdded || (() => {})
  const rel = props.rel ? 'prefetch' : 'preload'
  const ContainerElement = props.containerElement || 'article'
  const style = props.style || {}

  const warmConnections = () => {
    if (preconnected) return
    setPreconnected(true)
  }

  const addIframe = () => {
    if (iframe) return
    setIframe(true)
  }

  React.useEffect(() => {
    if (iframe) {
      onIframeAdded()
    }
  }, [iframe, onIframeAdded])

  return (
    <>
      <link rel={rel} href={posterUrl} as="image" />
      {preconnected && (
        <>
          <link rel="preconnect" href={ytUrl} />
          <link rel="preconnect" href="https://www.google.com" />
          {adNetworkImp && (
            <>
              <link rel="preconnect" href="https://static.doubleclick.net" />
              <link
                rel="preconnect"
                href="https://googleads.g.doubleclick.net"
              />
            </>
          )}
        </>
      )}
      <ContainerElement
        onPointerOver={warmConnections}
        onClick={addIframe}
        className={`${wrapperClassImp} ${iframe ? activatedClassImp : ''} ${props.blurThumbnail ? styles.blur : ''}`}
        data-title={videoTitle}
        style={{
          ...({
            '--lyt-background': `url(${posterUrl})`,
            '--aspect-ratio': `${(aspectHeight / aspectWidth) * 100}%`,
          } as React.CSSProperties),
          ...style,
        }}
      >
        <button
          type="button"
          className={playerClassImp}
          aria-label={`${announceWatch} ${videoTitle}`}
        >
          <PlayButton />
          {props.buttonText && (
            <span className={styles['lty-playbtn-text']}>
              {props.buttonText}
            </span>
          )}
        </button>
        {iframe && (
          <iframe
            ref={ref}
            className={iframeClassImp}
            title={videoTitle}
            width="560"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={iframeSrc}
          ></iframe>
        )}
      </ContainerElement>
    </>
  )
}

export default React.forwardRef<HTMLIFrameElement, LiteYouTubeProps>(
  LiteYouTubeEmbedComponent,
)
