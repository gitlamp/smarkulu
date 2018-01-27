import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { TweenLite } from 'gsap'

import Menu from './Menu'
import { genLink } from './functions'

class Header extends React.Component {
  constructor() {
    super()
    if (typeof window !== `undefined`) {
      var scrollPos = window.scrollY
    }
    // Set initial scroll state and screen height
    this.state = {
      currentScrollPos: scrollPos,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
  handleScroll() {
    if (typeof window !== `undefined`) {
      const headWrap = this.headWrap.firstElementChild
      const headNav = document.getElementsByClassName('header-menu')
      const logo = this.logo
      // Change state if scroll
      window.onscroll = () => {
        this.setState({
          currentScrollPos: window.scrollY
        })

        const currentScrollPos = this.state.currentScrollPos

        if (currentScrollPos !== 0) {
          TweenLite.to(headWrap, .3, {css: {paddingTop: '1rem', paddingBottom: '1rem', background: 'rgba(255,255,255,.9)', boxShadow: '0 5px 20px 0 rgba(36,50,66,.1)'}})
          TweenLite.to(headNav, .2, {fontSize: '1.4rem'})
          TweenLite.to(logo, .1, {maxWidth: '13rem', immediateRender: true, lazy: true})
        }
        if (currentScrollPos == 0) {
          TweenLite.to(headWrap, .2, {css: {paddingTop: '2rem', paddingBottom: '2rem'}})
          TweenLite.to(headNav, .2, {fontSize: '1.6rem'})
          TweenLite.to(logo, .1, {maxWidth: '15rem', immediateRender: true, lazy: true})
          TweenLite.to(headWrap, .1, {background: 'none', boxShadow: 'none'})
        }
      }
    }
  }
  render() {
    return (
      <div className="container-fluid header" onScroll={this.handleScroll} ref={node => this.headWrap = node}>
        <div className="row header-row">
          {/* Logo */}
          <div className="col header-logo-wrapper">
            <Link to={genLink(this.props.lang, '/')}>
            {(this.props.lang !== 'fa')
              ? <img className="header-logo" src="/logos/logo-blue.svg" alt="blue logo" ref={node => this.logo = node}/>
              : <img className="header-logo" src="/logos/fa-logo-blue.svg" alt="blue logo" ref={node => this.logo = node}/>
            }
            </Link>
          </div>
          {/* Navigation */}
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