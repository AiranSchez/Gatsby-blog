/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { RiGithubFill, RiLinkedinBoxFill, RiSendPlane2Line, RiTwitterFill } from "react-icons/ri"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query ContactQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({data}) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return  (
    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <SEO 
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="social-icons" style={{marginTop: '30px'}}>
          <Link to={'https://twitter.com/AiranDev'} target="_blank"><RiTwitterFill/></Link>
          <Link to={'https://www.linkedin.com/in/air%C3%A1n-s%C3%A1nchez-brito-415910145/'} target="_blank"><RiLinkedinBoxFill/></Link>
          <Link to={'https://github.com/AiranSchez'} target="_blank"><RiGithubFill/></Link>
        </div>
        <form className="contact-form" action="/thanks" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Nombre<input type="text" name="name" required /></label>
          </p>
          <p>
            <label>Email<input type="email" name="email" required /></label>
          </p>
          <p>
            <label>Asunto<input type="text" name="subject" required /></label>
          </p>
          <p>
            <label>Mensaje<textarea name="message" required ></textarea></label>
          </p>
          <p className="text-align-right">
            <button className="button"            
            sx={{
              variant: 'links.button'
            }} type="submit">Enviar mensaje<span className="icon -right"><RiSendPlane2Line/></span></button>
          </p>
        </form>
      </div>

    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage:{
    "input":{
      border:"6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground"
    },
    "textarea": {
      border:"6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground"
    }
  }
}