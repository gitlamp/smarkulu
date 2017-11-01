import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

import Menu from './Menu'
import { genLink } from './functions'

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid header">
        <div className="row header-row">
          {/* Logo */}
          <Link to={genLink(this.props.lang, '/')}>
            <img className="col header-logo" src="logos/fa-logo-blue.svg" alt="blue logo"/>
          </Link>
          {/* Navigation */}
          <Menu menu={this.props.menu} url={this.props.url}/>
        </div>
      </div>
    )
  }
}

Header.PropTypes = {
  lang: PropTypes.string.isRequired,
  menu: PropTypes.object.isRequired,
  url: PropTypes.string
}

export default Header