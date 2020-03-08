/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className='padded site-content'>
        <main>{children}</main>
      </div>
      <Footer />
      <style jsx>
      {`
        .site-content {
          flex: 1;
        }
        .padded {
          max-width: 58rem;
          padding: 0 1.0875rem 1.45rem;
        }
        @media only screen and (min-width: 600px) {
          .site-content {
            margin: 0 auto;
          }
        }
      `}
      </style>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
