/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import './Project.css'
import Slider from './Slider/Slider'

const Project = ({ tags, title, description, link, source, photos }) => {
  return (
    <section className='section'>
      <div className={`section__banner`}>
        <div className={`section__info`}>
          <h3 className='section__title'>{title}</h3>
          <p className='section__description'>{description}</p>
          <div className={`section__tags`}>
            {tags.map(tag => (
              <span className='section__tag'>{tag}</span>
            ))}
          </div>
          <div className={`section__buttons`}>
            <a href={link} target='_blank'>
              <button className={`live-demo`}>
                Live Demo <i class='fas fa-external-link-alt'></i>
              </button>
            </a>
            <a target='_blank' href={source}>
              <button className={`view-source`}>
                View Source <i class='fab fa-github' aria-hidden='true'></i>
              </button>
            </a>
          </div>
        </div>
      </div>
      <Slider photos={photos} />
    </section>
  )
}

export default Project
