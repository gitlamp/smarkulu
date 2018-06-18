import React from 'react'
import graphql from 'graphql'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { Above } from '../components/Partials'
import { toPersianDigits } from '../components/functions'

const Tag = ({ pathContext, data }) => {
  const { count, name } = pathContext
  const postNumber = toPersianDigits(count)
  const tagTitle = postNumber + ' پست با تگ ' + name
  return (
    <div>
      <SEO pagePath="fa" title={`پست‌های تسکولو با تگ ${name}`} generalDesc={tagTitle} />
      <Above compact center="xs">
        <Copy element="h1" type="header" child={tagTitle} />
      </Above>
      <Row tagName="section">
        <Grid>
        {data.allWordpressPost && data.allWordpressPost.edges.map(({node}) =>
          <div key={node.wordpress_id}>
            <Col>
              <Copy element="h1" type="subheader" child={node.title} />
              <Copy element="p" type="content" child={node.excerpt} />
            </Col>
          </div>
        )}
        </Grid>
      </Row>
    </div>
  )
}

export default Tag

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
        excerpt
      }
    }
  }
}
`
