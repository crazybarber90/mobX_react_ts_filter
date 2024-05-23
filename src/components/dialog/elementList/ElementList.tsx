import React from 'react'
import styles from './elementList.module.css'
import { observer } from 'mobx-react-lite'
import ItemStore from '../../ItemStore'
import { SelectedItemsProps } from './types'

const ElementList: React.FC<SelectedItemsProps> = ({
  localSelectedItems,
  setLocalSelectedItems,
}) => {
  const handleCheckboxChange = (item: string) => {
    // Check if item is checked
    if (localSelectedItems.includes(item)) {
      // if checked => remove from local state
      setLocalSelectedItems(
        localSelectedItems.filter((selectedItem) => selectedItem !== item)
      )
    } else {
      if (localSelectedItems.length < 3) {
        setLocalSelectedItems([...localSelectedItems, item])
      }
    }
  }

  return (
    <div className={styles.elementListWrapper}>
      {ItemStore.filteredItems.map((item) => (
        <div key={item} className={styles.checkboxItem}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id={`checkbox-${item}`}
            onChange={() => handleCheckboxChange(item)}
            checked={localSelectedItems.includes(item)}
            disabled={
              localSelectedItems.length >= 3 &&
              !localSelectedItems.includes(item)
            }
          />
          <label className={styles.checkboxLabel} htmlFor={`checkbox-${item}`}>
            {item}
          </label>
        </div>
      ))}
    </div>
  )
}

export default observer(ElementList)
