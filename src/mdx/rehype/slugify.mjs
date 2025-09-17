import { slugifyWithCounter } from '@sindresorhus/slugify'
import { toString as toStringUtil } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit'

export default function rehypeSlugify() {
  return (tree) => {
    const slugify = slugifyWithCounter()

    visit(tree, 'element', (node) => {
      if (
        (node.tagName === 'h2' || node.tagName === 'h3') &&
        !node.properties.id
      ) {
        node.properties.id = slugify(toStringUtil(node))
      }
    })
  }
}
