import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl';

import { genLink } from './functions'

/**
 * Class to insert a Header and props for
 * inerting text, html tag and styles
 */
class Copy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'content-' + this.props.type + ' '
    }
  }
  componentWillMount() {
    if (this.props.className) {
      this.setState({
        class: ' ' + this.props.className
      })
    }
  }
  render() {
    const align = this.props.align ? ({textAlign: this.props.align}) : null
    let element = ''
    // In case of dangerouslySetInnerHTML
    if(this.props.noEscape) {
      element = React.createElement(
        this.props.element,
        {
          className: this.state.type + this.props.className,
          style: align,
          dangerouslySetInnerHTML: {__html: this.props.child}
        }
      )
    } else {
      element = React.createElement(
        this.props.element,
        {
          className: this.state.type + this.props.className,
          style: align
        },
        this.props.child || this.props.children
      )
    }
    return element
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
          <a className={"button " + this.props.className} href={this.state.href}>{txt}</a>
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
