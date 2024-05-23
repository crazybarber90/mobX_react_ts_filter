import React from 'react'
import styles from './changeItemsBtn.module.css'

interface ChangeItemsButtonProps {
  showDialog: boolean
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangeItemsBtn: React.FC<ChangeItemsButtonProps> = ({
  setShowDialog,
  showDialog,
}) => {
  return (
    <button
      className={styles.greenButton}
      onClick={() => setShowDialog(!showDialog)}
    >
      Change my choice
    </button>
  )
}

export default ChangeItemsBtn
