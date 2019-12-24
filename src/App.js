import React from 'react'
import './App.css'
import TempView from './components/TempView/TempView'
import InfinityChrome from './components/InfinityChrome/InfinityChrome'
import NavIcon from './components/NavIcon/NavIcon'
import Logos from './components/Logos/Logos'

function App () {
  return (
    <div className='App'>
      <NavIcon />
      {/* <IntroName /> */}
      <InfinityChrome />
      <Logos />
      <TempView />
    </div>
  )
}

export default App
