import React from 'react'
import styles from './changeItemsBtn.module.css'
import { ChangeItemsButtonProps } from './types'

const ChangeItemsBtn: React.FC<ChangeItemsButtonProps> = ({
  showDialog,
  setShowDialog,
}) => {
  return (
    <button
      className={styles.greenButton}
      onClick={() => setShowDialog(!showDialog)}
    >
      Change your choice
    </button>
  )
}

export default ChangeItemsBtn
