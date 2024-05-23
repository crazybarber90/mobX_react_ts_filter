import React from 'react'
import styles from './selectedItems.module.css'

const SingleItem = ({ title }: { title: string }) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.item}>
        <span className={styles.element}>{title}</span>
        <span className={styles.separator}>|</span>
        <span className={styles.removeItem}>X</span>
      </div>
    </div>
  )
}

export default SingleItem
