import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      email: '',
      apiUrl: props.url
    }
  }
  onChange(e) {
    this.setState({ email: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault()
    fetch(this.state.apiUrl, {
      method: 'POST',
      body: this.state.email,
    }).then(() => {
      console.log('Email sent!')
    }).catch(e => {
      console.error(e)
    })
  }
  render() {
    const placeholder = this.props.intl.formatMessage({id: 'email.placeholder'})
    return (
      <form className="goregister" onSubmit={this.handleSubmit}>
      <input type="email" value={this.state.email} placeholder={placeholder} onChange={this.onChange} required />
      <FormattedMessage id="btn.register">
        {(txt) => (
          <button type="submit" className="button button-submit">{txt}</button>
        )}
      </FormattedMessage>
      </form>
    )
  }
}

Input.propTypes = {
  url: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  intl: intlShape.isRequired
}

export default injectIntl(Input)
