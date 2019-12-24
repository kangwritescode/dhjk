import React from 'react'
import './TempView.css'

const TempView = () => {
  const resLink =
    'https://drive.google.com/file/d/1MZdkFUsgY4K_yXKXVn8DwAStC1bo6PAl/view?usp=sharing'
  const linkedIn = 'https://www.linkedin.com/in/davidhjkang/'
  const barzLink = 'https://writebarz.com/recruit-david'

  const openLink = url => {
    window.open(url)
  }

  return (
    <div className='temp-view'>
      <h1>Hello. I'm David.</h1>
      <p className='temp-view__description'>
        <span className='description__one'>
          I like to make things for the web.
        </span>
        <span className='description__two'>
          {' '}
          This website is currently under construction!
        </span>
        <span className='description__three'>
          {' '}
          In the meantime, take a copy of my{' '}
          <b
            className='clickable'
            id='link-one'
            onClick={() => openLink(resLink)}
          >
            {' '}
            resume
          </b>
          , connect with me via{' '}
          <b
            className='clickable'
            id='link-two'
            onClick={() => openLink(linkedIn)}
          >
            {' '}
            LinkedIn
          </b>
          , and check out my latest project:{' '}
          <b
            className='clickable'
            id='link-three'
            onClick={() => openLink(barzLink)}
          >
            {' '}
            BARZ{' '}
          </b>{' '}
          .
        </span>
      </p>
    </div>
  )
}

export default TempView
