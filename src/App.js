import React, { useState, useEffect } from 'react'
import './App.css'
import About from './components/About/About'
import InfinityChrome from './components/InfinityChrome/InfinityChrome'
import NavIcon from './components/NavIcon/NavIcon'
import Logos from './components/Logos/Logos'

function App () {
  const [curr, setCurr] = useState(null)
  const [prev, setPrev] = useState(null)

  useEffect(() => {
    setCurr('blue')
    return () => {}
  }, [])

  const toggle = () => {
    setPrev(curr)
    setCurr('red')
  }

  let style = { position: 'relative', animation: 'move-left .5s ease-in forwards', color: 'red' }

  let redComponent = <About style={style} />
  let blueComponent = <About style={{ color: 'blue', animation: curr === 'blue' ? null : 'move-left-out .5s ease-in forwards'}} />

  let currShown
  if (curr === 'blue') {
    currShown = blueComponent
  } else {
    currShown = redComponent
  }
  let lastShown
  if (prev === 'blue') {
    lastShown = blueComponent
  }

  return (
    <div className='App'>
      <NavIcon />
      {/* <InfinityChrome /> */}
      {/* <IntroName /> */}
      {/* <Logos /> */}
      {lastShown}
      {currShown}
      <button
        onClick={toggle}
        style={{ position: 'absolute', bottom: '200px', zIndex: '9999' }}
      >
        Next
      </button>
    </div>
  )
}

export default App
