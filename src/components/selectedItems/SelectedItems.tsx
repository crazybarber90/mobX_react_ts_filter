import SingleItem from './SingleItem'
import styles from './selectedItems.module.css'

const itemArray = ['Element 1', 'Element 2', 'Element 3']

const SelectedItems = () => {
  return (
    <div className={styles.selectedItems}>
      {/* example of inline style */}
      <div style={{ display: 'flex', width: '100%' }}>
        {itemArray &&
          itemArray.map((item) => {
            return <SingleItem key={item} title={item} />
          })}
      </div>
    </div>
  )
}

export default SelectedItems
