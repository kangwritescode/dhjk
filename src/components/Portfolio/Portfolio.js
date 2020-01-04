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
              barz is an app where you can rap and stuff and it's pretty dope.
              Also, you can do this and that and wow cool beans.
            </p>
            <div className={`section__tags`}>
              <span className='section__tag'>HTML</span>
              <span className='section__tag'>CSS</span>
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
          <div className={`slider__macTabs`}></div>
          <div className={`slider__photos`}>
            <div className={`blue`}></div>
          </div>
        </div>
      </section>
      {/* <section className='section'>
        <div className={`section__info`}>
          <h3 className='section__title'>BARZ</h3>
          <p className='section__description'>
            barz is an app where you can rap and stuff and it's pretty dope.
            Also, you can do this and that and wow cool beans.
          </p>
          <div className={`section__tags`}>
            <span className='section__tag'>HTML</span>
            <span className='section__tag'>CSS</span>
          </div>
          <div className={`section__buttons`}>
            <button className={`live-demo`}>
              Live Demo <i class='fas fa-external-link-alt'></i>
            </button>
            <button className={`view-source`}>View Source</button>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Portfolio
