import React, { useState, useEffect } from 'react'
import './NavIcon.css'

const NavIcon = props => {
  const [focused, setFocused] = useState(false)

  return (
    <div className='nav-icon' onClick={() => setFocused(!focused)}>
      <div className={`nav-icon__line-1 ${focused ? 'line-one-toggled' : null}`}></div>
      <div className={`nav-icon__line-2 ${focused ? 'line-two-toggled' : null}`}></div>
      <div className={`nav-icon__line-3 ${focused ? 'line-three-toggled' : null}`}></div>
    </div>
  )
}

export default NavIcon
