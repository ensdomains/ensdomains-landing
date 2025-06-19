import type { ENSRecord } from 'build-assets/assets.gen'
import { clsx } from 'clsx'
import type { Metadata, ResolvingMetadata } from 'next'
import type { CSSProperties } from 'react'
import { match } from 'ts-pattern'
import blogUi from '~/app/(root)/blog/blog-ui.module.css'
import { BlogHeader } from '~/components/features/blog/BlogHeader'
import { BlogPostPreview } from '~/components/features/blog/PostPreview'
import { Link } from '~/components/features/MDX/Link'
import {
  BrowserIcon,
  EnsNavIcon,
  GithubIcon,
  TwitterIcon,
} from '~/components/shared/icons/index'
import { PageButtons } from '~/components/ui/navigation/PageButtons/PageButtons'
import { useTranslation } from '~/i18n/useTranslation'
import { splitArray, splitArrayBiasFirst } from '~/utils/array/split'
import { getAuthors } from '~/utils/blog/posts'
import { getAuthorAssets } from '~/utils/blog/utils'
import { createMetadata } from '~/utils/metadata'
import type { PageProps as BasePageProps } from '~/utils/types'
import styles from './page.module.css'

const MAX_PER_PAGE = 6

type PageProps = BasePageProps & {
  params: { author: string; page: string[] }
}

export async function generateStaticParams() {
  const authors = await getAuthors()

  return Object.entries(authors).flatMap(([author, posts]) => {
    const pages = splitArray(posts, MAX_PER_PAGE)

    return pages.map((_, index) => ({
      author,
      page: [index === 0 ? '' : (index + 1).toString()],
      lang: 'en',
    }))
  })
}

export const generateMetadata = async (
  props: PageProps,
  parentMetadata: ResolvingMetadata,
): Promise<Metadata> => {
  const params = await props.params
  const { t } = await useTranslation(params.lang, 'translation')

  return createMetadata(
    {
      title: params.author,
      description: t('blog.author.meta.description', { author: params.author }),
      path: `/blog/author/${params.author}`,
    },
    await parentMetadata,
  )
}

const AuthorSocialLink = ({
  record,
  value,
}: {
  record: ENSRecord | (string & {})
  value: string
}) =>
  match(record)
    .with('com.github', () => (
      <Link href={`https://github.com/${value}`} target="_blank">
        <GithubIcon />
      </Link>
    ))
    .with('com.twitter', () => (
      <Link href={`https://x.com/${value}`} target="_blank">
        <TwitterIcon />
      </Link>
    ))
    .with('url', () => (
      <Link href={value} target="_blank">
        <BrowserIcon />
      </Link>
    ))
    .otherwise(() => null)

export default async function Blog(props: PageProps) {
  const params = await props.params
  const { t } = await useTranslation(params.lang, 'translation')

  const authors = await getAuthors()

  const author = getAuthorAssets(params.author)

  const postsUnlimited = authors[params.author]

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
        tag={t('blog.author.hero.tag')}
        title={params.author}
        description={author?.records?.description}
        style={{}}
      >
        <div className={clsx(styles['author-social-links'])}>
          <Link
            href={`https://app.ens.domains/${params.author}`}
            target="_blank"
          >
            <EnsNavIcon width="24" height="24" />
          </Link>
          {Object.entries(author?.records || {}).map(([record, value]) => (
            <AuthorSocialLink key={record} record={record} value={value} />
          ))}
        </div>
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
