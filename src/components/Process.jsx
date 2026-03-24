import { motion } from 'framer-motion'
import { process } from '../data/portfolioData'
import './Process.css'

function Process() {
  return (
    <section className="process">
      <div className="wrap">
        <div className="divider" />
        <div className="sec-header" style={{ marginTop: 48 }}>
          <span className="sec-num">01 //Approach</span>
          <span className="sec-num">Three Phases</span>
        </div>

        <motion.h2 className="sec-title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >My Process</motion.h2>

        <div className="process__grid">
          {process.map((p, i) => (
            <motion.div className="process__card" key={p.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="process__step">{p.step}</span>
              <h3 className="process__name">{p.title}</h3>
              <p className="process__desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
