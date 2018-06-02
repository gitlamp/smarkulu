import React from 'react'
import graphql from 'graphql'

import SEO from '../components/SEO'

class BlogPost extends React.Component {
  constructor() {
    super()
  }
  render() {
    const post = this.props.data.wordpressPost
    const langKey = this.props.pathContext.langKey
    return(
      <div>
      <Helmet title={post.title} />
      <SEO pagePath={langKey} title={post.title} generalDesc={post.yoast.metakeywords} />
      <div dangerouslySetInnerHTML={{__html: `<h1>${post.title}</h1>`}}/>
      <div dangerouslySetInnerHTML={{__html: post.content}}/>
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
      featured_media {
        source_url
      }
      tags {
        name
      }
    }
  }
`
