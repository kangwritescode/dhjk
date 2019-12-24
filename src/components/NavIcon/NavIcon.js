import React, { useState, useEffect } from 'react'
import './NavIcon.css'

const NavIcon = props => {
  const [focused, setFocused] = useState(false)
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setFirst(true)
    }, 2100)
    setTimeout(() => {
      setSecond(true)
    }, 2150)
    setTimeout(() => {
      setThird(true)
    }, 2200)
    return () => {}
  }, [])

  return (
    <div className='nav-icon' onClick={() => setFocused(!focused)}>
      <div
        className={`nav-icon__line-1 ${focused ? 'line-one-toggled' : null} ${
          first ? null : 'pre'
        }`}
      ></div>
      <div
        className={`nav-icon__line-2 ${focused ? 'line-two-toggled' : null} ${
          second ? null : 'pre'
        }`}
      ></div>
      <div
        className={`nav-icon__line-3 ${focused ? 'line-three-toggled' : null} ${
          third ? null : 'pre'
        }`}
      ></div>
    </div>
  )
}

export default NavIcon
