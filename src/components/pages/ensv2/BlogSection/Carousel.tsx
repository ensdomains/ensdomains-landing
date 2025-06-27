'use client'

import clsx from 'clsx'
import { type ComponentProps, useState } from 'react'
import { splitArray } from '~/utils/array/split'
import type { BlogPostMetadataPlus } from '~/utils/blog/posts'
import { type Dimension, useMq } from '~/utils/useMq'
import type { BlogPostWithAssets } from './BlogSection'
import { SlimBlogPostPreview } from './SlimPostPreview'

const Chevron = ({
  className,
  direction = 'left',
  ...props
}: {
  direction?: 'left' | 'right'
} & ComponentProps<'button'>) => (
  <button
    className={clsx(
      'group w-4 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60',
      direction === 'right' && 'rotate-180',
      className,
    )}
    type="button"
    {...props}
  >
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <path
        d="M9.67599 14.3087L11.2594 12.7253C11.6597 12.325 11.6597 11.6755 11.2594 11.2752L9.67599 9.69177C8.74191 8.75769 8.74198 7.24366 9.67599 6.30953L11.2601 4.72545C11.6602 4.32514 11.6595 3.67629 11.2594 3.27602L9.6753 1.69193C9.27502 1.29188 8.62684 1.29188 8.22656 1.69193L2.6429 7.27559C2.24264 7.67586 2.24208 8.32467 2.64221 8.72502L8.22587 14.3087C8.6262 14.709 9.27565 14.709 9.67599 14.3087Z"
        className="fill-ens-blue-dark stroke-transparent transition-all group-hover:fill-ens-blue group-active:fill-transparent group-active:stroke-2 group-active:stroke-ens-blue"
      />
    </svg>
  </button>
)

const pagesCount: Record<Dimension, number> = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
}

export const BlogSectionCarousel = ({
  posts,
}: {
  posts: BlogPostWithAssets[]
}) => {
  const deviceSize = useMq()
  const pages = splitArray(posts, pagesCount[deviceSize] ?? 1)
  const [currentPage, setCurrentPage] = useState(0)

  const handleNext = () => {
    setCurrentPage((currentPage + 1) % pages.length)
  }

  const handlePrevious = () => {
    setCurrentPage((currentPage - 1 + pages.length) % pages.length)
  }
  return (
    <div className="space-y-7">
      <div className="flex items-center gap-6 max-md:justify-center">
        <p>Go Deeper: Learn more about ENSv2</p>
        {deviceSize !== 'mobile' && (
          <>
            <div className="h-px flex-grow bg-ens-gray" />
            {pages.length > 1 && (
              <div className="flex gap-3">
                <Chevron
                  onClick={handlePrevious}
                  disabled={currentPage === 0}
                />
                <Chevron
                  direction="right"
                  onClick={handleNext}
                  disabled={currentPage >= pages.length - 1}
                />
              </div>
            )}
          </>
        )}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {pages[currentPage].map((post) => (
          <div key={post.slug}>
            <SlimBlogPostPreview key={post.slug} post={post} />
          </div>
        ))}
      </div>
      {/* Add indicator squares for the pages with the current being ens-blue color and the rest ens-gray-three */}
      <div className="flex flex-wrap justify-center gap-3">
        {pages.map((_, index) => (
          <button
            // biome-ignore lint/suspicious/noArrayIndexKey: we need to use the index as the key
            key={index}
            type="button"
            className={clsx(
              'size-5 rounded-sm md:size-3 md:rounded-xs',
              index === currentPage ? 'bg-ens-blue' : 'bg-ens-gray-three',
            )}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </div>
  )
}
