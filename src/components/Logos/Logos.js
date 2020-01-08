import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './Logos.css'
import fb from '../../assets/fb.png'
import octocat from '../../assets/github.svg'
import linkedIn from '../../assets/ln.png'
import ig from '../../assets/ig.png'

const Logos = props => {
  const [fbPopInClass, setFbPopInClass] = useState('')
  const [linkedInPopInClass, setLinkedInPopInClass] = useState('')
  const [githubPopInClass, setgithubPopInClass] = useState('')
  const [igPopInClass, setIgPopInClass] = useState('')

  const openLink = url => {
    window.open(url)
  }
  useEffect(() => {
    addPopInRightClasses()
    return () => {}
  }, [])

  function addPopInRightClasses () {
    setTimeout(() => {
      setFbPopInClass('popped-in')
    }, 1700)
    setTimeout(() => {
      setLinkedInPopInClass('popped-in')
    }, 1790)
    setTimeout(() => {
      setgithubPopInClass('popped-in')
    }, 1880)
    setTimeout(() => {
      setIgPopInClass('popped-in')
    }, 1970)
  }

  const content = (
    <div className='container'>
      <button
        className={`container__button container__button--facebook ${fbPopInClass}`}
      >
        <i class='fab fa-facebook-f icon' id='facebook'></i>
      </button>
      <button
        className={`container__button container__button--linkedIn ${linkedInPopInClass}`}
      >
        <i class='fab fa-linkedin-in icon' id='linkedIn'></i>
      </button>
      <button
        className={`container__button container__button--github ${githubPopInClass}`}
      >
        <i class='fab fa-github icon' id='github'></i>
      </button>
      <button
        className={`container__button container__button--instagram ${igPopInClass}`}
      >
        <i class='fab fa-instagram icon' id='instagram'></i>
      </button>
    </div>
  )

  return content
}

export default Logos
