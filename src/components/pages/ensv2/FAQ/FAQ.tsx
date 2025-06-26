'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { LinkSVG } from '~/components/shared/icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/primitives/Accordion/Accordion'
import { type Faq, faqs, tags } from './entries'
import { useSearchIndex } from './useSearchIndex'

export const FAQ = () => {
  const searchIndex = useSearchIndex()

  const [search, setSearch] = useState('')

  const results = useMemo<[string, Faq][]>(() => {
    if (!searchIndex || !search) return Object.entries(faqs)

    const results = searchIndex.search(search)

    return results.map((result) => [result.id, faqs[result.id]])
  }, [searchIndex, search])

  return (
    <div className="space-y-4">
      <div className="font-serif text-ens-blue-midnight text-xl md:text-4xl">
        All the ENSv2 and Namechain questions you were not afraid to ask.
      </div>
      {/* collapsible faqs */}
      <input
        type="text"
        className="w-full rounded border border-ens-gray px-7 py-2 placeholder:text-ens-gray-three"
        placeholder="Search for a question"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="scrollbar relative overflow-x-auto pb-0.5">
        <div className="flex size-full gap-4 font-mono text-xs leading-none">
          {Object.entries(tags).map(([tag, { label, style }]) => (
            <div
              key={tag}
              className={clsx('whitespace-nowrap rounded px-3 py-2', style)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6 border-ens-gray-three border-t">
        <Accordion
          type="single"
          collapsible
          defaultValue={
            typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
          }
        >
          {results.map(([id, faq]) => (
            <AccordionItem key={id} value={id} className="relative">
              <AccordionTrigger
                className={clsx('relative scroll-m-28')}
                id={id}
              >
                {faq.question}
                <Link
                  href={`#${id}`}
                  onNavigate={(e) => {
                    console.log('onNavigate', e)
                    window.location.hash = `#${id}`
                  }}
                  className="-left-6 absolute top-4 size-3 translate-y-1/2 text-ens-blue opacity-0 transition-opacity hover:opacity-100 focus-visible:opacity-100"
                >
                  <LinkSVG />
                </Link>
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
