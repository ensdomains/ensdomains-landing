import { clsx } from 'clsx'
import { CSSProperties } from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import { useTranslation } from '~/i18n/useTranslation'
import blogUi from '~/app/(root)/blog/blog-ui.module.css'
import styles from './page.module.css'
import { PageProps as BasePageProps } from '~/utils/types'

// import { BlogPostMetadata } from '~/utils/blog/metadata'
import { getTags } from '~/utils/blog/posts'
import { splitArray, splitArrayBiasFirst } from '~/utils/array/split'
import { PageButtons } from '~/components/PageButtons/PageButtons'
import { BlogPostPreview } from '~/components/Blog/PostPreview'
import { titleCase } from '~/utils/formatters'
import { BlogHeader } from '~/components/Blog/BlogHeader'
import { createMetadata } from '~/utils/metadata'

const MAX_PER_PAGE = 6

type PageProps = BasePageProps & {
  params: { tag: string, page: string[] }
}

export async function generateStaticParams() {
  const tags = await getTags()

  return Object.entries(tags).flatMap(([tag, posts]) => {
    const pages = splitArray(posts, MAX_PER_PAGE)

    return pages.map((_, index) => ({
      tag,
      page: [index === 0 ? '' : (index + 1).toString()],
      lang: 'en',
    }))
  })
}

export const generateMetadata = async (
  { params }: PageProps,
  parentMetadata: ResolvingMetadata,
): Promise<Metadata> => {
  const { t } = await useTranslation(params.lang, 'translation')

  return createMetadata(
    {
      title: titleCase(params.tag),
      description: t('blog.tag.meta.description', {
        tag: titleCase(params.tag),
      }),
      path: `/blog/tag/${params.tag}`,
    },
    await parentMetadata,
  )
}

export default async function Blog({ params }: PageProps) {
  const { t } = await useTranslation(params.lang, 'translation')

  const tags = await getTags()

  const postsUnlimited = tags[params.tag]

  const pages = splitArrayBiasFirst(postsUnlimited, MAX_PER_PAGE)

  const currentPage = params.page ? Number.parseInt(params.page[0], 10) : 1
  const isHomePage = currentPage === 1

  const posts = pages[currentPage - 1]

  if (!posts) {
    throw new Error('Page not found')
  }

  return (
    <div
      style={
        {
          '--page-text': 'var(--ens-magenta)',
          '--page-bg': 'var(--ens-light-magenta)',
          '--page-text-hover': 'var(--ens-hover-magenta)',
        } as CSSProperties
      }
    >
      <BlogHeader tag={t('blog.tag.hero.tag')} title={titleCase(params.tag)} style={{}}>
      </BlogHeader>

      <section className={clsx(blogUi['page'])}>
        <div className={clsx(styles['blog-grid'])}>
          {posts.map((post, i) => (
            <BlogPostPreview
              key={post.slug}
              post={post}
              highlighted={isHomePage && i === 0}
            />
          ))}
        </div>
        <PageButtons
          hrefPrefix="/blog"
          total={pages.length}
          current={currentPage}
        />
      </section>
    </div>
  )
}
