'use client'

import { useState } from 'react'
import { SearchIcon } from '~/components/shared/icons/index'
import styles from './Searchbar.module.css'
import { SearchResults } from './SearchResults'

export const Searchbar = () => {
  const [search, setSearch] = useState('')

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder="Search for a post"
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        minLength={3}
      />
      <SearchIcon
        className={styles.searchIcon}
        opacity={search.length > 0 ? 1 : 0.3}
      />
      <SearchResults search={search} />
    </div>
  )
}
