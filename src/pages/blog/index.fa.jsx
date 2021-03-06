import React from 'react'
import graphql from 'graphql'
import { Grid, Row, Col, getRowProps } from 'react-flexbox-grid'
import Img from 'gatsby-image'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import _ from 'lodash'

import SEO from '../../components/SEO'
import { Copy, CTA } from '../../components/Elements'
import { Above } from '../../components/Partials'

class PostsViewer extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.postsToShow) var postsToShow = this.props.postsToShow
    this.state = {
      showingMore: postsToShow > 12,
      showLoading: false,
      postsToShow
    }
    this.update = this.update.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  update() {
    const distanceToBottom = document.documentElement.offsetHeight - ( window.scrollY + window.innerHeight )

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
    const data = this.props.data,
          posts = data.allWordpressPost.edges,
          meta = data.site.siteMetadata.blog.fa,
          rowProps = getRowProps(this.props),
          noIMGSource = data.noImg.resolutions
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
                chunk.map(({node}) => {
                  let postImageSrc

                  try {
                    if (node.featured_media.localFile) {
                      postImageSrc = node.featured_media.localFile.childImageSharp.resolutions
                    }
                  } catch (e) {
                    e.preventDefault
                    console.error(`There is a problem with image source of post with ${node.wordpress_id} ID`)
                  }

                  return (
                    <div className={`${rowProps.className}`} key={node.wordpress_id}>
                      <Col xs={12} md={8} className="post-card">
                        <Img
                          resolutions={postImageSrc ? postImageSrc : noIMGSource}
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
                            resolutions={postImageSrc ? postImageSrc : noIMGSource}
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
                          <Copy className="post-desc" element="p" type="sub" child={node.excerpt.split(/<\/?p[^>]*>/g)[1].split(/<\/?a[^>]*>/g)[0]} noEscape/>
                          {node.categories.map(({name}, i) =>
                            <CTA type="internal" href={`/${name}/${node.slug}/`} langKey="fa" className="button-white" name="btn.readMore" key={i}/>
                          )}
                        </div>
                      </Col>
                    </div>
                  )
                })
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
                  }}>?????????? ??????????</a>
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
  allWordpressPost(filter: {categories: {name: {eq: "??????????"}}}) {
    edges {
      node {
        wordpress_id
        title
        excerpt
        slug
        categories {
          name
        }
        featured_media {
          localFile {
            childImageSharp {
               resolutions {
                 ...GatsbyImageSharpResolutions_noBase64
               }
            }
          }
        }
      }
    }
  }
  noImg: imageSharp( id: { regex: "/no-image/" } ) {
    resolutions {
      ...GatsbyImageSharpResolutions_noBase64
    }
  }
}
`
