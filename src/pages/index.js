import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Pat Daus's Portfolio website" />
    <h2>About Me</h2>
    <p>Hi, my name is Patrick Daus and I'm a software developer in the Madison, Wiconsin area specializing in UI development using React and other web technologies.</p>
    <p>Here you'll find some examples of the work I've done over the years as a web developer. You can also take a look at my <Link to="/resume/">Resum&eacute;</Link>, and if you're looking for a React developer with expert knowledge of web accessibility then feel free to <Link to="/contact/">get in touch</Link>.</p>

    <h3>My Work</h3>
    <p>Here you can see some examples of my most recent work.</p>
    <div className="flex-cont">
      <section>ServUI</section>
      <section><a href="https://www.ascendiumphilanthropy.org/">Ascendium Philanthropy</a> (was Community Investments)</section>
      <section><a href="https://mygreatlakes.org/">mygreatlakes.org</a> Knowledge Center articles</section>
      <section>FASTChoice</section>
      <section>About Portal</section>
      <section>Financial Aid Prof Portal</section>
    </div>
    <style jsx>{`
      .flex-cont {
        justify-content: space-around;
      }
      .flex-cont > section {
        width: 20rem;
        padding: 2rem;
      }
    `}</style>
  </Layout>
)

export default IndexPage