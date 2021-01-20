import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiCheckboxCircleLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <RiCheckboxCircleLine style={{
        fontSize: "128px",
        color: "var(--primary-color)"
      }}/>
      <h1>Mensaje enviado</h1>
      <p>Gracias por mandarme un correo. Pronto me pondré en contacto contigo <span role="img" aria-label="happy-face">😉</span>.</p>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Ir al inicio</Link>
    </div>

  </Layout>
)

export default Thanks