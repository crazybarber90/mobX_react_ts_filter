import React from 'react'
import styles from './customBtn.module.css'
import { CustomBtnProps } from './types'

const CustomBtn: React.FC<CustomBtnProps> = ({ title, action }) => {
  return (
    <button
      onClick={action}
      style={{ backgroundColor: title === 'Save' ? '#45a049' : 'red' }}
      className={styles.customBtn}
    >
      {title}
    </button>
  )
}

export default CustomBtn
