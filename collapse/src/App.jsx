import { useState } from 'react'
import { Collapse } from 'react-collapse'
import CollapsElement from './components/CollapsElement'

import './App.css'

function App() {
  const [label, setLabel] = useState("expandedLabel")

  const clps = () =>{
    if (label == "expandedLabel"){
      setLabel("collapsedLabel");
    } else{
      setLabel("expandedLabel")
    }
  }

  return (
    <div>
      <button onClick={clps}>Collaspe</button>
      <CollapsElement value={label} />
    </div>
  )
}

export default App

