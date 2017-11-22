import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

class Input extends React.Component {
  render() {
    return (
      <form action="" className="goregister" dir="ltr">
      <input type="email" required placeholder={this.props.placeholder}/>
      <FormattedMessage id="btn.register">
        {(txt) => (
          <button className="btn button button-submit">{txt}</button>
        )}
      </FormattedMessage>
      </form>
    )
  }
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired
}

export default Input