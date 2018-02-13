import React from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'

const Enterprise = (props) => {
  const { data } = props
  const { slug, langKey } = props.pathContext
  return (
    <div>
      {data.allContentYaml.edges.map(({node}) =>
        <div key={node.id}>
          <SEO
            pagePath={langKey}
            title={node.header.title}
            generalDesc={node.header.desc}/>
            <Row className="double-divided">
              <Col xs={12} sm={6} className="double-divided-col">
                <Copy type="header" element="h1" className="double-divided-col-header" child={node.body.header}/>
                <ul className="double-divided-col-body">
                  {node.body.list.header}
                  {node.body.list.items.map((item, i) =>
                    <li key={i}>{item}</li>
                  )}
                </ul>
              </Col>
              <Col xs={12} sm={6} className="double-divided-col hasBackground"></Col>
            </Row>
        </div>
      )}
    </div>
  )
}

export default Enterprise

/**
 * Require data from en yaml
 */
export const enterpriseFaQuery = graphql `
query EnterpriseFaPage {
  allContentYaml(
    filter: {
      header: {
        lang: { eq: "fa" }
        slug: { eq: "/enterprise" }
      }
    }
  ) {
    edges {
      node {
        id
        header {
          title
          desc
        }
        body {
          header
          list {
            header
            items
          }
        }
      }
    }
  }
}
`