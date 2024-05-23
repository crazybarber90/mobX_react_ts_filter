import React from 'react'
import styles from './customBtn.module.css'

interface CustomBtnProps {
  title: string
  action: () => void
}

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
