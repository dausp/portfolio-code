import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Octicon, {Home, FileCode, FileDirectory, Mention} from '@primer/octicons-react'

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex-cont" style={{ alignItems: `center` }}>
      <h1 style={{ margin: 0 }}>
        <Link to="/"style={{ textDecoration: `none` }}>
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <Link to="/" activeClassName="active">
          {/* <Octicon icon={Home} size='small'/> {``} */}
          Home
        </Link>
        {/* <Link to="/work/">
          Work
          <Octicon icon={FileCode} size='small'/>
        </Link> */}
        <Link to="/resume/" activeClassName="active">
          {/* <Octicon icon={FileDirectory} size='small'/> {``} */}
          Resume
        </Link>
        <Link to="/contact/" activeClassName="active">
          {/* <Octicon icon={Mention} size='small'/> {``} */}
          Contact
        </Link>
      </nav>
    </div>
    <style jsx>{`
      header {
        background: #004F52;
        margin-bottom: 1.45rem;
      }
      header > div {
        margin: 0 auto;
        max-width: 58rem;
        padding: 1.45rem 1rem;
      }
      header h1 {
        width: 50%;
      }
      header nav {
        text-align: right;
        width: 50%;
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
