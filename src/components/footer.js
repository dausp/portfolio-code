import React from "react"
import ExtLink from "../components/ext-link"

const Footer = () => (
  <footer
    style={{
      background: `#004F52`
    }}
  >
    <div className='flex-cont'>
      <p style={{marginRight: `1rem`}}>&copy; Patrick Daus {new Date().getFullYear()}</p>
      <p className="right">
        This site was built with React (Gatsby), {` `}
        <ExtLink title="see the code on GitHub">
          https://github.com/dausp/portfolio-code
        </ExtLink>
      </p>
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