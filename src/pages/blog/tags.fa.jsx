import React from 'react'
import graphql from 'graphql'
import { Grid } from 'react-flexbox-grid'
import { FormattedMessage } from 'react-intl'
import Link from 'gatsby-link'
import { connect } from 'react-redux'

import { Copy } from '../../components/Elements.jsx'
import { toPersianDigits } from '../../components/functions'
import SEO from '../../components/SEO'

const TagsList = (props) => {
  const { data } = props
  return (
    <Grid>
      <SEO pagePath="fa" title="لیست تگ‌ها" generalDesc="لیست تگ‌های وبلاک تسکولو"/>
      <div className="blog-tags-list">
        <FormattedMessage id="blog.tags.list.title">
          {title => <Copy element="h1" type="header" child={title}/>}
        </FormattedMessage>
        <ul>
          {data.allWordpressTag.edges.map(({node}) =>
            node.count !== 0 &&
            <li key={node.wordpress_id}>
              <Link to={`/fa/blog/tags/${node.name}`}>
                <h4>{node.name}</h4>
                <span>{`(${toPersianDigits(node.count)})`}</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Grid>
  )
}

// Connected component
const ConnectedTagList = connect(null, dispatch => dispatch({ type: 'blueHeader' }))(TagsList)

export default ConnectedTagList

export const pageQuery = graphql `
 query TagsList {
   allWordpressTag {
     edges {
       node {
         wordpress_id
         name
         count
       }
     }
   }
 }
`