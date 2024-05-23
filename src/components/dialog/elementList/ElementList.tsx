import React, { useState } from 'react'
import styles from './elementList.module.css'
import { observer } from 'mobx-react-lite'
import ItemStore from '../../ItemStore'

const ElementList: React.FC = () => {
  // FAKE DATA
  // const checkboxes = Array.from({ length: 300 }, (_, index) => index + 1)
  // const [checkedCount, setCheckedCount] = useState<number>(0)

  const handleCheckboxChange = (item: string) => {
    if (ItemStore.selectedItems.includes(item)) {
      ItemStore.deselectItem(item)
      // setCheckedCount((prevCount) => prevCount - 1)
    } else {
      if (ItemStore.selectedItems.length < 3) {
        ItemStore.selectItem(item)
        // setCheckedCount((prevCount) => prevCount + 1)
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
            checked={ItemStore.selectedItems.includes(item)}
            disabled={
              ItemStore.selectedItems.length >= 3 &&
              !ItemStore.selectedItems.includes(item)
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
