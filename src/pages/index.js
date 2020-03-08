import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Pat Daus's Portfolio website" />
    <h2>About Me</h2>
    <p>Hi, my name is Patrick Daus and I'm a software developer in the Madison, Wiconsin area specializing in UI development with React and other web technologies.</p>
    <p>Here you'll find some examples of the work I've done over the years as a web developer. You can also take a look at my <Link to="/resume/">Resum&eacute;</Link>, and if you're looking for a React developer with expert knowledge of web accessibility then feel free to <Link to="/contact/">get in touch</Link>.</p>

    <h2>Portfolio</h2>
    <p>Here you can see some examples of my most recent work.</p>
    <div className="flex-cont">
      <section>
        <h3>
          <img src={'/ascendium.png'} alt="" />
          <a href="https://www.ascendiumphilanthropy.org/" target="_blank" rel="noopener noreferrer">Ascendium Philanthropy</a>
        </h3>
        <p>I was the lead develop on this project back when it was called Community Investments.</p>
      </section>
      <section>
        <h3>
          <img src={'/mgl.png'} alt="" />
          <a href="https://mygreatlakes.org/" target="_blank" rel="noopener noreferrer">mygreatlakes.org</a>
        </h3>
        <p>Knowledge Center articles</p>
      </section>
      <section>
        <img src={'/about.png'} alt="" />
        <h3><a href="https://home.mygreatlakes.org/" target="_blank" rel="noopener noreferrer">About Portal</a></h3>
        <p>Assisted</p>
      </section>
      <section>
        <img src={'/financial.png'} alt="" />
        <h3><a href="https://schools.mygreatlakes.org/web/FAP/index.html" target="_blank" rel="noopener noreferrer">Financial Aid Professionals</a></h3>
        <p>Assisted</p>
      </section>
      {/* <section>
        <h3>ServUI</h3>
        <p>Not publicly available</p>
      </section>
      <section>
        <img src={'/fastchoice.png'} alt="" />
        <h3>FASTChoice</h3>
        <p>Not publicly available</p>
      </section> */}
    </div>
    <style jsx>{`
      .flex-cont {
        justify-content: space-around;
      }
      .flex-cont > section {
        width: 18rem;
        padding: 1rem;
        margin: 0 1rem 1rem;
        background: #F9F9F9;
        border-radius: 0.2rem;
        // color: #FFF;
      }
      section img {
        margin: -1rem -1rem 1rem;
        max-width: 18rem;
      }
      @media only screen and (min-width: 420px) {
        .flex-cont > section {
          width: 25rem;
          padding: 2rem;
        }
        section img {
          max-width: 25rem;
          margin: -2rem -2rem 1rem;
        }
      }
    `}</style>
  </Layout>
)

export default IndexPage