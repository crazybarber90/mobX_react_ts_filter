import SingleItem from './SingleItem'
import styles from './selectedItems.module.css'
import { observer } from 'mobx-react-lite'
import ItemStore from '../ItemStore'
import { SelectedItemsProps } from './types'

const SelectedItems: React.FC<SelectedItemsProps> = observer(
  ({ localSelectedItems, setLocalSelectedItems }) => {
    //Items from globalStateManager
    const selectedItems = ItemStore.selectedItems

    //Remove Items from GlobalStateManager
    const handleRemoveItem = (item: string) => {
      ItemStore.deselectItem(item)
    }

    // Remove items from local state
    const removeLocalItems = (item: string) => {
      if (localSelectedItems) {
        const newArray = localSelectedItems.filter((el) => el !== item)
        setLocalSelectedItems && setLocalSelectedItems(newArray)
      }
    }

    //function that determines which array to use for maping singleItem
    //Global(mobX) or local
    const choseProperArray = localSelectedItems
      ? localSelectedItems
      : selectedItems

    return (
      <div className={styles.selectedItems}>
        {/* example of inline style */}
        <div style={{ display: 'flex', width: '100%' }}>
          {choseProperArray.map((item) => {
            return (
              <SingleItem
                key={item}
                title={item}
                removeItem={
                  localSelectedItems ? removeLocalItems : handleRemoveItem
                }
              />
            )
          })}
        </div>
      </div>
    )
  }
)

export default SelectedItems
