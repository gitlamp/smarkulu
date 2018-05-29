import React from 'react'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Helmet from 'react-helmet'
import $ from 'jquery'
import { TweenLite } from 'gsap'

import SEO from '../components/SEO'
import Input from '../components/Input'
import { Copy, CTA, Img } from '../components/Elements'
import { TwoColumn, Above, Logos } from '../components/Partials'

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
      <Helmet title={tagTitle} />
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
  site {
    siteMetadata {
      blogTitle
      blogHeader
      blogDesc
    }
  }
}
`
