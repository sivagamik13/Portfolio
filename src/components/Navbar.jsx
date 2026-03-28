import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'
import './Navbar.css'

function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > 80 && y > lastY)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className={`nav${hidden ? ' nav--hidden' : ''}`}>
      <div className="nav__wrap wrap">
        <a className="nav__logo" href="#home" onClick={e => { e.preventDefault(); go('#home') }}>
          {personalInfo.shortName}
        </a>

        <div className="nav__pill">
          <a onClick={() => go('#home')}>Home</a>
          <a onClick={() => go('#projects')}>Work</a>
          <a onClick={() => go('#about')}>About</a>
          <a onClick={() => go('#tools')}>Tools</a>
          <a href={`${import.meta.env.BASE_URL}Sivagami_resume.pdf`} target="_blank" rel="noopener noreferrer">Resume</a>
          <a className="nav__cta" onClick={() => go('#contact')}>
            <span className="nav__dot" /> Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
