import React, { useState, useEffect } from 'react'
import './Logos.css'
import fb from '../../assets/fb.png'
import octocat from '../../assets/octocat.png'
import linkedIn from '../../assets/linkedin.png'
import ig from '../../assets/instagram.png'

const Logos = props => {
  const iconLinks = [
    { url: fb, delay: '3s' },
    { url: octocat, delay: '3.05s' },
    { url: linkedIn, delay: '3.1s' },
    { url: ig, delay: '3.15s' }
  ]

  return (
    <div className='container'>
      {iconLinks.map(link => {
        return (
          <img
            className='link'
            alt=''
            src={link.url}
            style={{ animation: `pop-in-right .15s ease-in-out ${link.delay} forwards` }}
          ></img>
        )
      })}
    </div>
  )
}

export default Logos
