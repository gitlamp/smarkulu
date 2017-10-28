import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { injectIntl, FormattedMessage } from 'react-intl'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    const { data } = props
  }
  getMenuItems = (menu, langKey) => {
    return menu.map(item => {
      const slug = (langKey == 'en') ? `${item.slug}` : `/${langKey}${item.slug}`
      const subItems = item.items
      ? (
        <ul style={{display: 'none'}}>
          {this.getMenuItems(item.items, langKey)}
        </ul>
      )
      : null

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
    const menuItems = this.getMenuItems(this.props.menu, this.props.intl.locale)
    return(
      <nav className="siteHeader">
        {menuItems}
      </nav>
    )
  }
}

Menu.propTypes = {
  menu: PropTypes.array.isRequired,
}

export default injectIntl(Menu)