import React, { useState, useEffect } from 'react'
import './Slider.css'

const Slider = ({ photos, sliderFocused, setSliderFocused, title, projectClass }) => {
  const [focusIndex, setFocusIndex] = useState(0)
  const [photosToMap, setPhotosToMap] = useState([])
  const [photosCount, setPhotosCount] = useState(0)

  useEffect(() => {
    setPhotosToMap(photos)
    setPhotosCount(photos.length)
    return () => {}
  }, [photos])

  function slide (direction) {
    let newFocusIndex = focusIndex
    if (direction === 'left') {
      if (focusIndex === 0) {
        newFocusIndex = photosCount - 1
      } else {
        newFocusIndex -= 1
      }
    }
    if (direction === 'right') {
      if (focusIndex === photosCount - 1) {
        newFocusIndex = 0
      } else {
        newFocusIndex += 1
      }
    }
    setFocusIndex(newFocusIndex)
  }

  return (
    <div
      className={`slider-wrapper ${sliderFocused && 'slider-wrapper--active'}`}
    >
      <div
        className={`slider ${sliderFocused && 'slider--active'}`}
        onClick={!sliderFocused ? () => setSliderFocused(true) : null}
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
              className={`slider__left-panel ${projectClass}`}
              onClick={e => {
                e.stopPropagation()
                slide('left')
              }}
            >
              <i className={`fas fa-angle-left ${projectClass}`}></i>
            </div>
            <div
              className={`slider__right-panel ${projectClass}`}
              onClick={e => {
                e.stopPropagation()
                slide('right')
              }}
            >
              <i className={`fas fa-angle-right ${projectClass}`}></i>
            </div>
          </React.Fragment>
        )}
        <div
          className={`slider__photos`}
          style={{
            transition: 'none'
          }}
        >
          <img
            key={photosToMap[focusIndex]}
            className={'slider__img'}
            alt=''
            src={photosToMap[focusIndex]}
          ></img>
        </div>
      </div>
      <div
        className={`slider__photos-indicator ${sliderFocused &&
          'slider__photos-indicator--active'}`}
      >
        {photosToMap.map((url, index) => {
          return (
            <div
              key={url}
              className={`slider__dot ${focusIndex === index &&
                'slider__dot--focused'}`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default Slider
