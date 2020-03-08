import React from "react"
import { Link } from "gatsby"
import Octicon, {LinkExternal} from '@primer/octicons-react'
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
          Ascendium Philanthropy
        </h3>
        <p>I led develop on this project back when it was called Community Investments.</p>
        <p><a href="https://www.ascendiumphilanthropy.org/" target="_blank" rel="noopener noreferrer">See the Ascendium Philanthropy website <Octicon icon={LinkExternal} size='small'/></a></p>
      </section>
      <section>
        <h3>
          <img src={'/mgl.png'} alt="" />
          MGL website
        </h3>
        <p>The main website for borrowers to pay their student loans. Other than <a href="https://mygreatlakes.org/educate/knowledge-center/home.html" target="_blank" rel="noopener noreferrer">the Knowledge Center articles <Octicon icon={LinkExternal} size='small'/></a>, most of the content is post-login.</p>
        <p><a href="https://mygreatlakes.org/" target="_blank" rel="noopener noreferrer">See mygreatlakes.org <Octicon icon={LinkExternal} size='small'/></a></p>
      </section>
      <section>
        <img src={'/about.png'} alt="" />
        <h3>About Portal</h3>
        <p>The About portal for the Great Lakes Corp., which I provided consultation and sometimes maintenenance for the website.</p>
        <p><a href="https://home.mygreatlakes.org/" target="_blank" rel="noopener noreferrer"> See the About Portal <Octicon icon={LinkExternal} size='small'/></a></p>
      </section>
      <section>
        <img src={'/financial.png'} alt="" />
        <h3>Financial Aid Professionals</h3>
        <p>The Financial Aid Professionals portal for the Great Lakes Corp., which I provided consultation and sometimes maintenenance for the website.</p>
        <p><a href="https://schools.mygreatlakes.org/web/FAP/index.html" target="_blank" rel="noopener noreferrer">See the Financial Aid Professionals portal <Octicon icon={LinkExternal} size='small'/></a></p>
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
        outline: 1px solid rgba(0,0,0,0.2);
      }
      section img {
        margin: -1rem -1rem 1rem;
        max-width: 18rem;
      }
      @media only screen and (min-width: 460px) {
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