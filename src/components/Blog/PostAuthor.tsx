import { clsx } from 'clsx'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import styles from './PostAuthor.module.css'

export const BlogPostAuthor = ({
  author,
  avatar,
  size = 'default',
  separator = true,
}: {
  author: string
  avatar?: StaticImageData
  size?: 'small' | 'default'
  separator?: boolean
}) => {
  return (
    <Link
      href={`/blog/author/${author}`}
      className={clsx(
        styles.author,
        size === 'small' && styles['author-small'],
      )}
    >
      {avatar ? (
        <Image src={avatar} alt="" className={styles['author-avatar']} />
      ) : (
        <div className={styles['author-avatar']} />
      )}
      <span>{author}</span>
      {separator && <BlogPostAuthorSeparator size={size} />}
    </Link>
  )
}

export const BlogPostAuthorSeparator = ({
  size = 'default',
}: {
  size?: 'small' | 'default'
}) => {
  return (
    <span
      className={clsx(
        styles.separator,
        size === 'small' && styles['separator-small'],
      )}
    >
      •
    </span>
  )
}
