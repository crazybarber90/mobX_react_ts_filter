import React from 'react'
import styles from './searchComponent.module.css'
import { observer } from 'mobx-react-lite'
import ItemStore from '../../ItemStore'

const SearchComponent: React.FC = observer(() => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ItemStore.setSearchQuery(e.target.value)
  }

  return (
    <div className={styles.searchWrapper}>
      <label className={styles.searchLabel} htmlFor="search">
        Search
      </label>
      <input
        className={styles.searchInput}
        type="text"
        id="search"
        value={ItemStore.searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  )
})

export default SearchComponent
