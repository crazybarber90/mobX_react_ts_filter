import React, { useState } from 'react'
import styles from './dialog.module.css'
import SearchComponent from './searchComponent/SearchComponent'
import FilterComponent from './filterComponent/FilterComponent'
import ElementList from './elementList/ElementList'
import SelectedItems from '../selectedItems/SelectedItems'
import CustomBtn from '../customBtn/CustomBtn'
import ItemStore from '../ItemStore'
import { action } from 'mobx'

const DialogModal = ({
  setShowDialog,
}: {
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [localSelectedItems, setLocalSelectedItems] = useState<string[]>(
    ItemStore.selectedItems
  )

  // Save choosen items and reset search and filter states
  const handleSave = action(() => {
    ItemStore.selectedItems = [...localSelectedItems]
    setShowDialog(false)
    ItemStore.searchQuery = ''
    ItemStore.filter = 0
  })

  return (
    <div className={styles.dialogContainer}>
      <p className={styles.dialogTitle}>Select items</p>
      <div className={styles.searchFilterWrapper}>
        <SearchComponent />
        <FilterComponent />
      </div>

      <ElementList
        localSelectedItems={localSelectedItems}
        setLocalSelectedItems={setLocalSelectedItems}
      />

      {/* Bottom lits of choosen items */}
      <div className={styles.bottomItems}>
        <p className={styles.dialogLabel}>Current selected items </p>
        <SelectedItems
          localSelectedItems={localSelectedItems}
          setLocalSelectedItems={setLocalSelectedItems}
        />
      </div>

      <div className={styles.bottomButtons}>
        <CustomBtn title="Save" action={handleSave} />
        <CustomBtn title="Cancel" action={() => setShowDialog(false)} />
      </div>
    </div>
  )
}

export default DialogModal
