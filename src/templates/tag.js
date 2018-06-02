import React from 'react'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { Above } from '../components/Partials'

class BlogFaPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.data
    const langKey = this.props.pathContext.langKey
    const tag = this.props.pathContext.id
    const tagTitle = `پست‌های وبلاگ تسکولو با تگ ${tag}`
    return (
      <div>
      <SEO pagePath={langKey} title={tagTitle} generalDesc={tagTitle} />
        <Above compact>
          <Copy element="h1" type="header" child={tagTitle} />
        </Above>
        <Grid>
          <Row>
            {data.allWordpressPost.edges.map(({node}) =>
              <div key={node.id}>
              <Col>
              <img src={node.featured_media} />
              <Copy element="h1" type="subheader" child={node.title} />
              <Copy element="p" type="content" child={node.excerpt} />
              </Col>
              </div>
            )}
        </Row>
        </Grid>
      </div>)
  }
}

export default BlogFaPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query TagFaPage {
  allWordpressPost(filter: {categories: {name: {eq: "وبلاگ"}}}) {
    edges {
      node {
        featured_media {
          source_url
        }
        title
        excerpt
        tags {
          name
        }
      }
    }
  }
}
`
