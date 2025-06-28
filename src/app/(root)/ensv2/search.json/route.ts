import MiniSearch from 'minisearch'
import { NextResponse } from 'next/server'
import type { ReactNode } from 'react'
import { faqs } from '~/components/pages/ensv2/FAQ/entries'

export const dynamic = 'force-static'

function isIterable(node: unknown): node is Iterable<ReactNode> {
  return (
    typeof node === 'object' &&
    node !== null &&
    typeof (node as any)[Symbol.iterator] === 'function'
  )
}

function renderReactNodeToPlainText(node: ReactNode): string {
  if (
    typeof node === 'string' ||
    typeof node === 'number' ||
    typeof node === 'boolean' ||
    typeof node === 'bigint'
  ) {
    return node.toString()
  }
  if (!node) {
    return ''
  }
  // is array or iterable
  if (Array.isArray(node)) {
    return node.map(renderReactNodeToPlainText).join(' ')
  }

  if (isIterable(node)) {
    return Array.from(node).map(renderReactNodeToPlainText).join(' ')
  }

  if (node instanceof Promise) {
    return ''
  }

  const children = (node.props as { children?: ReactNode | ReactNode[] })
    ?.children

  if (!children) {
    return ''
  }

  return renderReactNodeToPlainText(children)
}

export async function GET() {
  const miniSearch = new MiniSearch({
    fields: ['question', 'answer', 'tags'],
  })

  miniSearch.addAll(
    Object.entries(faqs).map(([id, { answer, question, tags }]) => ({
      id,
      question,
      tags,
      answer: renderReactNodeToPlainText(answer),
    })),
  )

  return NextResponse.json(miniSearch)
}
