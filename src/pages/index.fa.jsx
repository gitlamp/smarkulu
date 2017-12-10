import React from 'react'
import graphql from 'graphql'

import Index from '../components/IndexPage'

export default (props) => <Index {...props}/>

/**
 * Require data from fa markdown
 */
export const pageQuery = graphql `
  query IndexFaPage {
    allContentYaml(
      filter: {
        header: {
          lang: { regex: "/fa/" }
          slug: { regex: "/\/$/ig" }
        }
      }
    ){
      edges {
        node {
          id
          header {
            title
            desc
          }
        }
      }
    }
  }
`