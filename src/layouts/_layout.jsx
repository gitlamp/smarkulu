import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import { IntlProvider } from 'react-intl'
import { getLangs, getUrlForLang, getCurrentLangKey, isHomePage } from 'ptz-i18n'
import Modernizr from 'modernizr'
import 'intl'

import Header from '../components/Header'
import Footer from '../components/Footer'
import style from '../scss/main.useable.scss'
import rtlStyle from '../scss/main.rtl.useable.scss'
import '../scss/bootstrap.scss'
import 'normalize'
import '../scss/font-awesome.scss'

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
    const footerMenu = siteMetadata.menu[1].foot
    const social = siteMetadata.socials[Object.keys(siteMetadata.socials)[0]]
    // Use style proper with langKey
    if (langKey == 'fa') {
      rtlStyle.use()
    } else {
      style.use()
    }
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
        {children()}

        {/* Footer component */}
        <Footer menu={footerMenu} social={social}/>
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
