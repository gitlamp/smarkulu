import React from 'react'
import Index from '../components/IndexPage'
import graphql from 'graphql'

export default (props) => <Index {...props}/>

/**
 * Require data from en markdown
 */
export const pageQuery = graphql `
  query IndexPage {
    allContentYaml(
      filter: {
        header: { lang: { regex: "/(en)/" } }
      }
    ){
      edges {
        node {
          id
          header {
            title
            desc
          }
          body {
            h1
            desc
          }
        }
      }
    }
  }
`