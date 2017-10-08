import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'isomorphic-fetch'
import graphql from 'graphql'
import { addLocaleData, IntlProvider } from 'react-intl'

import en from 'react-intl/locale-data/en'
import fa from 'react-intl/locale-data/fa'
import getLangs from '../data/langs'
import Header from '../components/Header'

import '../scss/main.scss'

addLocaleData([...en, ...fa])

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)
    const { children, data } = props
    const siteMetadata = data.site.siteMetadata
    // Set initial state
    this.state = {
      resStat: false,
      countryCode: 'IR',
      title: siteMetadata.title,
      description: siteMetadata.description
    }
  }
  componentDidMount() {
    /**
     * Checking geo location
     */
    let url = 'https://freegeoip.net/json/'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          resStat: true,
          countryCode: responseJson.country_code
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
  render() {
    let resStat = this.state.resStat
    let countryCode = this.state.countryCode

    if(!resStat) {
      return <Loading />
    } else {

      // Set proper lang key
      if(countryCode == 'IR') {
        var langKey = 'fa'
      } else {
        var langKey = 'en'
      } 
      return (
      <IntlProvider
          locale={langKey}
          messages={getLangs(langKey)}
        >
        <div>
          <Helmet>
            {/* html attributes */}
            <html lang={langKey} />
            {/* title attributes and value */}
            <title>{this.state.title}</title>
            {/* meta elements */}
            <meta name="description" content={this.state.description}/>
            <meta name="robots" content=""/>
            <meta name="revisit-after" content=""/>
          </Helmet>

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
        description
        languages {
          langs
          defaultLangKey
        }
      }
    }
  }
`