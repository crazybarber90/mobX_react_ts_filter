import React from 'react'
import styles from './filterComponent.module.css'
import ItemStore from '../../ItemStore'
import { observer } from 'mobx-react-lite'
import { action } from 'mobx'

const FilterComponent: React.FC = observer(() => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === 'no-filter' ? 0 : Number(e.target.value)
    applyFilter(value)
  }

  const applyFilter = action((value: number) => {
    ItemStore.setFilter(value)
  })

  return (
    <div className={styles.filterWrapper}>
      <label className={styles.filterLabel} htmlFor="filter">
        Filter
      </label>

      <select
        className={styles.dropdownSelect}
        id="filter"
        value={ItemStore.filter}
        onChange={handleFilterChange}
      >
        <option className={styles.selectItem} value="no-filter">
          No filter
        </option>
        <option className={styles.selectItem} value="10">
          {'>'}10
        </option>
        <option className={styles.selectItem} value="100">
          {'>'}100
        </option>
        <option className={styles.selectItem} value="200">
          {'>'}200
        </option>
      </select>
    </div>
  )
})
export default FilterComponent
