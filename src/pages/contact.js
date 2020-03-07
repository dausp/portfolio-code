import React from "react"
import Octicon, {LinkExternal, Mail} from '@primer/octicons-react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact information" />
    <h2>Contact Info</h2>
    <p>If you are interested in getting in touch about any projects that you think I could help with, please feel free to either contact me on LinkedIn or send me an email.</p>
    <p>Connect with or message me on LinkedIn: {` `}
      <a href="https://www.linkedin.com/in/patrick-daus-53491322/" target="_blank" rel="noopener noreferrer">
        LinkedIn <Octicon icon={LinkExternal} size='small'/>
      </a>
    </p>
    <p>Feel free to <a href="mailto:daus.pat@gmail.com" target="_blank" rel="noopener noreferrer">send me an email <Octicon icon={Mail} size='small'/></a> (daus.pat@gmail.com).
    </p>
  </Layout>
)

export default Contact
