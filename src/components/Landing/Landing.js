/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import './Landing.css'
import head from '../../assets/head.png'
import headTwo from '../../assets/headTwo.png'
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

  const LINES_DATA = [
    {
      id: 'subtext-line-one',
      className: 'subtext-line',
      style: { animation: 'fadeInDown .2s ease-in 1.2s forwards' },
      content: (
        <React.Fragment>
          {' '}
          I'm a recent{' '}
          <a
            className={`underline--magical underline--magical--bears underline--magical--compressed ${expandedOne}`}
            target='_blank'
            href='https://drive.google.com/open?id=1MZdkFUsgY4K_yXKXVn8DwAStC1bo6PAl'
          >
            UC Berkeley graduate
          </a>{' '}
          and Web Developer.
        </React.Fragment>
      )
    },

    {
      id: 'subtext-line-two',
      className: 'subtext-line',
      style: { animation: 'fadeInDown .2s  ease-in 1.4s forwards' },
      content: (
        <React.Fragment>
          Articles, labs, and more can be found in the{' '}
          <a
            href='/'
            className={`underline--magical underline--magical--compressed ${expandedTwo}`}
          >
            code laboratory.
          </a>
        </React.Fragment>
      )
    },
    {
      id: 'subtext-line-two',
      className: 'subtext-line',
      style: { animation: 'fadeInDown .2s ease-in 1.6s forwards' },
      content: (
        <React.Fragment>
          {' '}
          You can find internet things I've made on the{' '}
          <a
            className={`underline--magical underline--magical--compressed ${expandedThree}`}
            href='portfolio'
          >
            portfolio page.
          </a>
        </React.Fragment>
      )
    },
    {
      id: 'subtext-line-four',
      className: 'subtext-line',
      style: { animation: 'fadeInDown .2s ease-in 1.8s forwards' },
      content: (
        <React.Fragment>
          {' '}
          Best reached any time at{' '}
          <a
            className={`underline--magical underline--magical--compressed ${expandedFour}`}
            href='mailto:davidhjkang@berkeley.edu'
          >
            davidhjkang@berkeley.edu.
          </a>
        </React.Fragment>
      )
    }
  ]

  useEffect(() => {
    setMagicalUnderlineTimeouts()
    return () => {}
  }, [])

  function setMagicalUnderlineTimeouts () {
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
  }

  return (
    <React.Fragment>
      <Arrow url='portfolio' text='portfolio' direction='right' />
      <div className='landing'>
        <div className={`thoughts-container`}>
          <Thoughts />
        </div>
        <img className='landing__head fadeInUp' src={head} alt='hi' />
        <h1 id='landing-header'>Hi there, I'm David Kang</h1>
        <div id='landing-subtext'>
          {LINES_DATA.map(({ className, id, content, style }) => {
            return (
              <span className={className} id={id} style={style}>
                {content}
              </span>
            )
          })}
        </div>
      </div>
      <Logos />
    </React.Fragment>
  )
}

export default Landing
