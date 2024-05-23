import styles from './selectedItems.module.css'

interface singleItemProps {
  title: string
  removeItem: (item: string) => void
}

const SingleItem: React.FC<singleItemProps> = ({ title, removeItem }) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.item}>
        <span className={styles.element}>{title}</span>
        <span className={styles.separator}>|</span>
        <span className={styles.removeItem} onClick={() => removeItem(title)}>
          X
        </span>
      </div>
    </div>
  )
}

export default SingleItem
