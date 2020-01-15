import React, { useState, useEffect } from 'react'
import './NavBar.css'
import NavIcon from '../NavIcon/NavIcon'
import { Link } from 'react-router-dom'

const NavBar = props => {
  const [focused, setFocused] = useState(false)
  const items = ['home', 'portfolio', 'laboratory', 'contact']

  return (
    <React.Fragment>
      <div className={`navBar ${focused ? 'navBar-focused' : null}`}>
        <div className={`navBar__section-container`}>
          {items.map(section => (
            <Link to={section}>
              <div key={section} className={`navBar__section`} id={section} onClick={() => setFocused(false)}>
                {section}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <NavIcon setFocused={setFocused} focused={focused} />
    </React.Fragment>
  )
}

export default NavBar
