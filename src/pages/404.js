import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiBugLine, RiSkullLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
        <RiSkullLine style={{
          fontSize: "128px",
          color: "var(--primary-color)"
        }}/>
        <h1>Oops esto no tendría que haber pasado</h1>
        <p>Déjame ayudarte, échale un vistazo a las siguientes opciones</p>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Volver al inicio</Link>
      <Link to="/contact" className="button -outline">Notifica un error <RiBugLine className="icon -right"/></Link>
    </div>
  </Layout>
)

export default NotFound