import React from 'react'
import graphql from 'graphql'

import Index from '../components/IndexPage'

export default (props) => <Index {...props}/>

/**
 * Require data from en markdown
 */
export const pageQuery = graphql `
query IndexPage {
  allContentYaml(
    filter: {
      header: {
        lang: { regex: "/en/" }
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