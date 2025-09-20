import BARTLogo from './assets/BARTLogo.png'
import UCMLogo from './assets/UCMLogo.png'
import STEMLogo from './assets/STEMTutoringLogo.png'
import './App.css'

import JobCard from './components/job-card'

function App() {

  return (
    <>
      <div>
        <img src={BARTLogo} className="logo" alt="Vite logo" />
        <img src={UCMLogo} className="logo react" alt="React logo" />
        <img src={STEMLogo} className="logo react" alt="React logo" />
        <JobCard></JobCard>
      </div>
    </>
  )
}

export default App
