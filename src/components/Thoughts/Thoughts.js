import React, { useState, useEffect } from 'react'
import './Thoughts.css'

const Thoughts = props => {
  const parts = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve'
  ]

  return (
    <div className={`cloud`}>
      <div className={`parts-container`}>
        {parts.map(part => (
          <div className={`cloud-part ${part}`}></div>
        ))}

        {/* <div className={`tail-two`}></div> */}
      </div>
      <div className={`tail`}>
        <div className={`tail-one`}></div>
        <div className={`tail-two`}></div>
      </div>
    </div>
  )
}

export default Thoughts
