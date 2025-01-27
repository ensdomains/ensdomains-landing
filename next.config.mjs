import nextMDX from '@next/mdx'
import { remarkPlugins, rehypePlugins, recmaPlugins } from './src/mdx/index.mjs'

/** @type {import('@next/mdx').NextMDXOptions} */
const mdxOptions = {
  options: {
    // remarkPlugins: [
    //   ['src/mdx/remark/mdx-annotations.mjs'],
    //   'remark-gfm',
    //   ['src/mdx/remark/import-as-next-images.mjs'],
    //   ['src/mdx/remark/reading-time.mjs'],
    // ],
    // rehypePlugins: [
    //   ['src/mdx/rehype/mdx-annotations.mjs'],
    //   ['src/mdx/rehype/export-content.mjs'],
    //   ['src/mdx/rehype/parse-code-blocks.mjs'],
    //   ['@shikijs/rehype', {
    //     theme: 'vitesse-light',
    //   }],
    //   ['src/mdx/rehype/slugify.mjs'],
    //   ['src/mdx/rehype/add-mdx-exports.mjs'],
    // ],
    // recmaPlugins: [
    //   ['src/mdx/recma/mdx-annotations.mjs'],
    // ],
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
