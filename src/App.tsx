import './App.css'
import { useState } from 'react'
import ChangeItemsBtn from './components/changeItemsBtn/ChangeItemsBtn'
import DialogModal from './components/dialog/DialogModal'
import SelectedItems from './components/selectedItems/SelectedItems'
import { observer } from 'mobx-react-lite'
import itemStore from './components/ItemStore'
import { handleMainTitle } from './utils'

const App = observer(() => {
  const [showDialog, setShowDialog] = useState<boolean>(false)

  //Length of items in store
  const lengthOfItems = itemStore.selectedItems.length

  return (
    <div className="App">
      <section>
        {/* TOP TEXT OF MODAL */}
        <h2 className="mainTitle">Selected items</h2>
        <h3>{handleMainTitle(lengthOfItems)}</h3>

        {/* ALLREADY SELECTED ITEMS (TOP OF MODAL) */}
        <SelectedItems />

        {/* BUTTON FOR OPENING ELEMENT LIST (DIALOG) */}
        <ChangeItemsBtn showDialog={showDialog} setShowDialog={setShowDialog} />

        {/* DIALOG WITH ELEMENTS */}
        {showDialog && <DialogModal setShowDialog={setShowDialog} />}
      </section>
    </div>
  )
})

export default App
