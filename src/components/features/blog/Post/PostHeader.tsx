import clsx from 'clsx'
import Link from 'next/link'
import ui from '~/styles/ui.module.css'
import type { BlogPostMetadata } from '~/utils/blog/metadata'
import { formatTag, getAuthorAssets } from '~/utils/blog/utils'
import { BlogPostAuthor } from '../PostAuthor'
import styles from './PostHeader.module.css'

export const PostHeader = ({
  post,
  readingTime,
}: {
  post: BlogPostMetadata
  readingTime: string
}) => {
  const date = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <header
      className={clsx(
        ui['flex'],
        ui['flex-center'],
        ui['flex-col'],
        ui['dots-bg'],
        styles.header,
      )}
    >
      <div className={styles.content}>
        <div className={styles['tag-container']}>
          {post.tags.map((tag) => (
            <Link href={`/blog/tag/${tag}`} className={styles.tag} key={tag}>
              {formatTag(tag)}
            </Link>
          ))}
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles['authors-container']}>
          {post.authors.map(async (author) => (
            <BlogPostAuthor
              key={author}
              author={author}
              avatar={await getAuthorAssets(author)?.avatar}
            />
          ))}
          <span className={styles.date}>{date}</span>
          <span>•</span>
          <span className={styles.readingTime}>{readingTime}</span>
        </div>
      </div>
    </header>
  )
}
