import React from "react"

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
    <p>Check out my Resum&eacute;</p>
    <p><a href="">Download a PDF of it</a></p>
    <article>
      <header className="flex-cont">
        <div style={{ marginRight: `2rem` }}>
          <h3>Patrick M. Daus</h3>
          <p>Senior Software Developer | Accessibility Consultant</p>
        </div>
        <div>
          <p style={{ fontSize: `0.85rem` }}>
            Madison, WI area<br />
            daus.pat@gmail.com<br />
            dausp.github.com</p>
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
        background: #FBFBFB;
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
