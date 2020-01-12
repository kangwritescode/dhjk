import React, { useState, useEffect } from 'react'
import './Arrow.css'

const Arrow = ({ text, url, direction }) => {
  return (
    <a
      href={url}
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
    </a>
  )
}
export default Arrow
