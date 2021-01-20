/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <p>Mantenido con
        <span role="img" aria-label="hearth"> ❤</span> por Airán. Plantilla hecha por Stackrole
        <span role="img" aria-label="ok-hand">👌</span> Iconos gracias a Freepik
        <span role="img" aria-label="dolphin">🐬</span>
      </p>
    </div>
  </footer>
)

export default Footer