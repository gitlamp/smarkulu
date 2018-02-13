import React, { Component } from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Section } from '../components/Section'
import { Copy, CTA } from '../components/Elements'

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
            <Row tagName="section" className="double-divided">
              <Col xs={12} sm={6} lg={4} className="double-divided-col hasBackground">
                <ul className="double-divided-col-list">
                  {node.body.contact.map((item, i) =>
                    <li className="double-divided-col-item" key={i}>
                      <Copy type="header" element="h2" child={item.header}/>
                      <Copy type="body" element="p" child={item.body}/>
                    </li>
                  )}
                </ul>
              </Col>
              <Col xs={12} sm={6} lg={8} className="double-divided-col">
                <div className="centered">
                  <Copy type="header" element="h3" child={node.body.support.header}/>
                  <Copy type="body" element="p" child={node.body.support.body}/>
                </div>
              </Col>
            </Row>
            <Row tagName="section" center="xs">
              <Col xs={12} lg={8}>
                <Copy type="header" element="h2" child={node.body.demo.header}/>
                <Copy type="body" element="p" child={node.body.demo.body}/>
                <CTA className="button-submit" name="link.learnmore" href="#" type="internal" langKey={langKey}/>
              </Col>
            </Row>
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