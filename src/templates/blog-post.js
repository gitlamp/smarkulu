import React from 'react'
import graphql from 'graphql'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Img from 'gatsby-image'
import { Popper, Manager, Target } from 'react-popper'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl';

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { Above } from '../components/Partials'
import { toPersianDigits } from '../components/functions'

class BlogPost extends React.Component {
  constructor(){
    super()
    this.toggleAuthorDesc = this.toggleAuthorDesc.bind(this)
    this.state = {
      showAuthorDesc: false
    }
  }
  toggleAuthorDesc() {
    this.setState(prevStat => ({
      showAuthorDesc: !prevStat.showAuthorDesc
    }))
  }
  render() {
    const data = this.props.data
    const post = this.props.data.wordpressPost
    const popularPosts = this.props.data.allWordpressWordpressPopularPostsPopularPosts
    const postCategory = 'وبلاگ'
    return(
      <div className="blog-post">
        <SEO pagePath="fa" title={post.title} generalDesc={post.yoast.metakeywords} />
        <Above className="skewed-bottom" center="xs" hasGradient normal>
          <Img
            sizes={data.testImage.sizes}
            outerWrapperClassName="post-image-overlay"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: "-2",
            }}
            fadeIn/>
          <Grid>
            <Copy className="post-title" element="h1" type="header" child={post.title} noEscape/>
          </Grid>
        </Above>
        <Row tagName="section" center="xs">
          <Col sm={3} className="blog-side">
            <div className="side-post">
              <Copy className="side-post-header" element="h3" type="sub" child="پست‌های پربازدید"/>
              <ul>
                {popularPosts.edges.map(({node}, i) =>
                  <li className="popular-post" key={i}>
                    <Img
                      sizes={data.testImage.sizes}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: "-2",
                        filter: "blur(1px)"
                      }}
                      fadeIn
                      />
                    <div className="popular-post-number">
                      <span>{toPersianDigits(i+1)}</span>
                    </div>
                    <Link to={`/fa/${postCategory}/${node.slug}`} className="popular-post-title">
                      <h4>{node.title}</h4>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </Col>
          <Col xs={10} sm={8} smOffset={1} className="post-body">
            <div className="post-publication">
              <Manager className="post-author">
                <Target
                  className="avatar"
                  onMouseEnter={this.toggleAuthorDesc}
                  onMouseLeave={this.toggleAuthorDesc}>
                  <img src={post.author.avatar_urls.wordpress_96}/>
                </Target>
                {this.state.showAuthorDesc && post.author.description && <Popper
                  className="description"
                  placement="right"
                  modifiers={{
                    flip: {
                      behavior: ['right','bottom']
                    },
                    offset: {
                      enabled: true,
                      offset: '0,15',
                    }
                  }}>
                  {post.author.description}
                </Popper>}
              </Manager>
              <Copy element="h3" type="sub" child={post.author.name}/>
              <span className="post-publish-date">{post.date}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }}/>
            <FormattedMessage id="blog.tag.title">
              {tagLabel => (
                <ul className="blog-tags-wrapper">
                  <li><h3>{`${tagLabel}:`}</h3></li>
                  {post.tags && post.tags.map((tag, i) =>
                    <li key={i}>
                      <i className="fa fa-hashtag" aria-hidden="true"></i>
                      <Link to={`/fa/blog/tags/${tag.name}`}>{tag.name}</Link>
                      <span>{toPersianDigits(tag.count)}</span>
                    </li>
                  )}
                </ul>
              )}
            </FormattedMessage>
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
      wordpress_id
      title
      content
      date(formatString: "D[, ]MMMM[, ]YYYY",locale: "fa")
      yoast {
        metakeywords
      }
      #featured_media {
      # localFile {
      #   childImageSharp {
      #     sizes {
      #       ...GatsbyImageSharpSizes_noBase64
      #     }
      #   }
      # }
      #}
      tags {
        name
        count
      }
      author {
        name
        description
        avatar_urls {
          wordpress_96
        }
      }
    }
    testImage: imageSharp(id: { regex: "/product-flexible-en/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    allWordpressWordpressPopularPostsPopularPosts(filter: {categories: {eq: 66 }}) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`