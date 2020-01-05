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
        <div className={`section__banner`}>
          <div className={`section__info`}>
            <h3 className='section__title'>BARZ</h3>
            <p className='section__description'>
              BARZ is a gamified social network where rap fans can write, post, and vote on rap lyrics.
            </p>
            <div className={`section__tags`}>
              <span className='section__tag'>HTML5</span>
              <span className='section__tag'>CSS3</span>
              <span className='section__tag'>Javascript</span>
              <span className='section__tag'>Es6</span>
              <span className='section__tag'>ReactJS</span>
              <span className='section__tag'>Redux</span>
              <span className='section__tag'>Firebase</span>
              <span className='section__tag'>Sass</span>
            </div>
            <div className={`section__buttons`}>
              <button className={`live-demo`}>
                Live Demo <i class='fas fa-external-link-alt'></i>
              </button>
              <button className={`view-source`}>View Source</button>
            </div>
          </div>
        </div>
        <div className={`slider`}>
          <div className={`slider__macTabs`}>
            <div className={`slider__button close`}></div>
            <div className={`slider__button minimize`}></div>
            <div className={`slider__button maximize`}></div>
          </div>
          <div className={`slider__photos`}>
            <div className={`blue`}></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
