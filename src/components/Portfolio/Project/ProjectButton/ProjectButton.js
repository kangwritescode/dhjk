import React, { useState, useEffect } from 'react'
import './ProjectButton.css'

const ProjectButton = ({ href, text, className, fontAwesome }) => {
  return (
    <a href={href} target='_blank'>
      <button className={className}>
        {text} <i className={fontAwesome}></i>
      </button>
    </a>
  )
}

export default ProjectButton
