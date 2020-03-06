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
          maxWidth: `52rem`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
      <p
        style={{
          color: `white`
        }}
      >
        &copy; Patrick Daus {new Date().getFullYear()}, Built with React (Gatsby), <a href="https://github.com/dausp/portfolio-code" target="_blank" rel="noopener noreferrer">see the code on GitHub<Octicon icon={LinkExternal} size='small' ariaLabel='GitHub'/></a>.</p>
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