import React, { useState, useEffect } from 'react'
import './Portfolio.css'
import Project from './Project/Project'
import Arrow from '../Arrow/Arrow'
import { projects } from './PortfolioData/PortfolioData'
import DrawBorderButton from '../UI/DrawBorderButton'

const Portfolio = props => {
  const [focusIndex, setFocusIndex] = useState(0);
  const [focusedProject, setFocusedProject] = useState(null)

  useEffect(() => {
    function generateProject(projectData) {
      return (
        <Project key={projectData.title} {...projectData} />
      )
    }
    setFocusedProject(generateProject(projects[focusIndex]))
  }, [focusIndex])
  
  return (
    <div className={`portfolio`}>
      <Arrow url='/' direction='left' text=' home' />
      <div className={`portfolio__backdrop`}></div>
      <header>
        web dev portfolio
        <br />
        <span className='sub-header'>a collection of my internet things.</span>
      </header>
      {focusedProject}
    </div>
  )
}

export default Portfolio
