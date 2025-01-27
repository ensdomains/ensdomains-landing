import { CSSProperties, Fragment } from 'react'
import { PostCoverContent } from '~/components/Blog/Post/PostCoverContent'
import { PostFooter } from '~/components/Blog/Post/PostFooter'
import { PostHeader } from '~/components/Blog/Post/PostHeader'
import { getPostBySlug, getPostsMetadata, importPost } from '~/utils/blog/posts'
import styles from './page.module.css'
import { AssetNotFoundError, getPostAssets } from '~/utils/blog/utils'
import { BASE_URL, createMetadata } from '~/utils/metadata'
import { ResolvingMetadata } from 'next'
import { Article, WithContext } from 'schema-dts'

type PageProperties = {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async (props: PageProperties, parent: ResolvingMetadata) => {
  const params = await props.params;
  const post = await getPostBySlug(params.slug)
  const parentMetadata = await parent

  const postAssets = getPostAssets(post.file)

  if (!postAssets) {
    throw new AssetNotFoundError(post.file)
  }

  const postCover = await postAssets.cover

  const meta = createMetadata(
    {
      title: post.title,
      description: post.description,
      path: '/blog/post/' + params.slug,
    },
    parentMetadata,
    {
      openGraph: {
        type: 'article',
        authors: post.authors,
        images:
          postCover
            ? [{
                url: new URL(postCover.src, BASE_URL),
                width: postCover.width,
                height: postCover.height,
              }]
            : undefined,
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

  return meta
}

export async function generateStaticParams() {
  const pages = await getPostsMetadata()

  return pages.map(post => ({
    slug: post.slug,
  }))
}

const page = async (props: PageProperties) => {
  const params = await props.params;
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
      <script
        type="application/ld+json"
        // eslint-disable-next-line @eslint-react/dom/no-dangerously-set-innerhtml
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PostHeader post={post} readingTime={readingTime} />
      <article className={styles.article}>
        <PostCoverContent post={post} />
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
