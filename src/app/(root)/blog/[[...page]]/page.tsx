import { clsx } from 'clsx'
import type { Metadata, ResolvingMetadata } from 'next'
import type { CSSProperties } from 'react'
import blogUi from '~/app/(root)/blog/blog-ui.module.css'
import { BlogHeader } from '~/components/features/blog/BlogHeader'
import { BlogPostPreview } from '~/components/features/blog/PostPreview'
import { Searchbar } from '~/components/features/blog/Search/Searchbar'
import { PageButtons } from '~/components/ui/navigation/PageButtons/PageButtons'
import { useTranslation } from '~/i18n/useTranslation'
import { splitArrayBiasFirst } from '~/utils/array/split'
import { getPostsMetadata } from '~/utils/blog/posts'
import { createMetadata } from '~/utils/metadata'
import type { PageProps as BasePageProps } from '~/utils/types'
import styles from './page.module.css'

const MAX_PER_PAGE = 6

type PageProps = BasePageProps & {
  params: { page: string[] }
}

export async function generateStaticParams() {
  const metas = await getPostsMetadata()
  const pages = splitArrayBiasFirst(metas, MAX_PER_PAGE)

  const parameters: PageProps['params'][] = pages.map((_, index) => ({
    page: [(index + 1).toString()],
    lang: 'en',
  }))

  parameters[0] = { page: [''], lang: 'en' }

  return parameters
}

export const generateMetadata = async (
  props: PageProps,
  parentMetadata: ResolvingMetadata,
): Promise<Metadata> => {
  const params = await props.params
  const { t } = await useTranslation(params.lang, 'translation')

  return createMetadata(
    {
      title: `${t('blog.hero.tag')}`,
      description: t('blog.meta.description'),
      path: '/blog',
    },
    await parentMetadata,
  )
}

export default async function Blog(props: PageProps) {
  const params = await props.params
  const { t } = await useTranslation(params.lang, 'translation')

  const postsUnlimited = await getPostsMetadata()

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
      <BlogHeader
        tag={t('blog.hero.tag')}
        title={t('blog.hero.title')}
        style={{}}
      >
        <Searchbar />
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
