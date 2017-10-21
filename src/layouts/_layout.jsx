import React from 'react'
import PropTypes from 'prop-types'
import { addLocaleData, IntlProvider } from 'react-intl'
import { getLangs, getUrlForLang, getCurrentLangKey, isHomePage } from 'ptz-i18n'
import 'intl'

import Header from '../components/Header'

import '../scss/main.scss'

const TemplateWrapper = (props) => {
    const { children, data, location } = props
    const siteMetadata = data.site.siteMetadata
    const { langs, defaultLangKey } = siteMetadata.languages
    const url = location.pathname
    const isHome = isHomePage(url)
    const langKey = getCurrentLangKey(langs, defaultLangKey, url)
    const homeLink = `/${langKey}/`
    const menuLang = getLangs(langs, langKey, getUrlForLang(homeLink, url))

    return (
    <IntlProvider
        locale={langKey}
        messages={props.lang}>
      <div>
        {/* Header component */}
        <Header lang={langKey} />

        {/* Body component */}
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children()}
        </div>

        {/* Footer component */}
      </div>
    </IntlProvider>
    )
  }

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  lang: PropTypes.object.isRequired
}

export default TemplateWrapper
