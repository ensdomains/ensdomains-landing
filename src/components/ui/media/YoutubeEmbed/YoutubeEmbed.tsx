import styles from './YoutubeEmbed.module.css'

export const YoutubeEmbed = ({ src }: { src: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <iframe
          className={styles.iframe}
          src={'https://www.youtube-nocookie.com/embed/' + src}
          title="YouTube video player"
          frameBorder="0"
          // eslint-disable-next-line @eslint-react/dom/no-unsafe-iframe-sandbox
          sandbox="allow-scripts allow-same-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <a
        href={`https://youtu.be/${src}`}
        target="_blank"
        className={styles.link}
      >
        {/* <FiYoutube /> */}
        {/* TODO: Add icon */} View on Youtube
      </a>
    </div>
  )
}
