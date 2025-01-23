import { CSSProperties, Fragment } from 'react'
import { PostCoverImage } from '~/components/Blog/Post/PostCoverImage'
import { PostFooter } from '~/components/Blog/Post/PostFooter'
import { PostHeader } from '~/components/Blog/Post/PostHeader'
import { getPostBySlug, getPostsMetadata, importPost } from '~/utils/blog/posts'
import styles from './page.module.css'
import { AssetNotFoundError, getPostAssets } from '~/utils/blog/utils'
import { BASE_URL, createMetadata } from '~/utils/metadata'
import { ResolvingMetadata } from 'next'
import { Article, WithContext } from 'schema-dts'

type PageProperties = {
  params: { slug: string }
}

export const generateMetadata = async (
  { params }: PageProperties,
  parent: ResolvingMetadata,
) => {
  const post = await getPostBySlug(params.slug)
  const parentMetadata = await parent

  const postAssets = getPostAssets(post.file)

  if (!postAssets) {
    throw new AssetNotFoundError(post.file)
  }

  const postCover = await postAssets.cover
  console.log('parentMetadata', await parentMetadata)

  const meta = createMetadata(
    {
      title: post.title,
      description: post.description,
      path: '/blog/post/' + params.slug,
    },
    await parentMetadata,
    {
      openGraph: {
        type: 'article',
        authors: post.authors,
        images: [
          {
            url: new URL(postCover.src, BASE_URL),
            width: postCover.width,
            height: postCover.height,
          },
        ],
        tags: post.tags,
        url: '/blog/post/' + params.slug,
      },
      twitter: {
        card: 'summary_large_image',
      },
      authors: post.authors?.map(author => ({
        name: author,
        url: `/blog/author/${author}`,
      })),
    },
  )

  console.log('meta', meta)

  return meta
}

export async function generateStaticParams() {
  const pages = await getPostsMetadata()

  return pages.map(post => ({
    slug: post.slug,
  }))
}

const page = async ({ params }: PageProperties) => {
  const post = await getPostBySlug(params.slug)

  const { PostContent, readingTime } = await importPost(post.file)
  const postCover = await getPostAssets(post.file)?.cover

  const schema: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'image': postCover?.src,
    'datePublished': new Date(post.date).toISOString(),
    'author': post.authors?.map(author => ({
      '@type': 'Person',
      'name': author,
      'url': 'https://ens.app/' + author,
    })),
  }

  return (
    <section
      style={
        {
          '--page-text': 'var(--ens-medium-blue)',
          '--page-bg': 'var(--ens-light-magenta)',
          '--page-text-hover': 'var(--ens-hover-magenta)',
        } as CSSProperties
      }
    >
      {/* eslint-disable-next-line @eslint-react/dom/no-dangerously-set-innerhtml */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PostHeader post={post} readingTime={readingTime} />
      <article className={styles.article}>
        <PostCoverImage post={post} />
        <div className={styles.content}>
          <PostContent />
          {/* Hydration errors occur when PostContent is the only child in the parent div. */}
          <Fragment />
        </div>
        <PostFooter post={post} />
      </article>
    </section>
  )
}

export default page
