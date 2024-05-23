import SingleItem from './SingleItem'
import styles from './selectedItems.module.css'
import { observer } from 'mobx-react-lite'
import ItemStore from '../ItemStore'

interface SelectedItemsProps {
  localItems: boolean
}

// const itemArray = ['Element 1', 'Element 2', 'Element 3']

const SelectedItems: React.FC<SelectedItemsProps> = observer(
  ({ localItems }) => {
    const selectedItems = ItemStore.selectedItems

    const handleRemoveItem = (item: string) => {
      ItemStore.deselectItem(item)
    }

    return (
      <div className={styles.selectedItems}>
        {/* example of inline style */}
        <div style={{ display: 'flex', width: '100%' }}>
          {selectedItems &&
            selectedItems.map((item) => {
              return (
                <SingleItem
                  key={item}
                  title={item}
                  removeItem={handleRemoveItem}
                />
              )
            })}
        </div>
      </div>
    )
  }
)

export default SelectedItems
