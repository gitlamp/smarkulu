import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Row, Col } from 'react-flexbox-grid'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

import { genLink } from '../components/functions'

class Footer extends React.Component {
  getMenuItems (menu, langKey) {

    const getSubItems = (items => {
      return items.map(item => {
        let slug = (langKey == 'en' || item.slug.includes('taskulu.com')) ? `${item.slug}` : `/${langKey}${item.slug}`
        return (
          <li className="footer-list-item" key={item.label}>
          <FormattedMessage id={item.label}>
          {(label) =>
            (!slug.includes('taskulu.com'))
            ? <Link to={slug}>{label}</Link>
            : <a href={ 'http://' + slug + ((langKey == 'en') ? '/' : '/fa')}>{label}</a>
          }
          </FormattedMessage>
          </li>
        )
      })
    })

    return menu.map((list, i) => {

      // Check if each label has items
      const items = list.items
      ? (
        getSubItems(list.items)
      )
      : null

      // Render label and its items
      return (
        <ul className="footer-list" key={i}>
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
  getSocialItems (social) {
    return social.map((item, i) => {
      return (
        <a className="footer-social-icon" href={item.link} key={i}>
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
      <Row className="footer">
        <Col xs={10} className="footer-row">
          {/* Render footer menu */}
          <Row>
          {menuItems}
          </Row>
          {/* Render socials */}
          <Row>
            <Col md={6} lg={6}>
              <FormattedMessage id="social.follow"/>
              <br/>
              {socialItems}
            </Col>
            <Col md={6} lg={6} className="footer-download">
              <a className="footer-download-app" href="https://play.google.com/store/apps/details?id=com.taskulu.app" target="_blank">
                <img src="/logos/download_google_play.svg" alt=""/>
              </a>
              <a className="footer-download-app" href="https://itunes.apple.com/us/app/taskulu/id1129696826?mt=8" target="_blank">
                <img src="/logos/download_apple_store.svg" alt=""/>
              </a>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="footer-end">
          <Row center="xs" start="lg">
            <FormattedMessage id="footer.terms">
            {(txt) =>
            <a href={genLink(langKey, '/terms')}>{txt}</a>
            }
            </FormattedMessage>
            <FormattedMessage id="footer.privacy">
            {(txt) =>
            <a href={genLink(langKey, '/privacy')}>{txt}</a>
            }
            </FormattedMessage>
            <span>Copyright	&copy; 2017 Taskulu</span>
          </Row>
        </Col>
      </Row>
    )
  }
}

Footer.propTypes = {
  menu: PropTypes.array.isRequired,
  social: PropTypes.array.isRequired,
  intl: intlShape.isRequired
}

export default injectIntl(Footer)