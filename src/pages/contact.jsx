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
                {node.body.contact.map((item, i) =>
                  <li className="double-divided-col-item" key={i}>
                    <Copy type="title" element="h2" child={item.header}/>
                    <Copy type="sub" element="p" child={item.body}/>
                  </li>
                )}
              </ul>
            </Col>
            <Col xs={12} sm={6} lg={8} className="double-divided-col contact">
              <div className="centered">
                <Copy type="content" element="h3" child={node.body.support.subheader}/>
                <Copy type="header" element="p" child={node.body.support.header}/>
              </div>
            </Col>
          </Row>
          <Row column className="block-cta" style={{alignItems: "center"}} tagName="section" center="xs">
            <Col xs={12} lg={6}>
              <Copy type="subheader" element="h2" child={node.body.demo.header}/>
            </Col>
            <Col xs={12} lg={6}>
              <Copy type="announce-white" element="p" child={node.body.demo.body}/>
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
            subheader
            header
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
