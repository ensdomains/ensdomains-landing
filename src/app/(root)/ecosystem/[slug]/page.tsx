import { readdir } from 'node:fs/promises'
import clsx from 'clsx'
import type { MDXProps } from 'mdx/types'
import type { ResolvingMetadata } from 'next'
import type { StaticImageData } from 'next/image'
import type { JSX } from 'react'
import { ImageFormats } from 'scripts/build-assets/types'
import { z } from 'zod'
import headerStyles from '~/components/features/blog/Post/PostHeader.module.css'
import ui from '~/styles/ui.module.css'
import { BASE_URL, createMetadata } from '~/utils/metadata'
import articleStyles from '../../blog/post/[slug]/page.module.css'
import styles from './page.module.css'

const CURRENT_DIR = new URL(import.meta.url)
const CONTENT_DIR = new URL('../../../../../case-studies', CURRENT_DIR)

type PageProps = {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async (
  props: PageProps,
  parent: ResolvingMetadata,
) => {
  const params = await props.params
  const { meta } = await getPostBySlug(params.slug)
  const parentMetadata = await parent

  let ogImage: StaticImageData | undefined

  // Use 'cover.{webp,png,jpg,jpeg}' as the opengraph image if it exists
  for (const format of ImageFormats) {
    try {
      ogImage = await import(
        `case-studies/${params.slug}/cover.${format}`
      ).then((asset) => asset.default)
      break
    } catch {}
  }

  return createMetadata(
    {
      title: `${meta.company} Case Study`,
      description: meta.subtitle,
      path: '/ecosystem/' + params.slug,
    },
    parentMetadata,
    {
      openGraph: {
        type: 'article',
        title: `How ${meta.company} uses ENS`,
        images: ogImage
          ? [
              {
                url: new URL(ogImage.src, BASE_URL),
                width: ogImage.width,
                height: ogImage.height,
              },
            ]
          : parentMetadata.openGraph?.images,
        url: '/ecosystem/' + params.slug,
      },
      twitter: {
        card: 'summary_large_image',
      },
    },
  )
}

export async function generateStaticParams() {
  const pages = await readdir(CONTENT_DIR)

  // The slug is the filename without the .mdx extension
  return pages.map((post) => ({
    slug: post.split('.')[0],
  }))
}

const CaseStudyFrontmatterSchema = z.object({
  company: z.string(),
  subtitle: z.string().optional(),
})

async function getPostBySlug(post: string) {
  const { default: PostContent, meta: _meta } = (await import(
    `case-studies/${post}/readme.mdx`
  )) as {
    default: (_properties: MDXProps) => JSX.Element
    meta: Record<string, unknown>
  }

  const meta = await CaseStudyFrontmatterSchema.parseAsync(_meta)

  return { meta, PostContent }
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
          <h1 className={headerStyles.title}>Case Study: {meta.company}</h1>
        </div>
      </header>

      <article className={articleStyles.article}>
        <div className={clsx(articleStyles.content, styles.content)}>
          {meta.subtitle && (
            <h2 className={styles.subtitle}>{meta.subtitle}</h2>
          )}
          <PostContent />
        </div>
      </article>
    </section>
  )
}
