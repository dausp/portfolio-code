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
    <p>Check out my Resum&eacute;, dawg</p>
    <p><a href="">Download a PDF of it bro</a></p>
    <article>
      <header>
        <div>
          <h3>Patrick M. Daus</h3>
          <p>Senior Software Developer | Accessibility Consultant</p>
        </div>
        <div>
          <p>Madison, WI area</p>
          <p>daus.pat@gmail.com</p>
          <p>dausp.github.com</p>
        </div>
      </header>
      <div>
        <Experience />
      </div>
      <div>
        <Education />
        <Skills />
        <Awards />
      </div>
    </article>
    <style jsx>{`
      article {
        background: #f9f9f9;
        padding: 4rem;
      }
    `}</style>
  </Layout>
)

export default Resume
