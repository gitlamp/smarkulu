import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

class Input extends React.Component {
  render() {
    const placeholder = this.props.intl.formatMessage({id: 'email.placeholder'})
    return (
      <form dir="ltr" action="" className="goregister">
      <input type="email" required placeholder={placeholder}/>
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
  intl: intlShape.isRequired
}

export default injectIntl(Input)