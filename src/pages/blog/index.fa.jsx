import React from 'react'
import graphql from 'graphql'
import { Grid, Row, Col, getRowProps } from 'react-flexbox-grid'
import Img from 'gatsby-image'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import _ from 'lodash'
import $ from 'jquery'

import SEO from '../../components/SEO'
import { Copy } from '../../components/Elements'
import { Above } from '../../components/Partials'

class PostsViewer extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.postsToShow) var postsToShow = this.props.postsToShow
    this.state = {
      showingMore: postsToShow > 12,
      postsToShow,
      showLoading: false
    }
    this.update = this.update.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight - ( window.scrollY + window.innerHeight )

    if (this.state.showingMore && distanceToBottom < 300) {
      this.setState({
        postsToShow: this.state.postsToShow + 10
      })
    }
    this.ticking = false
  }
  handleScroll() {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('srcoll', this.handleScrol)
  }
  render() {
    const data = this.props.data
    const posts = data.allWordpressPost.edges
    const meta = data.site.siteMetadata.blog.fa
    const rowProps = getRowProps(this.props)
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
        <Row center="xs">
          <Grid className="posts-view">
            {_.chunk(posts.slice(0, this.state.postsToShow), 4)
              .map(chunk =>
                chunk.map(({node}) =>
                  <div className={`${rowProps.className}`} key={node.wordpress_id}>
                    <Col xs={12} md={8} className="post-card">
                      <Img
                        resolutions={data.testImage.resolutions}
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: "100%",
                          height: "100%",
                          zIndex: -1,
                          filter: 'blur(2px)'
                        }}/>
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
                        <Copy className="post-desc" element="p" type="sub" child={node.excerpt.split(/<\/?p[^>]*>/g)[1]} noEscape/>
                      </div>
                    </Col>
                  </div>
                )
              )
            }
            {!this.state.showingMore && (
              <Row>
                <a
                  className="button button-dark"
                  style={{ padding: '15px 30px', marginBottom: '50px' }}
                  onClick={() => {
                    this.setState({
                      postsToShow: this.state.postsToShow + 12,
                      showingMore: true
                    })
                  }}>نمایش بیشتر</a>
              </Row>
            )}
          </Grid>
        </Row>
      </div>
    )
  }
}

// Map redux state to component props
const MapStateToProps = (state) => {
  return {
    postsToShow: state.blogPostsToShow
  }
}

// Connected component
const ConnectedPostsViewer = connect(MapStateToProps, null)(PostsViewer)

export default ConnectedPostsViewer

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
    resolutions {
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
        #       resolutions {
        #         ...GatsbyImageSharpResolutions_noBase64
        #       }
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
