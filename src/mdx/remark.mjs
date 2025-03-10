import * as acorn from 'acorn'
import jsx from 'acorn-jsx'
import { toString } from 'mdast-util-to-string'
import { mdxAnnotations } from 'mdx-annotations'
import getReadingTime from 'reading-time'
import gfm from 'remark-gfm'
import { visit } from 'unist-util-visit'

/**
 * Extracts key-value pairs from a string surrounded by square brackets [].
 *
 * @param {string} input - The input string containing key-value pairs inside [].
 * @returns {Record<string, string | number> | undefined} An object representing the extracted key-value pairs, or null if the input is invalid.
 */
const extractKeyValuePairs = (input) => {
  const regex = /^\[(.*)]\s?/ // Regular expression to match key-value pairs inside square brackets
  const matches = input.match(regex)

  if (!matches) {
    return // The input is not surrounded by []
  }

  const keyValuePairsString = matches[1]
  const keyValuePairsRegex = /(\w+)\s*=\s*(?:"([^"]+)"|(\d+))/g
  const keyValuePairs = {}

  let pairMatch

  while ((pairMatch = keyValuePairsRegex.exec(keyValuePairsString)) !== null) {
    const [, key, valueString, numericValueString] = pairMatch
    const value
      = valueString !== undefined ? valueString : Number(numericValueString)

    keyValuePairs[key] = value
  }

  return keyValuePairs
}

/**
 * @type {import('unified').Plugin}
 */
export const remarkImportAsNextImages = () => {
  /**
   * @param {import('unist').Parent} tree
   */
  return async (tree) => {
    visit(
      tree,
      /**
       * @param {import('unist').Parent} node
       */
      async (node, index, parent) => {
        if (node.type !== 'paragraph') return

        /**
         * @type {import('unist').Node | undefined}
         */
        const imageNode = node.children.at(0)

        if (!imageNode) return

        if (imageNode.type !== 'image') return

        // Only process local images
        if (!imageNode.url.startsWith('./')) return

        /** @type string[] */
        const attributes = []

        if (imageNode.alt) attributes.push(`alt="${imageNode.alt}"`)

        if (imageNode.title) attributes.push(`title="${imageNode.title}"`)

        /**
         * @type {import('unist').Node | undefined}
         */
        const nextNode = node.children.at(1)

        const keyValuePairs
          = nextNode && nextNode.type === 'text'
            ? extractKeyValuePairs(nextNode.value)
            : undefined

        for (const [key, value] of Object.entries(keyValuePairs || {})) {
          attributes.push(`${key}="${value}"`)
        }

        const code = `(async (x) => {return <Image {...(await x)?.default} ${
          attributes.length > 0 ? attributes.join(' ') + ' ' : ''
        }/>})(import("${imageNode.url}"))`

        let estree

        try {
          estree = acorn.Parser.extend(jsx()).parse(code, {
            sourceType: 'module',
            ecmaVersion: 'latest',
          })
        }
        catch {
          estree = {
            type: 'Program',
            body: [
              {
                type: 'ExpressionStatement',
                expression: {
                  type: 'Literal',
                  value: '[[ERROR PARSING IMAGE SYNTAX!!!]]',
                },
              },
            ],
            sourceType: 'module',
          }
        }

        const newImageNode = {
          type: 'mdxFlowExpression',
          data: {
            estree,
          },
        }

        if (keyValuePairs) {
          nextNode.value = nextNode.value.replace(/^\[(.*)]\s?/, '')

          if (nextNode.value === '') {
            node.children.splice(1, 1)
          }
        }

        if (node.children.length === 1) {
          parent.children.splice(index, 1, newImageNode)
        }
        else {
          node.children.splice(0, 1)
          parent.children.splice(index, 0, newImageNode)
        }
      },
    )
  }
}

function remarkReadingTime() {
  return function (tree) {
    const textOnPage = toString(tree, {
      includeHtml: false,
      includeImageAltText: false,
    })

    const readingTime = getReadingTime(textOnPage)

    if (!readingTime) return
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"

    const exportString = `export const readingTime = "${readingTime.text}"`

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

export const remarkPlugins = [
  /**
   * Add support for annotations to MDX.
   * An annotation is a JavaScript object associated with an MDX node. The object properties are passed to the resulting JSX element as props.
   * @see https://www.npmjs.com/package/mdx-annotations
   */
  mdxAnnotations.remark,
  /**
   * Add support for GitHub Flavored Markdown.
   */
  gfm,
  remarkImportAsNextImages,
  remarkReadingTime,
]
