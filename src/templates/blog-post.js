import React from 'react'
import graphql from 'graphql'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Img from 'gatsby-image'
import { Popper, Manager, Target } from 'react-popper'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard'
import { FacebookIcon,
         LinkedinIcon,
         TelegramIcon,
         TwitterIcon,
         WhatsappIcon,
         FacebookShareButton,
         LinkedinShareButton,
         TelegramShareButton,
         TwitterShareButton,
         WhatsappShareButton
        } from 'react-share'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { Above } from '../components/Partials'
import { toPersianDigits } from '../components/functions'


class BlogPost extends React.Component {
  constructor(){
    super()
    this.toggleAuthorDesc = this.toggleAuthorDesc.bind(this)
    this.toggleShareButtons = this.toggleShareButtons.bind(this)
    this.state = {
      showAuthorDesc: false
    }
  }
  toggleAuthorDesc() {
    this.setState(prevStat => ({
      showAuthorDesc: !prevStat.showAuthorDesc
    }))
  }
  toggleShareButtons() {
    const currentScroll = window.scrollY,
          screenHeight = window.innerHeight,
          footerPostion = $('.footer').offset().top
    if (currentScroll > 600 && ((currentScroll + screenHeight) < footerPostion) ) {
      $('.share-button-wrapper').fadeIn(150)
    } else {
      $('.share-button-wrapper').fadeOut(150)
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.toggleShareButtons)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleShareButtons)
  }
  render() {
    const post = this.props.data.wordpressPost,
          popularPosts = this.props.data.allWordpressWordpressPopularPostsPopularPosts,
          postCategory = 'وبلاگ',
          shareButtonStyle = {
            size: 40,
            round: true,
            logoFillColor: '#34495e',
            iconBgStyle: {
              opacity: 0,
            }
          },
          noIMGSource = this.props.data.noImg.sizes
    let postImageSrc

    try {
      if (post.featured_media.localFile) {
        postImageSrc = post.featured_media.localFile.childImageSharp.sizes
      }
    } catch (e) {
      e.preventDefault
      console.error(`There is a problem with image source of post with ${post.wordpress_id} ID`)
    }

    return (
      <div className="blog-post">
        <SEO pagePath="fa" title={post.title} generalDesc={post.yoast.metakeywords} />
        <Above className="skewed-bottom" center="xs" hasGradient normal>
          <Img
            sizes={postImageSrc ? postImageSrc : noIMGSource}
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
          <Col md={3} className="blog-side">
            {/* <div className="side-post">
                <Copy className="side-post-header" element="h3" type="sub" child="پست‌های پربازدید"/>
                <ul>
                {popularPosts.edges.map(({node}, i) =>
                <li className="popular-post" key={i}>
                <div className="popular-post-number">
                <span>{toPersianDigits(i+1)}</span>
                </div>
                <Link to={`/fa/${postCategory}/${node.slug}`} className="popular-post-title">
                <h4>{node.title}</h4>
                </Link>
                </li>
                )}
                </ul>
                </div> */}
          </Col>
          <Col xs={10} md={8} mdOffset={1} className="post-body">
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

            <TalkyardCommentsIframe discussionId={post.wordpress_id}/>

            <ul className="share-button-wrapper">
              <li>
                <TwitterShareButton url={post.link} title={post.title}>
                  <TwitterIcon {...shareButtonStyle}/>
                </TwitterShareButton>
                <LinkedinShareButton
                  url={post.link}
                  title={post.title}
                  description={post.yoast.metakeywords}>
                  <LinkedinIcon {...shareButtonStyle}/>
                </LinkedinShareButton>
                <FacebookShareButton url={post.link}>
                  <FacebookIcon {...shareButtonStyle}/>
                </FacebookShareButton>
                <TelegramShareButton url={post.link} title={post.title}>
                  <TelegramIcon {...shareButtonStyle}/>
                </TelegramShareButton>
                <WhatsappShareButton url={post.link} title={post.title}>
                  <WhatsappIcon {...shareButtonStyle}>
                  </WhatsappIcon>
                </WhatsappShareButton>
              </li>
            </ul>
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
      link
      date(formatString: "D[, ]MMMM[, ]YYYY",locale: "fa")
      yoast {
        title
        metakeywords
      }
      featured_media {
        source_url
        localFile {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
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
    noImg: imageSharp( id: { regex: "/no-image/" } ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`
