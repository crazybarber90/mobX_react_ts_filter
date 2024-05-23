import React, { useState } from 'react'
import styles from './elementList.module.css'

const ElementList: React.FC = () => {
  const checkboxes = Array.from({ length: 300 }, (_, index) => index + 1)

  const [checkedCount, setCheckedCount] = useState<number>(0)

  const handleCheckboxChange = () => {
    setCheckedCount((prevCount) => prevCount + 1)
  }

  return (
    <div className={styles.elementListWrapper}>
      {checkboxes.map((index) => (
        <div key={index} className={styles.checkboxItem}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id={`checkbox-${index}`}
            onChange={handleCheckboxChange}
            // checked={checkedCount < 3}
            // disabled={false}
          />
          <label className={styles.checkboxLabel} htmlFor={`checkbox-${index}`}>
            Element {index}
          </label>
        </div>
      ))}
    </div>
  )
}
export default ElementList
