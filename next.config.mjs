import nextMDX from '@next/mdx'
import { recmaPlugins, rehypePlugins, remarkPlugins } from './src/mdx/index.mjs'

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
