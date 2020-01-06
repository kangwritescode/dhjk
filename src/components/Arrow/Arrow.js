import React, { useState, useEffect } from 'react'
import './Arrow.css'

const Arrow = ({ text, url, direction }) => {
  return (
    <a href={url} className={`navButton navButton-${direction}`}>
      <span className={`navButton__text navButton__text--${direction}`}>
        {text}
      </span>
      <div class={`arrow`}>
        <div class={`arrow-top arrow-top--${direction}`}></div>
        <div class={`arrow-top arrow-bottom--${direction}`}></div>
      </div>
    </a>
  )
}
export default Arrow
