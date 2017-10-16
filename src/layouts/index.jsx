import React from 'react'
import PropTypes from 'prop-types'
import fetch from'isomorphic-fetch'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import { addLocaleData, IntlProvider } from 'react-intl'

import en from 'react-intl/locale-data/en'
import fa from 'react-intl/locale-data/fa'
import getLangs from '../data/langs'
import SEO from '../components/SEO'
import Header from '../components/Header'
import { getlangKey } from '../components/functions'

import '../scss/main.scss'

addLocaleData([...en, ...fa])

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)
    const { children, data } = props
    const siteMetadata = data.site.siteMetadata
    // Set initial state
    this.state = {
      key: false,
      countryCode: '',
      title: siteMetadata.title,
      description: siteMetadata.description
    }
  }
  componentDidMount() {
    /**
     * Checking geo location
     */
    let url = 'https://freegeoip.net/json/'
    fetch(url, {mode: 'cors'})
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          key: true,
          countryCode: responseJson.country_code
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
  render() {
    if(!this.state.key) {
      return <Loading />
    } else {
      // Set proper lang key
      var langKey = getlangKey(this.state.countryCode)
      return (
      <IntlProvider
          locale={langKey}
          messages={getLangs(langKey)}
        >
        <div>
          <SEO
            langKey={langKey}
            title={this.state.title}
            generalDesc={this.state.description}/>
          {/* Header component */}
          <Header locale={langKey} />

          {/* Body component */}
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

          {/* Footer component */}
        </div>
      </IntlProvider>
      )
    }
  }
}

/**
 * Loading for geo locating process
 */
class Loading extends React.Component {
  render() {
    return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <h1>Loading...</h1>
    </div>
  )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default TemplateWrapper

/**
 * Require metadata
 */
export const pageQuery = graphql `
  query Layout {
    site {
      siteMetadata {
        title
        siteUrl
        description
        languages {
          langs
          defaultLangKey
        }
      }
    }
  }
`