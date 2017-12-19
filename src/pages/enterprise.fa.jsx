import React from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

import SEO from '../components/SEO'

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
          <section className="double-divided">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-12 col-sm-6 double-divided-col">
                  <h1 className="double-divided-col-header content-head">{node.body.header}</h1>
                  <ul className="double-divided-col-body">
                    {node.body.list.header}
                    {node.body.list.items.map(item =>
                      <li key={item}>{item}</li>
                    )}
                  </ul>
                </div>
                <div className="col-12 col-sm-6 double-divided-col hasBackground"></div>
              </div>
            </div>
          </section>
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