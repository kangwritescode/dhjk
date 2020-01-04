import React, { useState, useEffect } from 'react'
import './Landing.css'
import head from '../../assets/head.png'
import Logos from '../Logos/Logos'
import Thoughts from '../Thoughts/Thoughts'
import NavBar from '../NavBar/Navbar/NavBar'
import RightArrow from '../RightArrow/RightArrow'
import { AwesomeButton } from 'react-awesome-button'


// https://drive.google.com/open?id=1MZdkFUsgY4K_yXKXVn8DwAStC1bo6PAl   <- resume

const Landing = props => {
  return (
    <React.Fragment>
      <RightArrow url='?' text='portfolio' />
      <div className='landing'>
        <div className={`thoughts-container`}>
          <Thoughts />
        </div>
        <img className='landing__head' src={head} alt='hi' />
        <h1 id='landing-header'>Hi there, I'm David Kang.</h1>
        <h6 id='landing-subtext'>I'm a recent UC Berkeley graduate and Web Developer. <br/>
        Articles, labs, and more can be found in the code laboratory. <br/>
        You can find internet things I've made on the portfolio page. <br/>
        Best reached any time at davidhjkang@berkeley.edu.

        
        </h6>
      </div>
      <Logos />
    </React.Fragment>
  )
}

export default Landing
