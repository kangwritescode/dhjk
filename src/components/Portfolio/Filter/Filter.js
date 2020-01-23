import React, { useState, useEffect } from 'react'
import './Filter.css'

const Filter = ({ options }) => {
  return (
    <div className='Filter'>
      <ul>
        {options.map(option => (
          <li>{option}</li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
