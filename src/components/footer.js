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
          padding: `1.45rem 0`,
        }}
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