import React, { useState, useEffect } from 'react'
import './Slider.css'

const Slider = ({ photos }) => {
  const [sliderXPos, setSliderXPos] = useState(0)
  const [photosToMap, setPhotosToMap] = useState([])
  const [photosCount, setPhotosCount] = useState(0)

  const [focused, setFocused] = useState(false)

  const PHOTO_WIDTH = 100
  useEffect(() => {
    setPhotosToMap(photos)
    setPhotosCount(photos.length)
    return () => {}
  }, [photos])

  function slide (direction) {
    console.log(sliderXPos)
    let newPos
    if (direction === 'left') {
      if (sliderXPos === 0) {
        newPos = (photosCount - 1) * PHOTO_WIDTH * -1
      } else {
        newPos = sliderXPos + 100
      }
    }
    if (direction === 'right') {
      if (sliderXPos === (photosCount - 1) * PHOTO_WIDTH * -1) {
        newPos = 0
      } else {
        newPos = sliderXPos - 100
      }
    }
    setSliderXPos(newPos)
  }

  function focusSlider (bool) {
    if (bool) {
      const arrows = [...document.getElementsByClassName('navButton')]
      arrows.forEach(arrow => {
        arrow.classList.add('navButton--invisible')
      })
      return setFocused(true)
    }
    const arrows = [...document.getElementsByClassName('navButton')]
    arrows.forEach(arrow => {
      arrow.classList.remove('navButton--invisible')
    })
    return setFocused(false)
  }
  return (
    <React.Fragment>
      <div
        className={`slider ${focused && 'slider--active'}`}
        onClick={() => (focused ? null : focusSlider(true))}
      >
        <div className={`slider__macTabs`}>
          <div className={`slider__button close`}></div>
          <div className={`slider__button minimize`}></div>
          <div className={`slider__button maximize`}></div>
        </div>
        {focused && (
          <React.Fragment>
            <div
              className={`slider__left-panel`}
              onClick={() => slide('left')}
            ></div>
            <div
              className={`slider__right-panel`}
              onClick={() => slide('right')}
            ></div>
          </React.Fragment>
        )}
        <div
          className={`slider__photos`}
          style={{
            transition: 'none',
            transform: `translateX(${sliderXPos}%)`
          }}
        >
          {photosToMap.map(photo => (
            <img key={photo} className={'slider__img'} alt='' src={photo}></img>
          ))}
        </div>
      </div>
      <div
        className={`slider-backdrop ${focused && 'slider-backdrop--active'}`}
        onClick={() => focusSlider(false)}
      ></div>
    </React.Fragment>
  )
}

export default Slider
