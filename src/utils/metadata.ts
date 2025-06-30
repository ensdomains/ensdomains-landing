import { deepmergeCustom } from 'deepmerge-ts'
import type { Metadata, ResolvedMetadata } from 'next'

type CreateMetadataOptions = {
  title: Metadata['title']
  description?: string
  path: string
}

// Cloudflare doesn't expose NODE_ENV, so checking the source branch is our easiest workaround
const isProd = process.env.CF_PAGES_BRANCH === 'master'
// On production builds, CF_PAGES_URL points to a Cloudflare preview URL rather than the production domain.
// We default to ens.domains when CF_PAGES_BRANCH is 'master' OR when CF_PAGES_URL is unset.
export const BASE_URL = new URL(
  (!isProd && process.env.CF_PAGES_URL) || 'https://ens.domains',
)

const deepmerge = deepmergeCustom({
  enableImplicitDefaultMerging: true,
  mergeArrays(values, utils, meta) {
    if (meta?.key === 'images') {
      return values.at(-1)
    }
  },
})

export const createMetadata = (
  options: CreateMetadataOptions,
  parentMetadata?: ResolvedMetadata,
  extras?: Metadata,
): Metadata => {
  const { title, path } = options
  const description =
    options.description ?? parentMetadata?.description ?? undefined

  const base: Metadata = {
    // For some reason Next.js is returning a very weird object for `metadataBase`
    // from the parentMetadata, so we need to always set it here even if it is
    // already set in app/layout.tsx
    metadataBase: BASE_URL,
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: title ?? undefined,
      description,
      url: path,
    },
    twitter: {
      title: title ?? undefined,
      description,
    },
  }

  return deepmerge(parentMetadata, base, extras ?? {})
}
