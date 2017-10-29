import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { getLangs, getUrlForLang, getCurrentLangKey, isHomePage } from 'ptz-i18n'
import Modernizr from 'modernizr'
import 'intl'

import Header from '../components/Header'
import '../scss/main.scss'
import 'normalize'

const TemplateWrapper = (props) => {
    const { children, data, location } = props
    const siteMetadata = data.site.siteMetadata
    const { langs, defaultLangKey } = siteMetadata.languages
    const url = location.pathname
    const isHome = isHomePage(url)
    const langKey = getCurrentLangKey(langs, defaultLangKey, url)
    const homeLink = `/${langKey}/`
    const menuLang = getLangs(langs, langKey, getUrlForLang(homeLink, url))
    const headerMenu = siteMetadata.menu[0].head
    return (
    <IntlProvider
        locale={langKey}
        messages={props.lang}>
      <div>
      {/* Header component */}
        <Header
          lang={langKey}
          isHome={isHome}
          homeLink={homeLink}
          menu={headerMenu}
          url={url}/>

        {/* Body component */}
        <div className="container">
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
