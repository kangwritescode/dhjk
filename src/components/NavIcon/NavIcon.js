import React, { useState, useEffect } from 'react'
import './NavIcon.css'

const NavIcon = props => {
  const [focused, setFocused] = useState(false)
  const [first, setFirst] = useState(true)
  const [second, setSecond] = useState(true)
  const [third, setThird] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setFirst(true)
  //   }, 3550)
  //   setTimeout(() => {
  //     setSecond(true)
  //   }, 3600)
  //   setTimeout(() => {
  //     setThird(true)
  //   }, 3650)
  //   return () => {}
  // }, [])

  return (
    <div className={`wrapper`}>
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
          className={`nav-icon__line-3 ${
            focused ? 'line-three-toggled' : null
          } ${third ? null : 'pre'}`}
        ></div>
      </div>
    </div>
  )
}

export default NavIcon
