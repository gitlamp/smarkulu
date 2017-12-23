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
                  <h1 className="double-divided-col-header content-head">Lorem ipsum dolor sit amet consectetur.</h1>
                  <ul className="double-divided-col-body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, vero.
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum dolor.</li>
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
export const enterpriseQuery = graphql `
query EnterprisePage {
  allContentYaml(
    filter: {
      header: {
        lang: { eq: "en" }
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
      }
    }
  }
}
`