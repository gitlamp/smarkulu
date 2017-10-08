import React from 'react'
import Index from '../components/IndexPage'
import graphql from 'graphql'

export default (props) => <Index {...props}/>

/**
 * Require data from en markdown
 */
export const pageQuery = graphql `
  query IndexPage {
    allMarkdownRemark(
      filter: {
        fields: { langKey: { regex: "/(en|any)/" } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            desc
            link
          }
          excerpt
        }
      }
    }
  }
`