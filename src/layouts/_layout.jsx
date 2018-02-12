import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import Helmet from 'react-helmet'
import { Grid } from 'react-flexbox-grid'
import { getLangs, getUrlForLang, getCurrentLangKey, isHomePage } from 'ptz-i18n'
import 'intl'

import Header from '../components/Header'
import Footer from '../components/Footer'
import style from '../scss/main.useable.scss'
import rtlStyle from '../scss/main.rtl.useable.scss'

import 'normalize'
import '../scss/font-awesome.scss'

const TemplateWrapper = (props) => {
    const { children, data, location, i18nMessages } = props
    const siteMetadata = data.site.siteMetadata
    const { langs, defaultLangKey } = siteMetadata.languages
    const url = location.pathname
    const isHome = isHomePage(url)
    const langKey = getCurrentLangKey(langs, defaultLangKey, url)
    const homeLink = `/${langKey}/`
    const menuLang = getLangs(langs, langKey, getUrlForLang(homeLink, url))
    const menu = {
      top: siteMetadata.menu[0].header,
      bottom: siteMetadata.menu[1].footer
    }
    const social = siteMetadata.socials[Object.keys(siteMetadata.socials)[0]]
    // Load webpack style-loader useable in development
    if (process.env.NODE_ENV === `development`) {
      if (langKey == 'fa') {
        rtlStyle.use()
      } else {
        style.use()
      }
    }
    return (
    <IntlProvider
        locale={langKey}
        messages={i18nMessages}>
      <Grid fluid>
        {/* Header component */}
        <Header
          lang={langKey}
          isHome={isHome}
          homeLink={homeLink}
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

export default TemplateWrapper
