import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { injectIntl, FormattedMessage } from 'react-intl'

class Footer extends React.Component {
  getMenuItems = (menu, langKey) => {

    const getSubItems = (items => {
      return items.map(item => {
        const slug = (langKey == 'en') ? `${item.slug}` : `/${langKey}${item.slug}`
        return (
          <li className="footer-list-item" key={item.label}>
          <FormattedMessage id={item.label}>
          {(label) =>
            <Link to={slug}>{label}</Link>
          }
          </FormattedMessage>
          </li>
        )
      })
    })

    return menu.map(list => {

      // Check if each label has items
      const items = list.items
      ? (
        getSubItems(list.items)
      )
      : null

      // Render label and its items
      return (
        <ul className="col footer-list" key={list.label}>
          <FormattedMessage id={list.label}>
            {(label) =>
              <li className="footer-list-item">{label}</li>
            }
          </FormattedMessage>
          {items}
        </ul>
      )
    })
  }
  render() {
    const langKey = this.props.intl.locale
    const menuItems = this.getMenuItems(this.props.menu, langKey)
    return(
      <div className="container-fluid footer">
        <div className="row footer-row">
          {menuItems}
          <div className="w-100" style={{marginLeft: '1.45rem'}}>Follow Us On :</div>
        </div>
        <div className="row footer-end">
          <span>Terms & Privacy</span>
          <span>Copyright	&copy; 2017 Taskulu</span>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  menu: PropTypes.array.isRequired,
}

export default injectIntl(Footer)