import React, { useState, useEffect } from 'react'
import './NavBar.css'
import NavIcon from '../NavIcon/NavIcon'

const NavBar = props => {
  const [focused, setFocused] = useState(false)
  const items = ['Home', 'Portfolio', 'Laboratory', 'Contact']
  return (
    <React.Fragment>
      <div className={`navBar ${focused ? 'navBar-focused' : null}`}>
        <div className={`navBar__section-container`}>
          {items.map(section => (
            <div className={`navBar__section`}>{section}</div>
          ))}
        </div>
      </div>
      <NavIcon setFocused={setFocused} focused={focused} />
    </React.Fragment>
  )
}

export default NavBar
