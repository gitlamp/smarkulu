import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
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
                  <li className="double-divided-col-item">
                    <Copy type="header" element="h3" child="Lorem ipsum dolor sit amet."/>
                    <Copy type="body" element="p" child="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, quod?"/>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} lg={8} className="double-divided-col">
                <div className="centered">
                  <Copy type="header" element="h3" child="Lorem ipsum dolor sit amet."/>
                  <Copy type="body" element="p" child="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, quod?"/>
                </div>
              </Col>
            </Row>
            <Row tagName="section" center="xs">
              <Col xs={12} lg={8}>
                <Copy type="header" element="h2" child="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, cupiditate."/>
                <Copy type="body" element="p" child="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sapiente iure quaerat, architecto ex at sunt sit distinctio optio et!"/>
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
export const contactQuery = graphql `
query ContactPage {
  allContentYaml(
    filter: {
      header: {
        lang: { eq: "en" }
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