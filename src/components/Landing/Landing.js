import React, { useState, useEffect } from 'react'
import './Landing.css'
import head from '../../assets/head.png'
import Logos from '../Logos/Logos'
import Thoughts from '../Thoughts/Thoughts'
import NavBar from '../NavBar/Navbar/NavBar'
import RightArrow from '../RightArrow/RightArrow'

const Landing = props => {
  return (
    <React.Fragment>
      <RightArrow url='?' text='portfolio' />
      <div className='landing'>
        <div className={`thoughts-container`}>
          <Thoughts />
        </div>
        <img className='landing__head' src={head} alt='hi' />
        <h1 id='landing-header'>David Kang</h1>
        <h6 id='landing-subtext'>Web Developer | Problem Solver | Artist</h6>
      </div>
      <Logos />
      <NavBar />
    </React.Fragment>
  )
}

export default Landing
