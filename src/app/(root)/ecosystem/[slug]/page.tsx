import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import { readdir, readFile } from 'node:fs/promises'
import { z } from 'zod'
import articleStyles from '../../blog/post/[slug]/page.module.css'
import clsx from 'clsx'
import headerStyles from '~/components/Blog/Post/PostHeader.module.css'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './page.module.css'
import ui from '~/styles/ui.module.css'

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
  const contentDirPath = fileURLToPath(CONTENT_DIR)
  const path = join(contentDirPath, `${post}.mdx`)
  const file = await readFile(path, 'utf8')
  const { content, data } = matter(file)
  const meta = await CaseStudyFrontmatterSchema.parseAsync(data)

  return { meta, content }
}

type PageProps = {
  params: Promise<{ slug: string; path: string }>
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const { content, meta } = await getPostBySlug(slug)

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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </article>
    </section>
  )
}
