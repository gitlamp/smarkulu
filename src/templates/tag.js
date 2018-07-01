import React from 'react'
import graphql from 'graphql'
import { Grid } from 'react-flexbox-grid'
import Link from 'gatsby-link'
import { connect } from 'react-redux'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { toPersianDigits } from '../components/functions'

const Tag = ({ pathContext, data }) => {
  const { count, name } = pathContext
  const postNumber = toPersianDigits(count)
  const tagTitle = postNumber + ' پست با تگ ' + name
  return (
    <Grid>
      <SEO pagePath="fa" title={`پست‌های تسکولو با تگ ${name}`} generalDesc={tagTitle} />
      <div className="blog-tags-post-related">
        <Copy element="h1" type="header" child={tagTitle} />
        <ul>
          {data.allWordpressPost && data.allWordpressPost.edges.map(({node}) =>
            <li key={node.wordpress_id}>
              {node.categories.map((cat, i) =>
              <Link to={`/fa/${cat.name}/${node.slug}`} key={i}>
                <h4 dangerouslySetInnerHTML={{ __html: node.title }}/>
              </Link>
              )}
            </li>
          )}
        </ul>
      </div>
    </Grid>
  )
}

// Connected component
const ConnectedTag = connect(null, dispatch => dispatch({ type: 'blueHeader' }))(Tag)

export default ConnectedTag

/**
 * Require tag data
 */
export const pageQuery = graphql `
query TagPage($id: String) {
  allWordpressPost(filter: {tags: {id: {eq: $id}}}) {
    edges {
      node {
        wordpress_id
        title
        slug
        categories {
          name
        }
      }
    }
  }
}
`
