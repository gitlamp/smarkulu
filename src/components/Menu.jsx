import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { genLink } from './functions'
import $ from 'jquery'
import { TweenLite } from 'gsap';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      langKey: this.props.intl.locale
    }
  }
  componentWillMount() {
    if (typeof window !== `undefined`) {
      // Set initial width
      this.setState({
        width: $(window).width()
      })
      // Change width if screen changed
      $(window).resize(() => {
        this.setState({
          width: $(window).width()
        })
      })
    }
  }
  render() {
    return (
      <div className="col">
        {(this.state.width <= 768)
        ? <MobileMenu menu={this.props.menu.bottom} langKey={this.state.langKey}/>
        : <DesktopMenu menu={this.props.menu.top} langKey={this.state.langKey}/>
        }
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
  getMenuItems = (menu, langKey) => {
    const getMenuItems = (items => {
      return items.map(item => {
        const slug = (langKey == 'en') ? `${item.slug}` : `/${langKey}${item.slug}`
        return (
          <li key={item.label}>
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
      const items = getMenuItems(list.items)
      return (
        <ul key={list.label}>
          {items}
        </ul>
      )
    })
  }
  componentWillMount() {
    
  }
  // Trigging mobile menu
  toggle() {
    let menu = $('.header-menu-mobile')
    let icon = $('.header-menu-mobile-icon')
    $('html, body').toggleClass('no-scroll')
    $(icon).toggleClass('enabled')
    $(menu).fadeToggle()
  }
  render() {
    const menuItems = this.getMenuItems(this.props.menu, this.props.langKey)
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
          {menuItems}
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
  menu: PropTypes.object.isRequired,
  intl: intlShape.isRequired
}

export default injectIntl(Menu)