import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { injectIntl, FormattedMessage } from 'react-intl'
import { genLink } from './functions'

class Menu extends React.Component {
  getMenuItems = (menu, langKey) => {
    return menu.map(item => {
      const slug = (langKey == 'en') ? `${item.slug}` : `/${langKey}${item.slug}`

      // Check if each item has items
      const subItems = item.items
      ? (
        <ul style={{display: 'none'}}>
          {this.getMenuItems(item.items, langKey)}
        </ul>
      )
      : null

      // Render all menu items
      return (
        <li key={item.label}>
          <FormattedMessage id={item.label}>
          {(label) =>
            <Link to={slug}>{label}</Link>
          }
          </FormattedMessage>
          {subItems}
        </li>
      )
    })
  }
  render() {
    const langKey = this.props.intl.locale
    const menuItems = this.getMenuItems(this.props.menu, langKey)
    return(
      <nav className="col header-menu">
        <li className="header-menu-login">
          <FormattedMessage id="btn.login">
            {(txt) =>
              <a className="btn button button-normal" href={`${process.env.LOGIN_LINK}` + langKey}>{txt}</a>
            }
          </FormattedMessage>
        </li>
        {menuItems}
      </nav>
    )
  }
}

Menu.propTypes = {
  menu: PropTypes.array.isRequired,
}

export default injectIntl(Menu)