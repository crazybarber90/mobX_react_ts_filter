import React from 'react'
import styles from './dialog.module.css'
import SearchComponent from './searchComponent/SearchComponent'
import FilterComponent from './filterComponent/FilterComponent'
import ElementList from './elementList/ElementList'
import SelectedItems from '../selectedItems/SelectedItems'
import CustomBtn from '../customBtn/CustomBtn'
import ItemStore from '../ItemStore'

const DialogModal = ({
  setShowDialog,
}: {
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <div className={styles.dialogContainer}>
      <p className={styles.dialogTitle}>Select items</p>
      <div className={styles.searchFilterWrapper}>
        <SearchComponent />
        <FilterComponent />
      </div>

      <ElementList />

      <div className={styles.bottomItems}>
        <p className={styles.dialogLabel}>Current selected items </p>
        <SelectedItems localItems={true} />
      </div>

      <div className={styles.bottomButtons}>
        <CustomBtn title="Save" action={() => console.log('Save')} />
        <CustomBtn title="Cancel" action={() => setShowDialog(false)} />
      </div>
    </div>
  )
}

export default DialogModal
