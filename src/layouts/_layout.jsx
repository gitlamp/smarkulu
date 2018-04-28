import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { Grid } from 'react-flexbox-grid'
import { getCurrentLangKey } from 'ptz-i18n'
import { connect } from 'react-redux'
import 'intl'

import { ConnectedHeader as Header } from '../components/Header'
import Footer from '../components/Footer'
import style from '../scss/main.useable.scss'
import rtlStyle from '../scss/main.rtl.useable.scss'

import 'normalize'
import '../scss/font-awesome.scss'
import '../scss/taskulu-icon.css'

const TemplateWrapper = (props) => {
    const { children, data, location, i18nMessages, dispatch } = props
    const siteMetadata = data.site.siteMetadata
    const { langs, defaultLangKey } = siteMetadata.languages
    const url = location.pathname
    const langKey = getCurrentLangKey(langs, defaultLangKey, url)
    const menu = {
      top: siteMetadata.menu.header,
      bottom: siteMetadata.menu.footer[Object.keys(siteMetadata.menu.footer)[0]]
    }
    const social = siteMetadata.socials[Object.keys(siteMetadata.socials)[0]]

    // Set global lang state
    function setGlobalLang(langKey) {
      if (langKey) {
        const lang = langKey[0].toUpperCase() + langKey[1]
        dispatch({
          type: `setLangTo${lang}`
        })
      } else {
        throw new Error(`'langKey' has not been set`)
      }
    }

    // Load webpack style-loader useable in development
    if (process.env.NODE_ENV === `development`) {
      if (langKey == 'fa') {
        rtlStyle.use()
      } else {
        style.use()
      }
    }

    try {
      setGlobalLang(langKey)
    } catch(e) {
      /*eslint no-console: "off"*/
      console.error(e)
    }

    return (
    <IntlProvider
        locale={langKey}
        messages={i18nMessages}>
      <Grid fluid>
        {/* Header component */}
        <Header
          lang={langKey}
          menu={menu}
          url={url}/>

        {/* Body component */}
        {children()}

        {/* Footer component */}
        <Footer menu={menu.bottom} social={social}/>
      </Grid>
    </IntlProvider>
    )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  i18nMessages: PropTypes.object.isRequired
}

// Map redux state to component props
const mapStateToProps = (state) => {
  return {
    lang: state.lang
  }
}

const ConnectedTemplateWrapper = connect(mapStateToProps, null)(TemplateWrapper)

export default ConnectedTemplateWrapper