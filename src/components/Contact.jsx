import { motion } from 'framer-motion'
import { FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaBehance } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="divider" />

        <div className="contact__body">
          <motion.h2 className="contact__heading"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >Let's Work<br />Together</motion.h2>

          <motion.div className="contact__ctas"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a className="contact__btn" href={`mailto:${personalInfo.email}`}>
              Contact Now
            </a>
          </motion.div>

          <motion.div className="contact__meta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <p>{personalInfo.email}</p>
            <p>{personalInfo.location}</p>
          </motion.div>

          <motion.div className="contact__social"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin /> LinkedIn</a>
            <a href={personalInfo.behance} target="_blank" rel="noopener noreferrer"><FaBehance /> Behance</a>
          </motion.div>
        </div>

        <div className="divider" style={{ marginTop: 80 }} />

        <footer className="footer">
          <span className="footer__logo">{personalInfo.shortName}</span>
          <span className="footer__copy">&copy; {new Date().getFullYear()} Sivagama Sundari M</span>
          <a className="footer__top" href="#home" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>
            Back To Top ↑
          </a>
        </footer>
      </div>
    </section>
  )
}

export default Contact
