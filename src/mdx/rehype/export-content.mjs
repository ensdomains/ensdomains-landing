import * as acorn from 'acorn'

/**
 * @type {import('unified').Plugin[]}
 */
export default function rehypeExportContent() {
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
