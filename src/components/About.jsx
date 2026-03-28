import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { personalInfo, experience, stats } from '../data/portfolioData'
import './About.css'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const target = parseFloat(value)
    const isDecimal = value.includes('.')
    const duration = 1500
    const steps = duration / 16
    const step = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return <span ref={ref} className="stat__num">{count}{suffix}</span>
}

function About() {
  return (
    <section id="about" className="about">
      <div className="wrap">
        {/* Stats */}
        <div className="divider" />
        <div className="sec-header" style={{ marginTop: 48 }}>
          <span className="sec-num">03 //Numbers</span>
          <span className="sec-num">At a Glance</span>
        </div>

        <div className="stats__grid">
          {stats.map((s, i) => (
            <motion.div className="stat" key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Counter value={s.value} suffix={s.suffix} />
              <span className="stat__label">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* About */}
        <div className="divider" style={{ marginTop: 100 }} />
        <div className="sec-header" style={{ marginTop: 48 }}>
          <span className="sec-num">04 //Who Am I</span>
          <span className="sec-num">Since 2023</span>
        </div>

        <motion.h2 className="sec-title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >About Me</motion.h2>

        <motion.p className="about__bio"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >{personalInfo.bio}</motion.p>

        {/* Experience */}
        <div className="divider" style={{ marginTop: 80 }} />
        <div className="sec-header" style={{ marginTop: 48 }}>
          <span className="sec-num">05 //Experience</span>
          <span className="sec-num">2023 — Present</span>
        </div>

        <motion.h2 className="sec-title" style={{ marginBottom: 32 }}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >Experience</motion.h2>

        <div className="exp__list">
          {experience.map((e, i) => (
            <motion.div className="exp__card" key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="exp__top">
                <div>
                  <h3 className="exp__company">{e.company}</h3>
                  <p className="exp__role">{e.role}</p>
                </div>
                <span className="exp__period">{e.period}</span>
              </div>
              <p className="exp__desc">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
