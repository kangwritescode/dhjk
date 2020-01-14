import React, { useState, useEffect } from 'react'
import './Slider.css'

const Slider = ({ photos, sliderFocused, setSliderFocused, title }) => {
  const [sliderXPos, setSliderXPos] = useState(0)
  const [focusIndex, setFocusIndex] = useState(0)
  const [photosToMap, setPhotosToMap] = useState([])
  const [photosCount, setPhotosCount] = useState(0)

  const PHOTO_WIDTH = 100
  useEffect(() => {
    setPhotosToMap(photos)
    setPhotosCount(photos.length)
    return () => {}
  }, [photos])

  function slide (direction) {
    console.log(sliderXPos)
    let newPos
    let newFocusIndex = focusIndex
    if (direction === 'left') {
      if (sliderXPos === 0) {
        newPos = (photosCount - 1) * PHOTO_WIDTH * -1
        newFocusIndex = photosCount - 1
      } else {
        newPos = sliderXPos + 100
        newFocusIndex -= 1
      }
    }
    if (direction === 'right') {
      if (sliderXPos === (photosCount - 1) * PHOTO_WIDTH * -1) {
        newPos = 0
        newFocusIndex = 0
      } else {
        newPos = sliderXPos - 100
        newFocusIndex += 1
      }
    }
    setFocusIndex(newFocusIndex)
    setSliderXPos(newPos)
  }

  return (
    <div className={`slider-wrapper`}>
      <div
        className={`slider ${sliderFocused && 'slider--active'}`}
        onClick={() => setSliderFocused(true)}
      >
        <div
          className={`slider__macTabs ${sliderFocused &&
            'slider__macTabs--expanded'}`}
        >
          <div
            className={`slider__button close ${sliderFocused &&
              'slider__button--expanded'}`}
          ></div>
          <div
            className={`slider__button minimize ${sliderFocused &&
              'slider__button--expanded'}`}
          ></div>
          <div
            className={`slider__button maximize ${sliderFocused &&
              'slider__button--expanded'}`}
          ></div>
          <label
            className={`slider__title ${sliderFocused &&
              'slider__title--visible'}`}
          >
            {title}
          </label>
        </div>
        {sliderFocused && (
          <React.Fragment>
            <div
              className={`slider__left-panel`}
              onClick={e => {
                e.stopPropagation()
                slide('left')
              }}
            ></div>
            <div
              className={`slider__right-panel`}
              onClick={e => {
                e.stopPropagation()
                slide('right')
              }}
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
        className={`slider__photos-indicator ${sliderFocused &&
          'slider__photos-indicator--active'}`}
      >
        {photosToMap.map((_, index) => (
          <div
            className={`slider__dot ${focusIndex === index &&
              'slider__dot--focused'}`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Slider
