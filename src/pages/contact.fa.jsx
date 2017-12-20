import React from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'

import SEO from '../components/SEO'
import { Section } from '../components/Section'

const Contact = (props) => {
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
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-sm-6 col-xl-4 double-divided-col hasBackground">
                  <ul className="double-divided-col-list">
                    {node.body.contact.map(item =>
                      <li className="double-divided-col-item">
                        <h2 className="content-head">{item.header}</h2>
                        <p className="content-body">{item.body}</p>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-xl-8 double-divided-col">
                  <div className="centered">
                    <h3 className="content-head">{node.body.support.header}</h3>
                    <p className="content-body">{node.body.support.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Section
            style={{ paddingTop: '10rem' }}
            langKey={langKey}
            align="center"
            colClass={{ center: 'col-12 col-sm-12 col-xl-8' }}
            header={node.body.demo.header}
            body={node.body.demo.body}
            cta="btn.contact"/>
        </div>
    )}
    </div>
  )
}

export default Contact

/**
 * Require data from en yaml
 */
export const contactFaQuery = graphql `
query ContactFaPage {
  allContentYaml(
    filter: {
      header: {
        lang: { eq: "fa" }
        slug: { eq: "/contact" }
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
          contact {
            header
            body
          }
          support {
            header
            body
          }
          demo {
            header
            body
          }
        }
      }
    }
  }
}
`