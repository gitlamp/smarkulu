import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { Row, Col, getRowProps } from 'react-flexbox-grid'
import $ from 'jquery'
import { TweenLite, Cubic, Power0 } from 'gsap'

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
      <Col xs>
        {(this.state.width <= 768)
        ? <MobileMenu menu={this.props.menu.bottom} langKey={this.state.langKey}/>
        : <DesktopMenu menu={this.props.menu.top} langKey={this.state.langKey}/>
        }
      </Col>
    )
  }
}

class DesktopMenu extends React.Component {
  getMenuItems (menu, langKey) {
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
        <li key={item.label} className="header-menu-item">
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
        <li className="header-menu-item header-menu-login">
          <FormattedMessage id="btn.login">
            {(txt) =>
              <a className="button button-normal" href={`${process.env.LOGIN_LINK}` + this.props.langKey}>{txt}</a>
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
  getMenuItems (menu, langKey) {
    const getMenuItems = (items => {
      return items.map(item => {
        const slug = (langKey == 'en') ? `${item.slug}` : `/${langKey}${item.slug}`
        return (
          <li key={item.label} data-obj="item">
            <FormattedMessage id={item.label}>
            {(label) =>
              <Link to={slug} onClick={this.toggle}>{label}</Link>
            }
            </FormattedMessage>
          </li>
        )
      })
    })

    return menu.map(list => {
      const items = getMenuItems(list.items)
      return (
        <ul key={list.label} className="header-menu-mobile-list">
          {items}
        </ul>
      )
    })
  }
  // Trigging mobile menu
  toggle() {
    let menu = $('.header-menu-mobile')
    let icon = $('.header-menu-mobile-icon')
    let child = menu.find(`[data-obj='item']`)
    $('html, body').toggleClass('no-scroll')
    icon.toggleClass('enabled')
    let isOpen = icon.hasClass('enabled')
    child.hide()
    menu.fadeToggle(() => {
      if (isOpen) {
        $.each(child, (i, v) => {
          setTimeout(() => {
            $(v).show()
            // Check layout's direction then animate
            if (this.props.langKey !== 'fa') {
              TweenLite.from(v, .5, {opacity: 0, ease: Cubic.ease})
            } else {
              TweenLite.from(v, .5, {opacity: 0, ease: Cubic.ease})
            }
          }, 50 * i)
        })
      }
    })
  }
  render() {
    const rowProps = getRowProps(this.props)
    const tempMenu = this.props.menu.slice(0, 1)
    const menuItems = this.getMenuItems(tempMenu, this.props.langKey)
    return (
      <nav className={`header-menu ${rowProps.className}`}>
        <button className="header-menu-mobile-icon" onClick={this.toggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Col className="header-menu-mobile" xs>
          <Row center="xs">
            <div className="header-menu-mobile-block" data-obj="item">
              <FormattedMessage id="btn.login.and.register">
                {(txt) =>
                  <a data-obj="item" className="button button-white" href={`${process.env.LOGIN_LINK}` + this.props.langKey} data-obj="item">{txt}</a>
                }
              </FormattedMessage>
            </div>
            <div className="header-menu-mobile-block">
              {menuItems}
            </div>
            <div data-obj="item" className="header-menu-mobile-block">
              <a className="header-menu-mobile-download-app" href="https://itunes.apple.com/us/app/taskulu/id1129696826?mt=8" target="_blank">
                <img src="/logos/download_apple_store.svg" alt=""/>
              </a>
              <a className="header-menu-mobile-download-app" href="https://play.google.com/store/apps/details?id=com.taskulu.app" target="_blank">
                <img src="/logos/download_google_play.svg" alt=""/>
              </a>
            </div>
          </Row>
        </Col>
      </nav>
    )
  }
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired,
  intl: intlShape.isRequired
}

export default injectIntl(Menu)