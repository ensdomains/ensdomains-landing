import * as acorn from 'acorn'
import { toString as mdastToString } from 'mdast-util-to-string'

/**
 * @type {import('unified').Plugin[]}
 */
export default function rehypeExportContent() {
  return (tree) => {
    const test = mdastToString(tree, {
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
