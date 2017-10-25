import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

import Menu from './Menu'
import { genLink } from './functions'

class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          background: '#34495e',
          marginBottom: '1.45rem',
          boxShadow: '0 13px 15px 0 rgba(36,50,66,.2)'
        }}
      >
        <div
          style={{
            display: 'flex',
            margin: '0 auto',
            maxWidth: 1200,
            padding: '1.45rem 1.0875rem',
            flexFlow: 'row nowrap'
          }}
        >
          {/* Logo */}
          <h1 style={{ margin: 0 }}>
            <Link
              to={genLink(this.props.lang, '/')}
              style={{
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <FormattedMessage id="title"></FormattedMessage>
            </Link>
          </h1>
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