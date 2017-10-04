import React from 'react'
import Index from '../components/IndexPage'
import graphql from 'graphql'

export default (props) => <Index {...props}/>

/**
 * Require data from fa markdown
 */
export const pageQuery = graphql `
  query IndexFaPage {
    allMarkdownRemark(
      filter: {
        fields: { langKey: { regex: "/(fa)/" } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`