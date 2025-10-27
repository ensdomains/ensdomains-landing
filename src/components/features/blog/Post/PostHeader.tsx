import clsx from 'clsx'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import lightBlue from '~/assets/pathways/patterns/light-blue-1.svg'
import type { BlogPostMetadata } from '~/utils/blog/metadata'
import { formatTag, getAuthorAssets } from '~/utils/blog/utils'
import { formatDateHumanly } from '~/utils/formatters'
import { BlogPostAuthor, BlogPostAuthorSeparator } from '../PostAuthor'

export const PostHeader = ({
  post,
  readingTime,
  children,
}: PropsWithChildren<{
  post: BlogPostMetadata
  readingTime: string
}>) => {
  const date = formatDateHumanly(post.date)

  return (
    <header
      className={clsx(
        'relative w-full px-4 pt-[100px] pb-8 md:px-8 md:pt-[120px] xl:pt-[160px] xl:pb-20',
      )}
    >
      <div
        className="-z-10 absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${lightBlue.src})`,
          backgroundSize: '24px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Desktop Layout: Vertical Split */}
      <div className="mx-auto hidden justify-between gap-2 md:flex md:max-w-6xl">
        {/* Left Side: Authors and Title */}
        <div className="flex max-w-2/3 flex-col gap-5">
          <div className="flex gap-2">
            {post.authors.map(async (author, index) => (
              <BlogPostAuthor
                key={author}
                author={author}
                avatar={await getAuthorAssets(author)?.avatar}
                separator={index !== post.authors.length - 1}
              />
            ))}
          </div>
          <h1 className="text-5xl lg:text-6xl">{post.title}</h1>
        </div>

        {/* Right Side: Date/Reading Time and Tags */}
        <div className="flex flex-col items-end justify-between">
          <div className="flex flex-col items-end font-mono uppercase">
            <span>{date}</span>
            <span>{readingTime}</span>
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            {post.tags.map((tag) => (
              <Link
                href={`/blog/tag/${tag}`}
                className="block rounded-[2px] bg-ens-blue-midnight px-3 py-3 font-mono text-ens-white text-xs leading-[120%] tracking-[0.24px] transition-colors duration-200 hover:bg-ens-blue"
                key={tag}
              >
                {formatTag(tag)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout: Vertical Stack */}
      <div className="mx-auto flex max-w-[60ch] flex-col gap-5 md:hidden">
        {/* Tags at the top */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              href={`/blog/tag/${tag}`}
              className="block rounded-[2px] bg-ens-blue-midnight px-3 py-2 font-mono text-ens-white text-xs leading-[120%] tracking-[0.24px] transition-colors duration-200 hover:bg-ens-blue"
              key={tag}
            >
              {formatTag(tag)}
            </Link>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl">{post.title}</h1>

        {/* Authors, Date, and Reading Time with separators */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Authors */}
          {post.authors.map(async (author, _index) => (
            <BlogPostAuthor
              key={author}
              author={author}
              avatar={await getAuthorAssets(author)?.avatar}
              separator
            />
          ))}
          {/* Date and Reading Time */}
          <span>{date}</span>
          <BlogPostAuthorSeparator />
          <span>{readingTime}</span>
        </div>
      </div>

      {children}
    </header>
  )
}
