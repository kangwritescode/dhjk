import React, { useState, useEffect } from 'react'
import './Portfolio.css'
import Project from './Project/Project'
import Arrow from '../Arrow/Arrow'
import { projects } from './PortfolioData/PortfolioData'

const Portfolio = props => {
  

  return (
    <div className={`portfolio`}>
      <Arrow url='/' direction='left' text=' home' />
      <div className={`portfolio__backdrop`}></div>
      <header>
        web dev portfolio
        <br />
        <span className='sub-header'>a collection of my internet things.</span>
      </header>
      {projects.map(projectData => (
        <Project key={projectData.title} {...projectData} />
      ))}
    </div>
  )
}

export default Portfolio
