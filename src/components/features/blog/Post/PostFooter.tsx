import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import type { BlogPostMetadata } from '~/utils/blog/metadata'
import { getAuthorAssets } from '~/utils/blog/utils'
import styles from './PostFooter.module.css'

export const FooterAuthor = async ({ author }: { author: string }) => {
  const authorData = getAuthorAssets(author)
  const avatar = await authorData?.avatar

  return (
    <div className={styles.author}>
      <div className={styles.authorTitle}>Author</div>
      <div className={styles.authorData}>
        <div>
          <div className={styles.authorName}>{author}</div>
          <Link
            href={`/blog/author/${author}`}
            className={clsx(styles.authorLink)}
          >
            View articles
          </Link>
        </div>
        {authorData?.records.description && (
          <div className={clsx(styles.authorDescription, styles.authorDesktop)}>
            {authorData.records.description}
          </div>
        )}
        {avatar ? (
          <Image src={avatar} alt={author} className={styles.authorAvatar} />
        ) : (
          <div className={styles.authorAvatar} />
        )}
      </div>
      {authorData?.records.description && (
        <div className={clsx(styles.authorDescription, styles.authorMobile)}>
          {authorData.records.description}
        </div>
      )}
    </div>
  )
}

export const PostFooter = ({ post }: { post: BlogPostMetadata }) => {
  return (
    <div className={clsx(styles.footer)}>
      {post.authors?.map((author) => (
        <FooterAuthor key={author} author={author} />
      ))}
    </div>
  )
}
