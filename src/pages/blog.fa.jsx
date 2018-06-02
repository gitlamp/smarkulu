import React from 'react'
import graphql from 'graphql'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { Above } from '../components/Partials'
import { FormattedMessage } from 'react-intl';

class BlogFaPage extends React.Component {
  constructor() {
    super()
  }
  render() {
    const data = this.props.data
    const langKey = this.props.pathContext.langKey
    const meta = data.site.siteMetadata.blog.fa
    console.log(data)
    return (
      <div>
        <SEO pagePath={langKey} title={meta.title} generalDesc={meta.description}/>
        <Above compact center="xs">
            <FormattedMessage id="blog.title">
              {title => <Col xs={12}><Copy element="h1" type="header" child={title}/></Col>}
            </FormattedMessage>
            <FormattedMessage id="blog.desc">
              {desc => <Col xs={12}><Copy element="h2" type="subheader" child={desc}/></Col>}
            </FormattedMessage>
        </Above>
        <Grid>
          <Row>
            {data.allWordpressPost.edges.map(({node}) =>
              <div key={node.id}>
                <Col>
                  <img src={node.featured_media} />
                  <Copy element="h1" type="subheader" child={node.title} />
                  <Copy element="p" type="content" child={node.excerpt} noEscape/>
                </Col>
              </div>)}
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
query BlogFaPage {
  site {
    siteMetadata {
      blog {
        fa {
          title
          description
        }
      }
    }
  }
  allWordpressPost(filter: {categories: {name: {eq: "وبلاگ"}}}) {
    edges {
      node {
        featured_media {
          source_url
        }
        title
        excerpt
      }
    }
  }
}
`
