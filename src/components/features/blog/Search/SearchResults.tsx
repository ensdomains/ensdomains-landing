import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import {
  fetchPostMetadata,
  getSearchResults,
  type SearchEntry,
} from '~/utils/blog/search'
import { useDebounce } from '~/utils/useDebounce'
import { BlogPostAuthor, BlogPostAuthorSeparator } from '../PostAuthor'
import styles from './SearchResults.module.css'

const SearchHit = ({ entry }: { entry: SearchEntry }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['post', entry.slug, 'metadata'],
    queryFn: () => fetchPostMetadata(entry.slug),
  })

  if (isLoading) return <SearchHitSkeleton />
  if (isError || !data) return <></>

  return (
    <Link href={`/blog/post/${entry.slug}`} className={styles.hit}>
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
          {data.authors?.slice(0, 2).map((author, index) => (
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

  const { data, isLoading, isError } = useQuery({
    queryKey: ['search', debouncedSearch],
    queryFn: () => getSearchResults(debouncedSearch),
  })

  if (search.length < 3) return <></>

  const isDebouncing = debouncedSearch !== search

  if (isLoading || isDebouncing)
    return (
      <div className={styles.results}>
        <SearchHitSkeleton />
        <SearchHitSkeleton />
        <SearchHitSkeleton />
      </div>
    )

  if (isError || !data) return <></>

  if (!data.hits.length)
    return (
      <div className={styles.results}>
        <div className={styles.noResults}>No results</div>
      </div>
    )

  return (
    <div className={styles.results}>
      {data.hits.map((hit) => (
        <SearchHit key={hit.slug} entry={hit} />
      ))}
    </div>
  )
}
