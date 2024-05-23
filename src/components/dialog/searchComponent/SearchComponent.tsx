import React from 'react'
import styles from './searchComponent.module.css'

interface SearchInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchComponent: React.FC<SearchInputProps> = ({ onChange }) => {
  return (
    <div className={styles.searchWrapper}>
      <label className={styles.searchLabel} htmlFor="search">
        Search
      </label>
      <input
        className={styles.searchInput}
        type="text"
        id="search"
        onChange={onChange}
      />
    </div>
  )
}

export default SearchComponent
