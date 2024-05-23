import React, { useState } from 'react'
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
  const [localSelectedItems, setLocalSelectedItems] = useState<string[]>(
    ItemStore.selectedItems.slice()
  )

  const handleSave = () => {
    ItemStore.selectedItems = [...localSelectedItems]
    setShowDialog(false)
    //OVDE DA ISPRAZNIM STEJT searchQuery i filter
  }

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
