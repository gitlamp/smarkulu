import React from 'react'
import graphql from 'graphql'
import { addLocaleData } from 'react-intl'

import Layout from './_layout'
import lang from '../data/langs/fa.json'
import fa from 'react-intl/locale-data/fa'
import 'intl/locale-data/jsonp/fa'

addLocaleData(fa)

export default (props) => (
  <Layout {...props} lang={lang}/>
)

/**
 * Require metadata
 */
export const pageQuery = graphql `
query LayoutFa {
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
        foot {
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
      socials {
        fa {
          icon
          link
        }
      }
    }
  }
}
`