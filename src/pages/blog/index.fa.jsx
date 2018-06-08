import React from 'react'
import graphql from 'graphql'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Img from 'gatsby-image'
import { FormattedMessage } from 'react-intl';

import SEO from '../../components/SEO'
import { Copy } from '../../components/Elements'
import { Above } from '../../components/Partials'

class BlogFaPage extends React.Component {
  render() {
    const data = this.props.data
    const meta = data.site.siteMetadata.blog.fa
    return (
      <div>
        <SEO pagePath="fa" title={meta.title} generalDesc={meta.description}/>
        <Above compact center="xs">
            <FormattedMessage id="blog.title">
              {title => <Col xs={12}><Copy element="h1" type="header" child={title}/></Col>}
            </FormattedMessage>
            <FormattedMessage id="blog.desc">
              {desc => <Col xs={12}><Copy element="h2" type="subheader" child={desc}/></Col>}
            </FormattedMessage>
        </Above>
        <Grid>
          {data.allWordpressPost.edges.map(({node}) =>
            <Row className="blog-post" key={node.wordpress_id}>
              <Col xs={12} md={8} className="post-card">
                {/* <img src={node.featured_media} /> */}
                <div className="post-card-image">
                  <Img
                  resolutions={data.testImage.resolutions}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%"
                   }}/>
                </div>
                <div className="post-card-content">
                  <Copy className="post-title" element="h1" type="subheader" child={node.title} noEscape/>
                  <Copy className="post-desc" element="p" type="sub" child={node.excerpt} noEscape/>
                </div>
              </Col>
            </Row>
          )}
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
  testImage: imageSharp( id: { regex: "/product-flexible-en/" } ) {
    resolutions(height: 300) {
      ...GatsbyImageSharpResolutions_noBase64
    }
  }
  allWordpressPost(filter: {categories: {name: {eq: "وبلاگ"}}}) {
    edges {
      node {
        wordpress_id
        #featured_media {
        #  source_url
        #  localFile {
        #    childImageSharp {
        #      
        #    }
        #  }
        #}
        title
        excerpt
      }
    }
  }
}
`
