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
      onClick={toggleExpanded}
    >
      <h3 className={`concept__header`}>{header}</h3>
      {isExpanded ? null : <i className={`concept__icon ${icon} ${color}`}></i>}
      {isExpanded ? body : null}
    </div>
  )
}

export default Concept

Concept.propTypes = {
  icon: PropTypes.string.isRequired
}
