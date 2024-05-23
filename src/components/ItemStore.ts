// src/components/ItemStore.ts
import { makeAutoObservable } from 'mobx'

class ItemStore {
  items: string[] = []
  selectedItems: string[] = []
  searchQuery: string = ''
  filter: number = 0

  constructor() {
    makeAutoObservable(this)
    this.items = Array.from({ length: 300 }, (_, i) => `Element ${i + 1}`)
  }

  get filteredItems() {
    return this.items.filter((item) => {
      const itemNumber = parseInt(item.split(' ')[1], 10)
      const matchesSearchQuery = item
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase())
      const matchesFilter = this.filter === 0 || itemNumber > this.filter
      return matchesSearchQuery && matchesFilter
    })
  }

  setSearchQuery(query: string) {
    this.searchQuery = query
  }

  setFilter(filter: number) {
    this.filter = filter
  }

  selectItem(item: string) {
    if (this.selectedItems.length < 3 && !this.selectedItems.includes(item)) {
      this.selectedItems.push(item)
    }
  }

  deselectItem(item: string) {
    this.selectedItems = this.selectedItems.filter(
      (selectedItem) => selectedItem !== item
    )
  }

  resetSelection() {
    this.selectedItems = []
  }
}

const itemStore = new ItemStore()

export default itemStore
