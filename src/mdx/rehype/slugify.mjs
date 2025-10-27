import { slugifyWithCounter } from '@sindresorhus/slugify'
import { toString as toStringUtil } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'

const TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export default function rehypeSlugify() {
  return (tree) => {
    const slugify = slugifyWithCounter()

    visit(tree, 'element', (node) => {
      if (
        TAGS.includes(node.tagName) &&
        !node.properties.id
      ) {
        node.properties.id = slugify(toStringUtil(node))
      }
    })
  }
}
