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
    <p>Here you can see examples of my work</p>
    <ul>
      <li>ServUI</li>
      <li><a href="https://www.ascendiumphilanthropy.org/">Ascendium Philanthropy</a> (was Community Investments)</li>
      {/* <li><a href="https://home.mygreatlakes.org/web/about/index">About</a></li>
      <li><a href="https://schools.mygreatlakes.org/web/FAP/index.html">Financial Aid Professionals</a></li> */}
      <li><a href="https://mygreatlakes.org/">mygreatlakes.org</a> Knowledge Center articles</li>
      <li>FASTChoice</li>
      <li>Video/API thing</li>
    </ul>
  </Layout>
)

export default IndexPage