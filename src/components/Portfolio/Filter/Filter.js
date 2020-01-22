import React, { useState, useEffect } from 'react'
import './Filter.css'

const Filter = props => {
  const options = [
    'SHOW ALL',
    'SELECTED WORKS',
    'FULL-PROJECTS',
    'MINI-PROJECTS'
  ]
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
