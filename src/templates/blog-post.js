import React from 'react'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import Input from '../components/Input'
import { Copy, CTA } from '../components/Elements'
import { Above, Logos } from '../components/Partials'

class BlogPost extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log('will mount')
  }
  render() {
    const post = this.props.data.wordpressPost
    return(
      <div>
      <h1><div dangerouslySetInnerHTML={{__html: post.title}} /></h1>
      <div dangerouslySetInnerHTML={{__html: post.content}} />
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
    }
  }
`
