import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { genLink } from './functions'
import $ from 'jquery'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      langKey: this.props.intl.locale
    }
  }
  render() {
    return (
      <div className="col">
        <MobileMenu langKey={this.state.langKey}/>
        {/* <DesktopMenu menu={this.props.menu} langKey={this.state.langKey}/> */}
      </div>
    )
  }
}

class DesktopMenu extends React.Component {
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
    const menuItems = this.getMenuItems(this.props.menu, this.props.langKey)
    return(
      <nav className="header-menu">
        <li className="header-menu-login">
          <FormattedMessage id="btn.login">
            {(txt) =>
              <a className="btn button button-normal" href={`${process.env.LOGIN_LINK}` + this.props.langKey}>{txt}</a>
            }
          </FormattedMessage>
        </li>
        {menuItems}
      </nav>
    )
  }
}

class MobileMenu extends React.Component {
  constructor() {
    super()
    this.toggle = this.toggle.bind(this)
  }
  // Trigging mobile menu
  toggle() {
    let menu = $('.header-menu-mobile')
    let icon = $('.header-menu-mobile-icon')
    $(icon).toggleClass('enabled')
    $('html, body').toggleClass('no-scroll')
    $(menu).fadeToggle()
  }
  render() {
    return (
      <nav className="header-menu">
        <button className="header-menu-mobile-icon" onClick={this.toggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="header-menu-mobile">
          <div className="row">
            <FormattedMessage id="btn.login.and.register">
              {(txt) =>
                <a className="btn button button-white" href={`${process.env.LOGIN_LINK}` + this.props.langKey}>{txt}</a>
              }
            </FormattedMessage>
          </div>
          <div className="header-menu-mobile-list">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
            </ul>
          </div>
          <div className="row">
            <a className="header-menu-mobile-download-app" href="https://itunes.apple.com/us/app/taskulu/id1129696826?mt=8" target="_blank">
              <img src="/logos/download_apple_store.png" alt=""/>
            </a>
            <a className="header-menu-mobile-download-app" href="https://play.google.com/store/apps/details?id=com.taskulu.app" target="_blank">
              <img src="/logos/download_google_play.png" alt=""/>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

Menu.propTypes = {
  menu: PropTypes.array.isRequired,
  intl: intlShape.isRequired
}

export default injectIntl(Menu)