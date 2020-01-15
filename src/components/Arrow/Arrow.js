import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Arrow.css'

const Arrow = ({ text, url, direction }) => {
  return (
    <Link to={url}>
      {' '}
      <div
        className={`navButton navButton-${direction} ${
          direction === 'right' ? 'rightNavPopIn' : 'leftNavPopIn'
        }`}
      >
        <div className={`arrow`}>
          <div className={`arrow-top arrow-top--${direction}`}></div>
          <div className={`arrow-top arrow-bottom--${direction}`}></div>
          <span className={`navButton__text navButton__text--${direction}`}>
            {text}
          </span>
        </div>
      </div>
    </Link>
  )
}
export default Arrow
