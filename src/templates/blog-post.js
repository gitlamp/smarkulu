import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { Above } from '../components/Partials'

class BlogPost extends React.Component {
  constructor() {
    super()
  }
  render() {
    const post = this.props.data.wordpressPost
    return(
      <div>
        <SEO pagePath="fa" title={post.title} generalDesc={post.yoast.metakeywords} />
        <Above normal center="xs">
          <Copy element="h1" type="header" child={post.title}/>
        </Above>
        <Row>
          <Col xs={3}></Col>
          <Col xs={8} xsOffset={1}>
            <Copy element="p" type="content" child={post.content} noEscape/>
            {/* <div dangerouslySetInnerHTML={{__html: post.content}}/> */}
          </Col>
        </Row>
      </div>
    )
  }
}

export default BlogPost

export const postQuery = graphql`
  query currentPostQuery($id: String) {
    wordpressPost(id: { eq: $id}) {
      title
      content
      yoast {
        metakeywords
      }
      #featured_media {
      #  source_url
      #}
      tags {
        name
      }
    }
  }
`
