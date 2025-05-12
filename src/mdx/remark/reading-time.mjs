import * as acorn from 'acorn'
import getReadingTime from 'reading-time'

export default function remarkReadingTime() {
  return (tree) => {
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
