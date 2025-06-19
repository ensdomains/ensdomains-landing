import clsx from 'clsx'
import { ABCMarist } from 'fonts'
import Image from 'next/image'
import Link from 'next/link'
import type { BlogPostMetadataPlus } from '~/utils/blog/posts'
import { getAuthorAssets, getPostAssets } from '~/utils/blog/utils'
import { BlogPostAuthor } from './PostAuthor'
import styles from './PostPreview.module.css'

export const BlogPostPreview = async ({
  post,
  highlighted = false,
}: {
  post: BlogPostMetadataPlus
  highlighted?: boolean
}) => {
  const cover = await getPostAssets(post.file)?.[
    highlighted ? 'cover' : 'cover-thumb'
  ]

  const date = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Link
      href={'/blog/post/' + post.slug}
      className={clsx(
        styles['preview-link'],
        highlighted && styles['preview-link-highlighted'],
      )}
    >
      <div className={styles['preview-cover-container']}>
        {cover ? (
          <Image
            src={cover}
            className={styles['preview-cover']}
            alt={post.title}
          />
        ) : (
          <img
            src={post.cover}
            className={styles['preview-cover']}
            alt={post.title}
          />
        )}
      </div>
      {/* Blog post title, max two lines then ellipsis */}
      <div
        className={clsx(
          styles['preview-content-container'],
          highlighted && styles['preview-content-container-highlighted'],
        )}
      >
        <span className={styles['preview-title']}>{post.title}</span>

        <span
          className={clsx(ABCMarist.className, styles['preview-description'])}
        >
          {post.description}
        </span>

        <span className={clsx(styles['preview-authors'])}>
          {post.authors.map(async (author) => (
            <BlogPostAuthor
              key={author}
              author={author}
              avatar={await getAuthorAssets(author)?.avatar}
            />
          ))}
          <span>{date}</span>
        </span>
      </div>
    </Link>
  )
}
