import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content wrap">
        <motion.div className="hero__badges"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="hero__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Based in {personalInfo.location}
          </span>
          <span className="hero__badge">
            <span className="hero__green" />
            Available for work
          </span>
          <span className="hero__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            {personalInfo.title}
          </span>
        </motion.div>

        <motion.h1 className="hero__name"
          initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          {personalInfo.shortName}
        </motion.h1>

        <motion.p className="hero__tagline"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div className="hero__ctas"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a className="hero__btn" href="#projects" onClick={e=>{e.preventDefault();document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'})}}>
            View Work
          </a>
          <a className="hero__btn hero__btn--outline" href="#contact" onClick={e=>{e.preventDefault();document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})}}>
            Contact Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
