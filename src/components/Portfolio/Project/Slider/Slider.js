import React, { useState, useEffect } from 'react'
import './Slider.css'

const Slider = ({ photos }) => {
  const [sliderXPos, setSliderXPos] = useState(0)
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

  return (
    <div className={`slider`}>
      <div className={`slider__macTabs`}>
        <div className={`slider__button close`}></div>
        <div className={`slider__button minimize`}></div>
        <div className={`slider__button maximize`}></div>
      </div>
      <div className={`slider__left-panel`} onClick={() => slide('left')}></div>
      <div
        className={`slider__right-panel`}
        onClick={() => slide('right')}
      ></div>
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
  )
}

export default Slider
