import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import { addLocaleData, IntlProvider } from 'react-intl'

import en from 'react-intl/locale-data/en'
import fa from 'react-intl/locale-data/fa'
import getLangs from '../data/langs'
import Header from '../components/Header'

import '../scss/main.scss'

addLocaleData([...en, ...fa])

class TemplateWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      countryCode: 'IR'
    }
  }
  componentDidMount() {
    let url = 'https://freegeoip.net/json/'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          countryCode: responseJson.country_code
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
  render() {
    if(this.state.countryCode !== 'IR') {
      var langKey = 'en'
    } else {
      var langKey = 'fa'
    }
    return (
      <IntlProvider
          locale={langKey}
          messages={getLangs(langKey)}
        >
        <div>
          <Helmet 
            htmlAttributes={{
              'lang': langKey
            }} />
          <Header locale={langKey} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {this.props.children()}
          </div>
        </div>
      </IntlProvider>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper