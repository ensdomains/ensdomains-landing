import * as acorn from 'acorn'

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
    } else if (child.children) {
      sections.push(...getSections(child))
    }
  }

  return sections
}

export default function rehypeAddMDXExports() {
  return (tree) => {
    const exports = Object.entries({
      sections: `[${getSections(tree).join(',')}]`,
    })

    for (const [name, value] of exports) {
      for (const node of tree.children) {
        if (
          node.type === 'mdxjsEsm' &&
          new RegExp(`export\\s+const\\s+${name}\\s*=`).test(node.value)
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
