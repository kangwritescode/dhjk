import React, { useState, useEffect } from 'react'
import './Portfolio.css'

const Portfolio = props => {
  return (
    <div className={`portfolio`}>
      <header>
        web dev portfolio
        <br />
        <span className='sub-header'>a collection of my internet things.</span>
      </header>
      <section className='section'>
        <div className={`section__info`}>
          <h3>BARZ</h3>
          <p>
            barz is an app where you can rap and stuff and it's pretty dope.
            Also, you can do this and that and wow cool beans.
          </p>
          <div className={`section__tags`}><span>HTML</span><span>CSS</span></div>
          <div className={`section__buttons`}>
              <button>Live Demo</button>
              <button>View Source</button>
          </div>
        </div>
        <img className='section__photo' alt='' src='https://picsum.photos/600/400'></img>
      </section>
    </div>
  )
}

export default Portfolio
