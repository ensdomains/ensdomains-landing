import { deepmergeCustom } from 'deepmerge-ts'
import type { Metadata, ResolvedMetadata } from 'next'

type CreateMetadataOptions = {
  title: Metadata['title']
  description?: string
  path: string
}

export const BASE_URL = new URL('https://ens.domains')

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
