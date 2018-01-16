import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

/**
* Class to insert a Header and props for
* inerting text, html tag and styles
 */

class Copy extends React.Component {
  render() {
    let align = this.props.align ? ({textAlign: this.props.align}) : null
    return React.createElement(this.props.element,
                               {className: "content-" + this.props.type,
                               style: align},
                               this.props.copy||this.props.children)
  }
}

class Cta extends React.Component {}

class Img extends React.Component {
  render() {
    return(
      <img src={this.props.src} alt={this.props.alt} />
    )
  }
}

Copy.propTypes = {
  copy: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['header', 'subheader', 'description']).isRequired,
  element: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['center', 'right', 'left'])
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default { Copy, Cta, Img }
