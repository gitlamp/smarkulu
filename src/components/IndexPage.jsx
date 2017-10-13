import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'
import Helmet from 'react-helmet'

import SEO from './SEO'

const Index = (props) => {
  const { data } = props
  const { slug } = props.pathContext
  const generateLink = (link) => {
    return slug + link
  }

  return (
  <div>
    {data.allMarkdownRemark.edges.map(({node}) =>
      <div key={node.id}>
      <h1>{node.frontmatter.title}</h1>
      <p>{node.excerpt}</p>
      <FormattedMessage id="btn.seeMore">
        {(txt) => (
          <Link to="/fa">{txt}</Link>
        )}
      </FormattedMessage>
      </div>
    )}
  </div>
  )
}

Index.PropTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired
}

export default Index