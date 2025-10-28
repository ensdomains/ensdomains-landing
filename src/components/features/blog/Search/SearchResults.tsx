import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect } from 'react'
import type { BlogSearchResult } from '~/app/(root)/blog/search.json/route'
import { useBlogSearch } from '~/components/features/blog/Search/useBlogSearch'
import { fetchPostMetadata } from '~/utils/blog/search'
import { BlogPostAuthor, BlogPostAuthorSeparator } from '../PostAuthor'
import styles from './SearchResults.module.css'

const SearchHit = ({ entry }: { entry: BlogSearchResult }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['post', entry.id, 'metadata'],
    queryFn: () => fetchPostMetadata(entry.id),
  })

  if (isLoading)
    return <SearchHitSkeleton title={entry.title} authors={entry.authors} />

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

const SearchHitSkeleton = ({
  title,
  authors,
}: {
  title?: string
  authors?: string[]
}) => {
  return (
    <div className={styles.hit}>
      <div className={clsx(styles['hit-image'], styles.skeleton)} />
      <div className={styles['hit-data']}>
        <div className={clsx(styles['hit-title'], !title && styles.skeleton)}>
          {title}
        </div>
        <div
          className={clsx(styles['hit-authors'], !authors && styles.skeleton)}
        >
          {authors?.map((author, index) => (
            <Fragment key={author}>
              {!!index && <BlogPostAuthorSeparator size="small" />}
              <BlogPostAuthor author={author} size="small" separator={false} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export const SearchResults = ({ search }: { search: string }) => {
  const { search: performSearch, isLoading, searchResults } = useBlogSearch()

  useEffect(() => {
    performSearch(search)
  }, [search, performSearch])

  if (!search) return

  if (isLoading)
    return (
      <div className={styles.results}>
        <SearchHitSkeleton />
        <SearchHitSkeleton />
        <SearchHitSkeleton />
      </div>
    )

  if (search.length < 2)
    return (
      <div className={styles.results}>
        <div className={styles.noResults}>Type at least 2 characters</div>
      </div>
    )

  if (!searchResults.length)
    return (
      <div className={styles.results}>
        <div className={styles.noResults}>No results</div>
      </div>
    )

  return (
    <div className={styles.results}>
      {searchResults.map((hit) => (
        <SearchHit key={hit.id} entry={hit} />
      ))}
    </div>
  )
}
