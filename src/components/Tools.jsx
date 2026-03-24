import { tools } from '../data/portfolioData'
import './Tools.css'

const iconFile = {
  'Figma': 'figma.svg',
  'Adobe XD': 'adobexd.svg',
  'Photoshop': 'photoshop.svg',
  'Illustrator': 'illustrator.svg',
  'Framer': 'framer.svg',
  'Canva': 'canva.svg',
  'Balsamiq': 'balsamiq.png',
  'UX Pilot': 'uxpilot.png',
  'Paper': 'paper.svg',
  'Pencil': 'pencil.svg',
  'Stitch': 'stitch.svg',
  'Claude Code': 'claude.svg',
}

const row1 = tools.slice(0, 6)
const row2 = tools.slice(6)

function Tools() {
  return (
    <section id="tools" className="tools">
      <div className="wrap">
        <div className="divider" />
        <div className="tools__header">
          <div>
            <span className="sec-num">06 //Toolkit</span>
            <h2 className="tools__title">My Tools</h2>
          </div>
          <p className="tools__sub">Tools I use every day.</p>
        </div>
      </div>

      <div className="tools__marquee">
        <div className="tools__track tools__track--left">
          {[0,1,2].map(k => (
            <div className="tools__set" key={k}>
              {row1.map(name => (
                <div className="tools__chip" key={name + k}>
                  <img className="tools__chip-icon" src={`${import.meta.env.BASE_URL}icons/${iconFile[name]}`} alt={name} />
                  <span className="tools__chip-name">{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="tools__marquee">
        <div className="tools__track tools__track--right">
          {[0,1,2].map(k => (
            <div className="tools__set" key={k}>
              {row2.map(name => (
                <div className="tools__chip" key={name + k}>
                  <img className="tools__chip-icon" src={`${import.meta.env.BASE_URL}icons/${iconFile[name]}`} alt={name} />
                  <span className="tools__chip-name">{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
