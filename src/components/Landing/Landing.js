/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import './Landing.css'
import head from '../../assets/head.png'
import Logos from '../Logos/Logos'
import Thoughts from '../Thoughts/Thoughts'
import NavBar from '../NavBar/Navbar/NavBar'
import Arrow from '../Arrow/Arrow'
import Typing from 'react-typing-animation'
import { AwesomeButton } from 'react-awesome-button'

const Landing = ({}) => {
  const [expandedOne, setExpandedOne] = useState(null)
  const [expandedTwo, setExpandedTwo] = useState(null)
  const [expandedThree, setExpandedThree] = useState(null)
  const [expandedFour, setexpandedFour] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setExpandedOne('underline--magical--expanded')
    }, 2150)
    setTimeout(() => {
      setExpandedTwo('underline--magical--expanded')
    }, 2450)
    setTimeout(() => {
      setExpandedThree('underline--magical--expanded')
    }, 2750)
    setTimeout(() => {
      setexpandedFour('underline--magical--expanded')
    }, 3050)
    return () => {}
  }, [])

  return (
    <React.Fragment>
      <Arrow url='portfolio' text='portfolio' direction='right' />
      {/* <Arrow url='portfolio' text='portfolio' direction='left'/> */}
      <div className='landing'>
        <div className={`thoughts-container`}>
          <Thoughts />
        </div>
        <img className='landing__head' src={head} alt='hi' />
        <h1 id='landing-header'>Hi there, I'm David Kang</h1>
        <div id='landing-subtext'>
          <span
            className={`subtext-line`}
            id='subtext-line-one'
            style={{ animation: 'fadeInDown .2s ease-in 1.2s forwards' }}
          >
            I'm a recent{' '}
            <a
              className={`underline--magical underline--magical--bears underline--magical--compressed ${expandedOne}`}
              target='_blank'
              href='https://drive.google.com/open?id=1MZdkFUsgY4K_yXKXVn8DwAStC1bo6PAl'
            >
              UC Berkeley graduate
            </a>{' '}
            and Web Developer.
          </span>
          <br />
          <span
            className='subtext-line'
            id='subtext-line-two'
            style={{ animation: 'fadeInDown .2s  ease-in 1.4s forwards' }}
          >
            Articles, labs, and more can be found in the{' '}
            <a
              className={`underline--magical underline--magical--compressed ${expandedTwo}`}
            >
              code laboratory.
            </a>
          </span>
          <span
            className='subtext-line'
            id='subtext-line-three'
            style={{ animation: 'fadeInDown .2s ease-in 1.6s forwards' }}
          >
            {' '}
            You can find internet things I've made on the{' '}
            <a
              className={`underline--magical underline--magical--compressed ${expandedThree}`}
              href='portfolio'
            >
              portfolio page.
            </a>
          </span>
          <br />
          <span
            className='subtext-line'
            id='subtext-line-four'
            style={{ animation: 'fadeInDown .2s ease-in 1.8s forwards' }}
          >
            {' '}
            Best reached any time at{' '}
            <a
              className={`underline--magical underline--magical--compressed ${expandedFour}`}
            >
              davidhjkang@berkeley.edu.
            </a>
          </span>
        </div>
      </div>
      <Logos />
    </React.Fragment>
  )
}

export default Landing
