import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl';

import { genLink } from './functions'

/**
 * Class to insert a Header and props for
 * inerting text, html tag and styles
 */
class Copy extends React.Component {
  constructor() {
    super()
    this.state = {
      class: ''
    }
  }
  componentWillMount() {
    if (this.props.className) {
      this.setState({
        class: ' ' + this.props.className
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    const prevClass = this.props.className
    const nextClass = nextProps.className
    if (prevClass !== nextClass) {
      this.setState({
        class: ' ' + nextClass
      })
    }
  }
  render() {
    const align = this.props.align ? ({textAlign: this.props.align}) : null
    return React.createElement(
      // Type of html tag
      this.props.element,
      // All props defined on element
    {
      className: 'content-' + this.props.type + this.state.class,
      style: align
    },
      // Pass the children inside element
      this.props.child || this.props.children
    )
  }
}

class CTA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      href: this.props.href
    }
  }
  componentWillMount() {
    if (this.props.type == 'login') {
      this.setState({
        href: `${process.env.LOGIN_LINK}` + this.props.langKey
      })
    }
    if (this.props.type == 'internal') {
      this.setState({
        href: genLink(this.props.langKey, this.props.href)
      })
    }
    if (this.props.type == 'external') {
      this.setState({
        href: this.props.href
      })
    }
  }
  render() {
    return (
      <FormattedMessage id={this.props.name}>
        {(txt) =>
          <a className={"btn button " + this.props.className} href={this.state.href}>{txt}</a>
        }
      </FormattedMessage>
    )
  }
}

class Img extends React.Component {
  render() {
    return(
      <img src={this.props.src} alt={this.props.alt} width={this.props.width} />
    )
  }
}

Copy.propTypes = {
  child: PropTypes.string,
  type: PropTypes.string.isRequired,
  element: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['center', 'right', 'left'])
}

CTA.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  type: PropTypes.oneOf(['internal', 'external', 'login']).isRequired,
  langKey: PropTypes.string.isRequired
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default { Copy, CTA, Img }
