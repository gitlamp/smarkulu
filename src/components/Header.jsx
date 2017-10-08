import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          background: 'rebeccapurple',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1200,
            padding: '1.45rem 1.0875rem',
          }}
        >
          {/* Logo */}
          <h1 style={{ margin: 0 }}>
            <Link
              to={'/' + this.props.locale}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <FormattedMessage id="title"></FormattedMessage>
            </Link>
          </h1>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  locale: PropTypes.string.isRequired
}

export default Header