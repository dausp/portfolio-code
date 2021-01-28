import React from "react"
import Octicon, {FilePdf} from '@primer/octicons-react'
import Layout from "../components/layout"
import SEO from "../components/seo"

import Experience from "../components/resume/experience"
import Education from "../components/resume/education"
import Skills from "../components/resume/skills"
import Awards from "../components/resume/awards"

const Resume = () => (
  <Layout>
    <SEO title="Pat Daus's Resume" />
    <h2>Resum&eacute;</h2>
    <p>Below you'll find a responsive HTML version of my Resum&eacute;.</p>
    <p>
      You can also <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">download a PDF version of my resum&eacute;.</a>
      {` `}
      <span style={{ color: `#d60a0b` }}>
        <Octicon icon={FilePdf} size='small'/>
      </span>
    </p>
    <article>
      <header className="flex-cont">
        <div style={{ marginRight: `2rem` }}>
          <h3>Patrick M. Daus <span style={{ display: `block`, fontSize: `1.5rem`, fontWeight: `500` }}>Web Developer</span></h3>
        </div>
        <div>
          <p style={{ fontSize: `0.85rem` }}>
            Wausau, WI area<br />
            daus.pat@gmail.com<br />
            dausp.github.io</p>
        </div>
      </header>
      <div className="flex-cont">
        <div className="exp-cont">
          <Experience />
        </div>
        <div className="else-cont">
          <Education />
          <Skills />
          <Awards />
        </div>
      </div>
      <p style={{
        textAlign: `center`,
        margin: `1rem 0 -1rem`
      }}>
        <em>References available upon request.</em>
      </p>
    </article>
    <style jsx>{`
      article {
        background: #F8F8F8;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
      }
      h3 {
        margin: 0;
        font-size: 2rem;
      }
      header {
        margin: 0 0 2rem;
      }
      header.flex-cont {
        justify-content: space-between;
      }
      .exp-cont {
        width: 100%;
      }
      .else-cont {
        width 100%;
      }
      header > div:first {
        width: 70%;
      }
      @media only screen and (min-width: 720px) {
        article {
          padding: 5rem;
        }
        .exp-cont {
          width: 70%;
        }
        .else-cont {
          width 30%;
          padding-left: 2rem;
        }
      }
    `}</style>
  </Layout>
)

export default Resume
