import React, { useState, useEffect } from 'react'
import './InfinityChrome.css'

const InfinityChrome = props => {
  useEffect(() => {
    var isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)

    if (!isChrome) {
      document.getElementsByClassName('infinityChrome')[0].style.display =
        'none'
      document.getElementsByClassName('infinity')[0].style.display = 'block'
    }
    return () => {}
  }, [])
  return (
    <div className='loader-wrapper'>
      <div class='infinityChrome'>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class='infinity'>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        style={{style: 'none'}}
      >
        <defs>
          <filter id='goo'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='6' result='blur' />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default InfinityChrome
