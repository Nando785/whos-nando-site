import { useState } from 'react'
import BARTLogo from './assets/BARTLogo.png'
import UCMLogo from './assets/UCMLogo.png'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={BARTLogo} className="logo" alt="Vite logo" />
        <img src={UCMLogo} className="logo react" alt="React logo" />
      </div>
    </>
  )
}

export default App
