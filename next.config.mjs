import nextMDX from '@next/mdx'

import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'

/** @type {import('@next/mdx').NextMDXOptions} */
const mdxOptions = {
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
}

const withMDX = nextMDX(mdxOptions)

export default withMDX(nextConfig)
