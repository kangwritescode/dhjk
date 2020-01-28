import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import './components/Landing/Landing'
import Portfolio from './components/Portfolio/Portfolio'
import NavBar from './components/NavBar/Navbar/NavBar'
import Landing from './components/Landing/Landing'
import Studio from './components/Studio/Studio'

function App () {
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/studio'>
            <Studio />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
