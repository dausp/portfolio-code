import React from "react"
import Octicon, { Mail } from '@primer/octicons-react'
import ExtLink from "../components/ext-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Pat Daus's Contact Information" />
    <h2>Contact Info</h2>
    <p>If you are interested in getting in touch about any projects that you think I could help with, please feel free to either contact me on LinkedIn or send me an email.</p>
    <ul>
      <li>
        Connect with or {` `}
        <ExtLink title="message me on LinkedIn">
          https://www.linkedin.com/in/patrick-daus-53491322/
        </ExtLink>
      </li>
      <li>
        Feel free to <a href="mailto:daus.pat@gmail.com">send me an email</a> <Octicon icon={Mail} size='small'/>
      </li>
    </ul>
  </Layout>
)

export default Contact
