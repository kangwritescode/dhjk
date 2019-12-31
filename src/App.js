import React, { useState, useEffect } from 'react'
import './App.css'
import './components/Landing/Landing'
import Landing from './components/Landing/Landing'
import NavIcon from './components/NavBar/NavIcon/NavIcon'
import Logos from './components/Logos/Logos'

function App () {
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div className='App'>
      <Landing />
    </div>
  )
}

export default App;
