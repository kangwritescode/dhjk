import React, { useState, useEffect } from 'react'
import './Filter.css'

const Filter = ({ options, selectedFilter, setFilter }) => {
  return (
    <div className='Filter'>
      <ul>
        {options.map(option => (
          <li
            className={selectedFilter === option ? 'selected' : null}
            onClick={() => setFilter(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
