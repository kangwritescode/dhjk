import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Concept.css'

const Concept = ({ header, icon, color }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={'concept'}>
      <h3 className={`concept__header`}>{header}</h3>
      <i className={`concept__icon ${icon} ${color}`}></i>
    </div>
  )
}

export default Concept

Concept.propTypes = {
  header: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
