import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './Logos.css'
import fb from '../../assets/fb.png'
import octocat from '../../assets/github.svg'
import linkedIn from '../../assets/ln.png'
import ig from '../../assets/ig.png'

const Logos = props => {
  const iconLinks = [
    { url: fb, delay: '3.9s', href: 'https://www.facebook.com/david.kang.75' },
    {
      url: linkedIn,
      delay: '4s',
      href: 'https://www.linkedin.com/in/davidhjkang/'
    },
    { url: ig, delay: '4.05s', href: 'https://www.instagram.com/ajiashi/' },
    {
      url: octocat,
      delay: '3.95s',
      href: 'https://github.com/kangwritescode/'
    }
  ]

  const openLink = url => {
    window.open(url)
  }

  const content = (
    <div className='container'>
      {iconLinks.map(link => {
        return (
          <img
            className='link'
            alt=''
            src={link.url}
            onClick={() => openLink(link.href)}
            // style={{
            //   animation: `pop-in-right .15s ease-in-out ${link.delay} forwards`
            // }}
          ></img>
        )
      })}
    </div>
  )

  return content;
}

export default Logos
