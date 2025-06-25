import { readdir } from 'node:fs/promises'
import { z } from 'zod'
import articleStyles from '../../blog/post/[slug]/page.module.css'
import clsx from 'clsx'
import headerStyles from '~/components/Blog/Post/PostHeader.module.css'
import styles from './page.module.css'
import ui from '~/styles/ui.module.css'
import { MDXProps } from 'mdx/types'
import type { JSX } from 'react'

const CURRENT_DIR = new URL(import.meta.url)
const CONTENT_DIR = new URL('../../../../../case-studies', CURRENT_DIR)

export async function generateStaticParams() {
  const pages = await readdir(CONTENT_DIR)

  // The slug is the filename without the .mdx extension
  return pages.map((post) => ({
    slug: post.split('.')[0],
  }))
}

const CaseStudyFrontmatterSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
})

async function getPostBySlug(post: string) {
  const { default: PostContent, meta: _meta } = await import(`case-studies/${post}.mdx`) as {
    default: (_properties: MDXProps) => JSX.Element
    meta: Record<string, unknown>
  }

  const meta = await CaseStudyFrontmatterSchema.parseAsync(_meta)

  return { meta, PostContent }
}

type PageProps = {
  params: Promise<{ slug: string; path: string }>
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const { PostContent, meta } = await getPostBySlug(slug)

  return (
    <section>
      <header
        className={clsx(
          ui['flex'],
          ui['flex-center'],
          ui['flex-col'],
          ui['dots-bg'],
          headerStyles.header,
        )}
      >
        <div className={headerStyles.content}>
          <h1 className={headerStyles.title}>{meta.title}</h1>
        </div>
      </header>

      <article className={articleStyles.article}>
        <div className={clsx(articleStyles.content, styles.content)}>
          <h2 className={styles.subtitle}>{meta.subtitle}</h2>
          <PostContent />
        </div>
      </article>
    </section>
  )
}
