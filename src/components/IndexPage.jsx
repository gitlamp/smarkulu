import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

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
      <SEO 
        title={node.frontmatter.title}
        generalDesc={node.frontmatter.desc}
        pageLink={node.frontmatter.link}/>
      <h1>{node.frontmatter.title}</h1>
      <span>{node.frontmatter.desc}</span>
      <p>{node.excerpt}</p>
      <FormattedMessage id="btn.seeMore">
        {(txt) => (
          <Link to={generateLink('404')}>{txt}</Link>
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