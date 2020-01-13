import React, { useState, useEffect } from 'react'
import './NavIcon.css'

const NavIcon = ({ focused, setFocused }) => {
  const [inLineOne, setInLineOne] = useState('')
  const [inLineTwo, setInLineTwo] = useState('')
  const [inLineThree, setInLineThree] = useState('')

  useEffect(() => {
    setInClasses()
    return () => {}
  }, [])
  function setInClasses () {
    setTimeout(() => {
      setInLineOne('post')
    }, 1700)
    setTimeout(() => {
      setInLineTwo('post')
    }, 1750)
    setTimeout(() => {
      setInLineThree('post')
    }, 1800)
  }

  return (
    <div className={`nav-icon__wrapper`}>
      <div className='nav-icon' onClick={() => setFocused(!focused)}>
        <div
          className={`nav-icon__line-1 ${
            focused ? 'line-one-toggled' : null
          } pre ${inLineOne}`}
        ></div>
        <div
          className={`nav-icon__line-2 ${
            focused ? 'line-two-toggled' : null
          } pre ${inLineTwo}`}
        ></div>
        <div
          className={`nav-icon__line-3 ${
            focused ? 'line-three-toggled' : null
          } pre ${inLineThree}`}
        ></div>
      </div>
    </div>
  )
}

export default NavIcon
