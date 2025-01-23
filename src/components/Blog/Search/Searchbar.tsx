'use client'

import { useState } from 'react'
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
        onChange={e => setSearch(e.target.value)}
      />
      <SearchResults search={search} />
    </div>
  )
}
