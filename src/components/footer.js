import React from "react"
import Octicon, {LinkExternal} from '@primer/octicons-react'

const Footer = () => (
  <footer
    style={{
      background: `#004F52`
    }}
  >
    <div className='flex-cont'>
      <p style={{marginRight: `1rem`}}>&copy; Patrick Daus {new Date().getFullYear()}</p>
      <p className="right">This site was built with React (Gatsby), <a href="https://github.com/dausp/portfolio-code" target="_blank" rel="noopener noreferrer">see the code on GitHub <Octicon icon={LinkExternal} size='small'/></a>.</p>
    </div>
    <style jsx>
      {`
        .flex-cont {
          margin: 0 auto;
          max-width: 58rem;
          padding: 1.45rem 1rem;
          font-size: 0.875rem;
          justify-content: space-around;
          flex-direction: column;
        }
        p {
          text-align: center;
          color: white;
          margin: 0;
        }
        a {
          color: #FFFFFF;
          background-color: #008D91;
          border-bottom: 1px solid rgba(255,255,255,0.6);
        }
        a:hover, a:focus {
          background-color: #00777c;
          border-bottom-color: #FFF;
        }
        @media only screen and (min-width: 720px) {
          .flex-cont {
            justify-content: space-between;
            flex-direction: row;
          }
          p {
            text-align: left;
          }
          p.right {
            text-align: right;
          }
        }
      `}
      </style>
  </footer>
)

export default Footer