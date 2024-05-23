import { useState } from 'react'
import './App.css'
import ChangeItemsBtn from './components/changeItemsBtn/ChangeItemsBtn'
import DialogModal from './components/dialog/DialogModal'
import SelectedItems from './components/selectedItems/SelectedItems'

function App() {
  const [showDialog, setShowDialog] = useState<boolean>(false)
  return (
    <div className="App">
      <section>
        {/* TOP TEXT OF MODAL */}
        <h2 className="mainTitle">Selected items</h2>

        {/* ALLREADY SELECTED ITEMS (TOP OF MODAL) */}
        <h3>You currently have 2 selected items</h3>
        <SelectedItems />

        {/* BUTTON FOR OPENING ELEMENT LIST (DIALOG) */}
        <ChangeItemsBtn showDialog={showDialog} setShowDialog={setShowDialog} />

        {/* DIALOG WITH ELEMENTS */}
        {showDialog && <DialogModal setShowDialog={setShowDialog} />}
      </section>
    </div>
  )
}

export default App
