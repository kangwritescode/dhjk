/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import './Landing.css'
import Logos from '../Logos/Logos'
import NavBar from '../NavBar/Navbar/NavBar'
import Arrow from '../Arrow/Arrow'

const Landing = props => {
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
            className={`underline--magical underline--magical--bears underline--magical--compressed`}
            id='underline-one'
            target='_blank'
            href='https://drive.google.com/file/d/1hVIE4lS_jDwUQte8q8UPqyYrBaTSa6dw/view?usp=sharing'
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
           Various web dev topics are covered by me in the{' '}
          <span
            onClick={() => alert('coming soon!')}
            className={`underline--magical underline--magical--compressed`}
            id='underline-two'
          >
            web studio.
          </span>
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
            className={`underline--magical underline--magical--compressed`}
            id='underline-three'
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
            className={`underline--magical underline--magical--compressed `}
            id='underline-four'
            href='mailto:davidhjkang@berkeley.edu'
          >
            davidhjkang@berkeley.edu.
          </a>
        </React.Fragment>
      )
    }
  ]

  useEffect(() => {
    setHeaderAnimation()
    setMagicalUnderlineTimeouts()
    setHTMLCodeTimeout()
    return () => {}
  }, [])

  function setHeaderAnimation () {
    document.getElementById('landing-header').classList.add('zoomInDown')
  }
  function setHTMLCodeTimeout () {
    const htmEl = document.querySelector('.landing__html')
    setTimeout(() => {
      htmEl.classList.add('landing__html--active')
    }, 3150)
    setTimeout(() => {
      htmEl.classList.add('bob')
    }, 3950)
  }
  function setMagicalUnderlineTimeouts () {
    setTimeout(() => {
      let text = document.querySelector('#underline-one')
      if (text) {
        text.classList.add('underline--magical--expanded')
      }
    }, 2150)
    setTimeout(() => {
      let text = document.querySelector('#underline-two')
      if (text) {
        text.classList.add('underline--magical--expanded')
      }
    }, 2450)
    setTimeout(() => {
      let text = document.querySelector('#underline-three')
      if (text) {
        text.classList.add('underline--magical--expanded')
      }
    }, 2750)
    setTimeout(() => {
      let text = document.querySelector('#underline-four')
      if (text) {
        text.classList.add('underline--magical--expanded')
      }
    }, 3050)
  }

  return (
    <React.Fragment>
      <NavBar />
      <Arrow url='portfolio' text='portfolio' direction='right' />
      <div className='landing'>
        <div className={`landing__html`}>
          <i className='fa fa-code'></i>
        </div>
        <h1 id='landing-header'>Hi there, I'm David Kang</h1>
        <div id='landing-subtext'>
          {LINES_DATA.map(({ className, id, content, style }) => {
            return (
              <React.Fragment>
                <span className={className} id={id} style={style}>
                  {content}
                </span>
                <br />
              </React.Fragment>
            )
          })}
        </div>
      </div>
      <Logos />
    </React.Fragment>
  )
}

export default Landing
