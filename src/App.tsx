import { useState } from 'react'
import './App.css'
import ChangeItemsBtn from './components/changeItemsBtn/ChangeItemsBtn'
import DialogModal from './components/dialog/DialogModal'
import SelectedItems from './components/selectedItems/SelectedItems'
import { observer } from 'mobx-react-lite'
import ItemStore from './components/ItemStore'

const App = observer(() => {
  const [showDialog, setShowDialog] = useState<boolean>(false)

  console.log('ITEM STORE ', ItemStore)
  return (
    <div className="App">
      <section>
        {/* TOP TEXT OF MODAL */}
        <h2 className="mainTitle">Selected items</h2>

        {/* ALLREADY SELECTED ITEMS (TOP OF MODAL) */}
        <h3>You currently have 2 selected items</h3>
        <SelectedItems localItems={false} />

        {/* BUTTON FOR OPENING ELEMENT LIST (DIALOG) */}
        <ChangeItemsBtn showDialog={showDialog} setShowDialog={setShowDialog} />

        {/* DIALOG WITH ELEMENTS */}
        {showDialog && <DialogModal setShowDialog={setShowDialog} />}
      </section>
    </div>
  )
})

export default App
