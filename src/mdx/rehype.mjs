import { slugifyWithCounter } from '@sindresorhus/slugify'
import * as acorn from 'acorn'
import { toString } from 'mdast-util-to-string'
import { mdxAnnotations } from 'mdx-annotations'
import rehypeShiki from '@shikijs/rehype'
import { visit } from 'unist-util-visit'

function rehypeParseCodeBlocks() {
  return (tree) => {
    visit(tree, 'element', (node, _nodeIndex, parentNode) => {
      if (node.tagName === 'code' && node.properties.className) {
        parentNode.properties.language = node.properties.className[0]?.replace(
          /^language-/,
          '',
        )
      }
    })
  }
}

function rehypeSlugify() {
  return (tree) => {
    const slugify = slugifyWithCounter()

    visit(tree, 'element', (node) => {
      if (
        (node.tagName === 'h2' || node.tagName === 'h3')
        && !node.properties.id
      ) {
        node.properties.id = slugify(toString(node))
      }
    })
  }
}

function rehypeAddMDXExports(getExports) {
  return (tree) => {
    const exports = Object.entries(getExports(tree))

    for (const [name, value] of exports) {
      for (const node of tree.children) {
        if (
          node.type === 'mdxjsEsm'
          && new RegExp(`export\\s+const\\s+${name}\\s*=`).test(node.value)
        ) {
          return
        }
      }

      const exportString = `export const ${name} = ${value}`

      tree.children.push({
        type: 'mdxjsEsm',
        value: exportString,
        data: {
          estree: acorn.parse(exportString, {
            sourceType: 'module',
            ecmaVersion: 'latest',
          }),
        },
      })
    }
  }
}

function getSections(node) {
  const sections = []

  for (const child of node.children ?? []) {
    if (child.type === 'element' && child.tagName === 'h2') {
      sections.push(`{
        title: ${JSON.stringify(toString(child))},
        navtitle: ${JSON.stringify(child.properties.navtitle ?? '')},
        id: ${JSON.stringify(child.properties.id)},
        ...${child.properties.annotation}
      }`)
    }
    else if (child.children) {
      sections.push(...getSections(child))
    }
  }

  return sections
}

/**
 * @type {import('unified').Plugin[]}
 */
const rehypeExportContent = () => {
  return (tree) => {
    const test = toString(tree, {
      includeHtml: true,
    }).replace(/\n/g, ' ')

    const exportString = `export const plainContent = ${JSON.stringify(test)}`

    tree.children.push({
      type: 'mdxjsEsm',
      value: exportString,
      data: {
        estree: acorn.parse(exportString, {
          sourceType: 'module',
          ecmaVersion: 'latest',
        }),
      },
    })
  }
}

export const rehypePlugins = [
  /**
   * Add support for annotations to MDX.
   * An annotation is a JavaScript object associated with an MDX node. The object properties are passed to the resulting JSX element as props.
   * @see https://www.npmjs.com/package/mdx-annotations
   */
  mdxAnnotations.rehype,
  rehypeExportContent,
  /**
   * Parse code blocks to add the language to the properties
   */
  rehypeParseCodeBlocks,
  /**
   * Add syntax highlighting to code blocks
   */
  [
    rehypeShiki,
    {
      theme: 'vitesse-light',
    },
  ],
  /**
   * Add an id to h2 elements
   */
  rehypeSlugify,
  /**
   * Adds export const sections = [{...}, {...}, ...]; to the top of the MDX file from the h2 elements
   */
  [
    rehypeAddMDXExports,
    tree => ({
      sections: `[${getSections(tree).join(',')}]`,
    }),
  ],
]
