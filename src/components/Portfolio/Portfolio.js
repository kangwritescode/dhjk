import React, { useState, useEffect } from 'react'
import './Portfolio.css'
import Project from './Project/Project'
import Arrow from '../Arrow/Arrow'
import { projects } from './PortfolioData/PortfolioData'
import NavBar from '../NavBar/Navbar/NavBar'
import Filter from './Filter/Filter'

const Portfolio = props => {
  const [selectedFilter, setSelectedFilter] = useState('SHOW ALL')
  const options = [
    'SHOW ALL',
    'SELECTED WORKS',
    'FULL-PROJECTS',
    'MINI-PROJECTS'
  ]

  const setFilter = option => {
    setSelectedFilter(option)
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className={`portfolio`}>
        <Arrow url='/' direction='left' text=' home' />
        <Arrow url='/laboratory' direction='right' text='lab ' />
        <h1>web dev portfolio</h1>
        <h6 className='sub-header'>a collection of my internet things.</h6>
        <Filter
          selectedFilter={selectedFilter}
          options={options}
          setFilter={setFilter}
        ></Filter>
        {projects
          .filter(({ filterOptions }) => filterOptions.includes(selectedFilter))
          .map(projectData => (
            <Project key={projectData.title} {...projectData} />
          ))}
      </div>
    </React.Fragment>
  )
}

export default Portfolio
