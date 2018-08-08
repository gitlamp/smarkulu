import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { TweenLite } from 'gsap'
import { Col, getRowProps } from 'react-flexbox-grid'
import { connect } from 'react-redux'

import { hiddenHeaderPath as hiddenOnPaths } from '../data/noMenuPath.js'
import Menu from './Menu'
import { genLink } from './functions'

const fixedHeaderPos = 600

class HeaderWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      mobileScreen: false
    }
    this.setWidth = this.setWidth.bind(this)
  }
  componentWillMount() {
    // Check if the header should be hidden
    hiddenOnPaths.forEach(path => {
      if (this.props.url == path) {
        this.props.hideHeader()
      }
    })
    // Check screen width and set state
    this.setWidth()
  }
  componentDidMount() {
    window.addEventListener('resize', this.setWidth)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setWidth)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      let targetPath
      hiddenOnPaths.forEach((path) => {
        if (nextProps.url == path) targetPath = true
      })
      if (targetPath) {
        this.props.hideHeader()
      } else {
        this.props.showHeader()
      }
    }
  }
  setWidth() {
    if (typeof window !== 'undefined') {
      const width = window.screen.width
      if (width <= 768) {
        this.setState({
          mobileScreen: true
        })
      } else {
        this.setState({
          mobileScreen: false
        })
      }
    }
  }
  render() {
    return (
      <div>
        <FixedHeader mobileScreen={this.state.mobileScreen} {...this.props}/>
        {(!this.state.mobileScreen) ? <Header {...this.props}/> : null}
      </div>
    )
  }
}

const Header = (props) => {
  const rowProps = getRowProps(props)

  return (
    <div className={rowProps.className + ' header header-' + props.type}>
      {/* Logo */}
      <Col className="header-logo-wrapper" xs>
        <Logo lang={props.lang} color={props.type}/>
      </Col>
      {/* Navigation */}
      {props.visibility ? <Menu menu={props.menu} url={props.url}/> : null}
    </div>
  )
}

class FixedHeader extends React.Component {
  constructor() {
    super()
    if (typeof window !== 'undefined') {
      var scrollPos = window.scrollY
    }
    // Set initial scroll state
    this.state = {
      currentScrollPos: scrollPos
    }
    this.checkScrollPos = this.checkScrollPos.bind(this)
  }
  componentDidMount() {
    if (!this.props.mobileScreen) {
      window.addEventListener('scroll', this.checkScrollPos)
    } else {
      TweenLite.to(this.fixedHeader, .2, {top: '0'})
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollPos)
  }
  checkScrollPos() {
    if (typeof window !== 'undefined') {
      // Identify scroll position
      this.setState({
        currentScrollPos: window.scrollY
      })
    }

    const currentScrollPos = this.state.currentScrollPos
    if (currentScrollPos <= fixedHeaderPos) {
      TweenLite.to(this.fixedHeader, 1, {top: '-200'})
    } else {
      TweenLite.to(this.fixedHeader, .2, {top: '0'})
    }
  }
  componentWillReceiveProps(nextProps) {
    // Set scroll position if route changed
    if (this.props.url !== nextProps.url) {
      this.setState({
        currentScrollPos: window.scrollY
      })
    }
    // if screen size changed then fix header and remove checkScrollPos
    if (nextProps.mobileScreen) {
      TweenLite.to(this.fixedHeader, .2, {top: '0'})
      window.removeEventListener('scroll', this.checkScrollPos)
    }
    // if screen size changed to desktop size then do checkScrollPos
    else {
      this.checkScrollPos()
      window.addEventListener('scroll', this.checkScrollPos)
    }
  }
  render() {
    const rowProps = getRowProps(this.props)
    return (
      <div className={ rowProps.className + ' header-fixed header-blue' } ref={node => this.fixedHeader = node}>
        {/* Logo */}
        <Col className="header-logo-wrapper" xs>
          <Logo lang={this.props.lang} color="blue"/>
        </Col>
        {/* Navigation */}
      {this.props.visibility ?
       <Menu menu={this.props.menu} url={this.props.url}/> : null}
      </div>
    )
  }
}

class Logo extends React.Component {
  render() {
    const defineColor = (prop) => {
      switch (prop) {
        case 'white':
        case 'blue':
          return prop;
        case 'mixed-1':
          return 'blue'
        case 'mixed-2':
          return 'white'
      }
    }
    return (
      <Link to={genLink(this.props.lang, '/')}>
      {(this.props.lang !== 'fa')
        ? <img className="header-logo" src={'/logos/logo-' + defineColor(this.props.color) + '.svg'} alt={this.props.color + 'logo'}/>
        : <img className="header-logo" src={'/logos/fa-logo-' + defineColor(this.props.color) + '.svg'} alt={this.props.color + 'logo'}/>
      }
      </Link>
    )
  }
}

HeaderWrapper.PropTypes = {
  lang: PropTypes.string.isRequired,
  menu: PropTypes.object.isRequired,
  url: PropTypes.string
}

// Map redux state to component props
const mapStateToProps = (state) => {
  return {
    visibility: state.headerVisibility,
    type: state.headerType
  }
}

// Map redux action to component props
const mapDispatchToProps = dispatch => {
  return {
    hideHeader: () => dispatch({ type: 'invisibleHeader' }),
    showHeader: () => dispatch({ type: 'visibleHeader' })
  }
}

// Connected component
const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper)

export { ConnectedHeader }
