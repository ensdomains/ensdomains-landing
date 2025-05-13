import { URL } from 'node:url'

const MDXFolder = new URL('.', import.meta.url).pathname
const localPlugin = (plugin) => MDXFolder + plugin

export const remarkPlugins = [
  [localPlugin('remark/mdx-annotations.mjs')],
  ['remark-gfm'],
  [localPlugin('remark/import-as-next-images.mjs')],
  [localPlugin('remark/reading-time.mjs')],
]
export const rehypePlugins = [
  [localPlugin('rehype/mdx-annotations.mjs')],
  [localPlugin('rehype/export-content.mjs')],
  [localPlugin('rehype/parse-code-blocks.mjs')],
  [
    '@shikijs/rehype',
    {
      theme: 'vitesse-light',
    },
  ],
  [localPlugin('rehype/slugify.mjs')],
  [localPlugin('rehype/add-mdx-exports.mjs')],
]

export const recmaPlugins = [[localPlugin('recma/mdx-annotations.mjs')]]
