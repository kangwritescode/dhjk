import React, { useState, useEffect } from 'react'
import './Studio.css'
import NavBar from '../NavBar/Navbar/NavBar'
import Arrow from '../Arrow/Arrow'
import Filter from '../Filter/Filter'
import { STUDIO_DATA } from './StudioData/StudioData'
import Concept from './Concept/Concept'

const Studio = props => {
  const [selectedFilter, setSelectedFilter] = useState('SHOW ALL')
  const options = ['SHOW ALL', 'HTML', 'CSS', 'Javascript', 'ReactJS']

  const setFilter = option => {
    setSelectedFilter(option)
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className={`studio`}>
        <Arrow url='/portfolio' direction='left' text='portfolio' />
        <Arrow url='/contact' direction='right' text='contact ' />
        <h1>web dev studio</h1>
        <h6 className='sub-header'>a collection of crucial concepts.</h6>
        <Filter
          selectedFilter={selectedFilter}
          options={options}
          setFilter={setFilter}
        ></Filter>
        <label className='studio__concept-count-label'>
          Showing 3 concepts filtered by the 'SHOW ALL' tag.
        </label>
        {STUDIO_DATA.map(({ header, icon, color, body }) => {
          return (
            <Concept header={header} icon={icon} color={color} body={body} />
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default Studio
