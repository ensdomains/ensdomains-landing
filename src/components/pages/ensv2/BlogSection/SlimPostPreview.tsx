import Image from 'next/image'
import Link from 'next/link'
import { BlogPostAuthor } from '~/components/features/blog/PostAuthor'
import type { BlogPostWithAssets } from './BlogSection'

export const SlimBlogPostPreview = ({ post }: { post: BlogPostWithAssets }) => {
  // const cover = getPostAssets(post.file)?.['cover-thumb']

  const date = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Link href={'/blog/post/' + post.slug} className="flex flex-col gap-3">
      <div className="aspect-video overflow-hidden rounded bg-ens-gray">
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            className="h-full w-full object-cover"
            alt={post.title}
          />
        ) : (
          <img
            src={post.cover}
            className="h-full w-full object-cover"
            alt={post.title}
          />
        )}
      </div>
      {/* Blog post title, max two lines then ellipsis */}
      <div className="min-h-32 space-y-3">
        <div className="line-clamp-2 text-2xl text-ens-blue-dark leading-ens-none">
          {post.title}
        </div>

        <div className="line-clamp-4 font-serif text-ens-blue-midnight text-xl leading-ens-tight">
          {post.description}
        </div>
      </div>

      <span className="flex flex-wrap gap-2">
        {post.authors.map(([author, avatar]) => (
          <BlogPostAuthor key={author} author={author} avatar={avatar} />
        ))}
        <div className="align-middle">{date}</div>
      </span>
    </Link>
  )
}
