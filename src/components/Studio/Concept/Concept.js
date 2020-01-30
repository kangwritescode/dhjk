import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Concept.css'

const Concept = ({ header, icon, color, body }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  function toggleExpanded () {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className={`concept ${isExpanded ? 'expanded' : 'compressed'}`}
      onClick={!isExpanded && toggleExpanded}
    >
      <h3 className={`concept__header`}>{header}</h3>
      {!isExpanded && <i className={`concept__icon ${icon} ${color}`}></i>}
      {isExpanded && body}
      {isExpanded && (
        <button className='concept__hide-button' onClick={toggleExpanded}>
          Hide Answer <i class='fas fa-chevron-up chevron-down'></i>
        </button>
      )}
      {!isExpanded && <i class='fas fa-chevron-down chevron-down'></i>}
    </div>
  )
}

export default Concept

Concept.propTypes = {
  icon: PropTypes.string.isRequired
}
