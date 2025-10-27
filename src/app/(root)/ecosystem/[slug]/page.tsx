import { readdir } from 'node:fs/promises'
import clsx from 'clsx'
import type { MDXProps } from 'mdx/types'
import type { ResolvingMetadata } from 'next'
import type { StaticImageData } from 'next/image'
import type { JSX } from 'react'
import { ImageFormats } from 'scripts/build-assets/types'
import { z } from 'zod'
import ui from '~/styles/ui.module.css'
import { BASE_URL, createMetadata } from '~/utils/metadata'

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
          ui['dots-bg'],
          'relative flex w-full flex-col items-center justify-center px-4 pt-[120px] pb-8 md:px-24 md:pt-[140px] lg:pt-[230px] lg:pb-[80px]',
        )}
      >
        <h1 className="font-medium text-[40px] text-ens-blue-dark leading-[96%] tracking-[-0.015em] md:text-[80px] lg:text-[124px]">
          Case Study: {meta.company}
        </h1>
      </header>

      <article
        className={clsx(
          'prose prose-ens md:prose-lg mx-auto mt-10 mb-12 max-md:px-4',
        )}
      >
        {meta.subtitle && (
          <h3 className="mx-auto max-w-4xl text-2xl md:text-[32px] lg:text-[40px]">
            {meta.subtitle}
          </h3>
        )}
        <PostContent />
      </article>
    </section>
  )
}
