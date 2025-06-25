'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import type { ComponentProps, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { LinkSVG } from '~/components/shared/icons'
import { faqs, tags } from './entries'

const ChevronIcon = ({
  direction,
  className,
  ...props
}: {
  direction: 'up' | 'down' | 'left' | 'right'
} & ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    className={clsx('transition-all', className)}
    {...props}
  >
    <path
      d="M9.67599 14.3087L11.2594 12.7253C11.6597 12.325 11.6597 11.6755 11.2594 11.2752L9.67599 9.69177C8.74191 8.75769 8.74198 7.24366 9.67599 6.30953L11.2601 4.72545C11.6602 4.32514 11.6595 3.67629 11.2594 3.27602L9.6753 1.69193C9.27502 1.29188 8.62684 1.29188 8.22656 1.69193L2.6429 7.27559C2.24264 7.67586 2.24208 8.32467 2.64221 8.72502L8.22587 14.3087C8.6262 14.709 9.27565 14.709 9.67599 14.3087Z"
      //   className="fill-ens-blue-dark stroke-transparent transition-all hover:fill-ens-blue"
      fill="currentColor"
    />
  </svg>
)

export const FAQ = () => {
  const [hash, setHash] = useState('')
  // const hash = window.location.hash.slice(1)

  const params = useSearchParams()
  console.log('hash', hash)

  // biome-ignore lint/correctness/useExhaustiveDependencies: params triggers a re-render when the window.location.hash changes
  useEffect(() => {
    console.log('hashEffect', hash)
    const _hash = window.location.hash.slice(1)
    setHash(_hash)

    if (_hash) {
      const targetElement = document.getElementById(_hash)
      if (
        targetElement &&
        targetElement.tagName === 'DETAILS' &&
        'faq' in targetElement.dataset
      ) {
        ;(targetElement as HTMLDetailsElement).open = true
      }
    }
  }, [hash, params])

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
      />
      <div className="relative overflow-x-auto">
        <div
          className="flex size-full gap-4 font-mono text-xs leading-none"
          // onScroll={(e) => {
          //   const element = e.currentTarget
          //   const isAtEnd =
          //     element.scrollLeft + element.clientWidth >=
          //     element.scrollWidth - 1
          //   const gradient = element.nextElementSibling as HTMLElement
          //   if (gradient) {
          //     gradient.style.opacity = isAtEnd ? '0' : '1'
          //   }
          // }}
        >
          {Object.entries(tags).map(([tag, { label, style }]) => (
            <div
              key={tag}
              className={clsx('whitespace-nowrap rounded px-3 py-2', style)}
            >
              {label}
            </div>
          ))}
        </div>
        {/* <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-ens-white to-transparent transition-opacity" /> */}
      </div>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <details
            key={faq.id}
            className={clsx(
              'group scroll-m-32 border-ens-gray-three border-t pt-6 text-ens-blue-midnight transition-all',
            )}
            id={faq.id}
            data-faq
          >
            <summary
              className={clsx(
                'relative flex cursor-pointer gap-2 font-medium font-sans text-xl leading-none transition-colors after:content-[unset]',
                hash === faq.id && 'group-open:text-ens-blue',
              )}
            >
              <span>{faq.question}</span>
              {/* <LinkSVG className="-left-6 absolute top-0 opacity-0 size-4 text-ens-blue group-hover:opacity-100" /> */}
              <Link
                href={`#${faq.id}`}
                className="-left-6 absolute top-0 size-3 translate-y-1/4 text-ens-blue opacity-0 transition-opacity hover:opacity-100"
              >
                <LinkSVG />
              </Link>
              <ChevronIcon
                direction="down"
                className="ml-auto size-3 shrink-0 rotate-90 text-ens-blue-dark hover:text-ens-blue group-open:rotate-270"
              />
            </summary>
            <div className="mt-4 font-normal font-semi-mono text-base leading-normal">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
