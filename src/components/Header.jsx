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
          <div className="col header-logo-wrapper">
            <Link to={genLink(this.props.lang, '/')}>
            {(this.props.lang !== 'fa')
              ? <img className="header-logo" src="/logos/logo-blue.svg" alt="blue logo"/>
              : <img className="header-logo" src="/logos/fa-logo-blue.svg" alt="blue logo"/>
            }
            </Link>
          </div>
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