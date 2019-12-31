import React, { useState, useEffect } from 'react'
import './RightArrow.css'

const RightArrow = ({ text, url }) => {
  return (
    <a href={url} className={`navButton`}>
      <span className='navButton__text'>{text}</span>
      <div class='arrow'>
        <div class='arrow-top'></div>
        <div class='arrow-bottom'></div>
      </div>
    </a>
  )
}

export default RightArrow
