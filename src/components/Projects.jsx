import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="wrap">
        <div className="divider" />
        <div className="sec-header" style={{ marginTop: 48 }}>
          <span className="sec-num">02 //Portfolio</span>
          <span className="sec-num">2023 — 2025</span>
        </div>

        <motion.h2 className="sec-title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >Latest Work</motion.h2>

        <p className="sec-sub" style={{ marginTop: 16, marginBottom: 48 }}>
          My creative spirit comes alive in the digital realm — crafting intuitive experiences with care.
        </p>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <motion.a className="pcard" key={p.title}
              href={p.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              <div className="pcard__img">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="pcard__info">
                <h3 className="pcard__name">{p.title}</h3>
                <div className="pcard__tags">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
