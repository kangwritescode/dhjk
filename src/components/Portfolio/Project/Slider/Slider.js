import React, { useState, useEffect } from 'react'
import './Slider.css'

const Slider = ({ photos }) => {
  photos.push(photos[photos.length - 1])
  return (
    <div className={`slider`}>
      <div className={`slider__macTabs`}>
        <div className={`slider__button close`}></div>
        <div className={`slider__button minimize`}></div>
        <div className={`slider__button maximize`}></div>
      </div>
      <div className={`slider__photos`}>
        <div className={`slider__left-panel`}></div>
        <div className={`slider__right-panel`}></div>
        {photos.map(photo => (
          <img className={'slider__img'} alt='' src={photo}></img>
        ))}
      </div>
    </div>
  )
}

export default Slider
