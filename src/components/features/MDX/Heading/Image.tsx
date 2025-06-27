import clsx from 'clsx'
import NextImage, { type ImageProps as NextImageProperties } from 'next/image'
import type { ReactNode } from 'react'
import styles from './Image.module.css'

type ImageVariant = 'full' | 'wide' | 'normal' | 'small'

type ImageProperties = NextImageProperties & {
  size?: ImageVariant
}

// Parse markdown links and return both plain text and JSX with links
const parseMarkdownLinks = (text: string) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: (string | ReactNode)[] = []
  let lastIndex = 0

  // Find all matches first
  const matches = Array.from(text.matchAll(linkRegex))

  matches.forEach((match, index) => {
    // Add text before the link (preserving whitespace)
    if (match.index !== undefined && match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    // Add the link
    parts.push(
      <a
        key={match.index || index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {match[1]}
      </a>,
    )

    lastIndex = (match.index || 0) + match[0].length
  })

  // Add remaining text after the last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  // Replace markdown links with just the text for plain text version
  const plainText = text.replace(linkRegex, '$1')

  return {
    plainText,
    jsx: parts.length > 0 ? parts : text,
  }
}

export const Image = (properties: ImageProperties) => {
  const { title: originalTitle, ...imageProps } = properties

  // Parse the title to extract plain text and JSX with links
  const parsedTitle = originalTitle ? parseMarkdownLinks(originalTitle) : null

  const image = (
    <NextImage
      {...imageProps}
      title={parsedTitle?.plainText}
      className={clsx(styles.image)}
    />
  )

  if (!originalTitle) {
    return image
  }

  return (
    <figure className={styles.figure}>
      {image}
      <figcaption className={styles.caption}>{parsedTitle?.jsx}</figcaption>
    </figure>
  )
}
