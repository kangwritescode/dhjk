import React, { useState, useEffect } from 'react'
import './Portfolio.css'
import Project from './Project/Project'

const Portfolio = props => {
  const projects = [
    {
      tags: [
        'HTML5',
        'CSS3',
        'Javascript',
        'Es6',
        'ReactJS',
        'Redux',
        'Firebase',
        'Sass'
      ],
      description:
        'BARZ is a gamified social network where rap fans can write, post, and vote on rap lyrics.',
      title: 'BARZ',
      link: 'https://writebarz.com/recruit-david',
      source: 'https://github.com/kangwritescode/barz'
    }
  ]

  return (
    <div className={`portfolio`}>
      <header>
        web dev portfolio
        <br />
        <span className='sub-header'>a collection of my internet things.</span>
      </header>
      {projects.map(project => (
        <Project
          tags={project.tags}
          title={project.title}
          description={project.description}
          link={project.link}
          source={project.source}
        />
      ))}
    </div>
  )
}

export default Portfolio
