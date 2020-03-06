import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Octicon, {Home, FileCode, FileDirectory, Mention} from '@primer/octicons-react'

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `58rem`,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          // #008D91
          // #004F52 prev
          // #00CAD1
          // #00D6DE
          // #00B3B8
        >
          {siteTitle}
        </Link>
      </h1>
      <Link to="/" className="header-link">
        Home
        <Octicon icon={Home} size='small'/>
      </Link>
      {/* <Link to="/work/" className="header-link">
        Work
        <Octicon icon={FileCode} size='small'/>
      </Link> */}
      <Link to="/resume/" className="header-link">
        Resume
        <Octicon icon={FileDirectory} size='small'/>
      </Link>
      <Link to="/contact/" className="header-link">
        Contact
        <Octicon icon={Mention} size='small'/>
      </Link>
    </div>
    <style jsx>{`
      header {
        background: #004F52;
        margin-bottom: 1.45rem;
      }
    `}</style>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
