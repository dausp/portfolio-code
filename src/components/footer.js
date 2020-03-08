import React from "react"
import Octicon, {LinkExternal} from '@primer/octicons-react'

const Footer = () => (
  <footer
    style={{
      background: `#004F52`
    }}
  >
    <div
        style={{
          margin: `0 auto`,
          maxWidth: `58rem`,
          padding: `1.45rem 1rem`,
        }}
        // #008D91 - rgba(0, 141, 145, 1.0)
        // #004F52 - rgba(0, 79, 82, 1.0)
        // #00CAD1 - rgba(0, 202, 209, 1.0)
        // #00D6DE - rgba(0, 214, 222, 1.0)
        // #00B3B8 - rgba(0, 179, 184, 1.0)
      >
      <p
        style={{
          color: `white`,
          margin: `0`
        }}
      >
        &copy; Patrick Daus {new Date().getFullYear()}. Built with React (Gatsby), <a href="https://github.com/dausp/portfolio-code" target="_blank" rel="noopener noreferrer">see the code on GitHub<Octicon icon={LinkExternal} size='small' ariaLabel='GitHub'/></a>.</p>
    </div>
    <style jsx>
      {`
        a {
          color: #FFFFFF;
        }
      `}
      </style>
  </footer>
)

export default Footer