import React from 'react'
import graphql from 'graphql'
import { addLocaleData } from 'react-intl'

import Layout from './_layout'
import lang from '../data/langs/en.json'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'

addLocaleData(en)

export default (props) => (
  <Layout {...props} lang={lang}/>
)

/**
 * Require metadata
 */
export const pageQuery = graphql `
query LayoutAny {
  site {
    siteMetadata {
      title
      siteUrl
      description
      sourceCodeLink
      menu {
        head {
          label
          slug
          items {
            label
            slug
          }
        }
      }
      languages {
        langs
        defaultLangKey
      }
    }
  }
}
`