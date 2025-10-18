import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import type { BlogSearchResult } from '~/app/(root)/blog/search.json/route'
import { useBlogSearch } from '~/components/features/blog/Search/useBlogSearch'
import { fetchPostMetadata } from '~/utils/blog/search'
import { useDebounce } from '~/utils/useDebounce'
import { BlogPostAuthor, BlogPostAuthorSeparator } from '../PostAuthor'
import styles from './SearchResults.module.css'

const SearchHit = ({ entry }: { entry: BlogSearchResult }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['post', entry.id, 'metadata'],
    queryFn: () => fetchPostMetadata(entry.id),
  })

  if (isLoading) return <SearchHitSkeleton />
  if (isError || !data) return <></>

  return (
    <Link href={`/blog/post/${entry.id}`} className={styles.hit}>
      {data.assets.post['cover-thumb'] && (
        <Image
          src={data.assets.post['cover-thumb']}
          alt={entry.title}
          height={67.5}
          width={120}
          className={styles['hit-image']}
        />
      )}
      <div className={styles['hit-data']}>
        <div className={styles['hit-title']}>{entry.title}</div>
        <div className={styles['hit-authors']}>
          {entry.authors?.slice(0, 2).map((author, index) => (
            <Fragment key={author}>
              {!!index && <BlogPostAuthorSeparator size="small" />}
              <BlogPostAuthor
                key={author}
                author={author}
                avatar={data.assets.authors[author]?.avatar}
                size="small"
                separator={false}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </Link>
  )
}

const SearchHitSkeleton = () => {
  return (
    <div className={styles.hit}>
      <div className={clsx(styles['hit-image'], styles.skeleton)} />
      <div className={styles['hit-data']}>
        <div className={clsx(styles['hit-title'], styles.skeleton)} />
        <div className={clsx(styles['hit-authors'], styles.skeleton)} />
      </div>
    </div>
  )
}

export const SearchResults = ({ search }: { search: string }) => {
  const debouncedSearch = useDebounce(search, 500)
  const { search: performSearch, isLoading } = useBlogSearch()

  if (search.length < 3) return <></>

  const isDebouncing = debouncedSearch !== search
  const results = performSearch(debouncedSearch)

  if (isLoading || isDebouncing)
    return (
      <div className={styles.results}>
        <SearchHitSkeleton />
        <SearchHitSkeleton />
        <SearchHitSkeleton />
      </div>
    )

  if (!results.length)
    return (
      <div className={styles.results}>
        <div className={styles.noResults}>No results</div>
      </div>
    )

  return (
    <div className={styles.results}>
      {results.map((hit) => (
        <SearchHit key={hit.id} entry={hit} />
      ))}
    </div>
  )
}
