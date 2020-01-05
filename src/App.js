import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import './components/Landing/Landing'
import Portfolio from './components/Portfolio/Portfolio'
import NavBar from './components/NavBar/Navbar/NavBar'

function App () {
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div className='App'>
      {/* <Landing /> */}
      <Portfolio/>
      <NavBar />
    </div>
  )
}

export default App
