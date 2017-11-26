import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

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
  getSocialItems = (social) => {
    return social.map(item => {
      return (
        <a className="footer-social-icon" href={item.link} key={item.link}>
          <i className={item.icon} aria-hidden="true"></i>
        </a>
      )
    })
  }
  render() {
    const langKey = this.props.intl.locale
    const menuItems = this.getMenuItems(this.props.menu, langKey)
    const socialItems = this.getSocialItems(this.props.social)
    return (
      <div className="container-fluid footer">
        <div className="row footer-row">
          {/* Render footer menu */}
          {menuItems}
          {/* Render socials */}
          <div className="row w-100">
            <div className="col-md-6 col-xl-6">
              <FormattedMessage id="social.follow"/>
              <br/>
              {socialItems}
            </div>
            <div className="col-md-6 col-xl-6 footer-download">
              <a className="footer-download-app" href="https://play.google.com/store/apps/details?id=com.taskulu.app" target="_blank">
                <img src="/logos/download_google_play.png" alt=""/>
              </a>
              <a className="footer-download-app" href="https://itunes.apple.com/us/app/taskulu/id1129696826?mt=8" target="_blank">
                <img src="/logos/download_apple_store.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="row footer-end">
          <FormattedMessage id="footer.terms">
          {(txt) =>
          <a href="#">{txt}</a>
          }
          </FormattedMessage>
          <span>Copyright	&copy; 2017 Taskulu</span>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  menu: PropTypes.array.isRequired,
  social: PropTypes.array.isRequired,
  intl: intlShape.isRequired
}

export default injectIntl(Footer)