import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

import SEO from './SEO'

const Index = (props) => {
  const { data } = props
  const { slug, langKey } = props.pathContext
  const generateLink = (link) => {
    return slug + link
  }

  return (
  <div>
    {data.allContentYaml.edges.map(({node}) =>
      <div key={node.id}>
      <SEO
        pagePath={langKey}
        title={node.header.title}
        generalDesc={node.header.desc}/>
      <h1>{node.body.h1}</h1>
      <p>{node.body.desc}</p>
      <FormattedMessage id="btn.seeMore">
        {(txt) => (
          <Link to="/">{txt}</Link>
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