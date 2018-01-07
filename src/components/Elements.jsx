import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

/**
* Class to insert a Header and props for
* inerting text, html tag and styles
 */

class Copy extends React.Component {
  constructor() {
    super()
  }
  render() {

    return React.createElement(this.props.element,
                               {className: 'header'},
                               this.props.copy)
  }
}

class Cta extends React.Component {}

class Img extends React.Component {}






Copy.propTypes = {
  copy: PropTypes.string,
  type: PropTypes.oneOf(['header', 'subheader', 'description']),
  element: PropTypes.string,
  custom: PropTypes.object
  /**
  * custom styles {background, color, font, size, margin, padding}
  */
}

export default { Copy, Cta, Img }
