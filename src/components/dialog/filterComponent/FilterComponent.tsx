import React from 'react'
import styles from './filterComponent.module.css'

interface FilterDropdownProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const FilterComponent: React.FC<FilterDropdownProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className={styles.filterWrapper}>
      <label className={styles.filterLabel} htmlFor="filter">
        Filter
      </label>
      <select
        className={styles.dropdownSelect}
        id="filter"
        value={value}
        onChange={onChange}
      >
        <option className={styles.selectItem} value="no-filter">
          No filter
        </option>
        <option className={styles.selectItem} value=">10">
          {'>'}10
        </option>
        <option className={styles.selectItem} value=">100">
          {'>'}100
        </option>
        <option className={styles.selectItem} value=">200">
          {'>'}200
        </option>
      </select>
    </div>
  )
}
export default FilterComponent
