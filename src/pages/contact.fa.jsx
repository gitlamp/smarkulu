import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'
import { connect } from 'react-redux'

import SEO from '../components/SEO'
import { Copy, CTA } from '../components/Elements'

const Contact = (props) => {
  const { data } = props
  const langKey = props.pathContext.langKey
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
              <Col xs={12} sm={6} lg={8} className="double-divided-col">
                <div className="centered">
                  <Copy type="header" element="h3" child={node.body.support.header}/>
                  <Copy type="content" element="p" child={node.body.support.body}/>
                </div>
              </Col>
            </Row>
            <Row tagName="section" center="xs">
              <Col xs={12} lg={8}>
                <Copy type="header" element="h2" child={node.body.demo.header}/>
                <Copy type="content" element="p" child={node.body.demo.body}/>
                <CTA className="button-blue" name="link.learnmore" href="/enterprise" type="internal" langKey={langKey}/>
              </Col>
            </Row>
        </div>
    )}
    </div>
  )
}

// Connected component
const ConnectedContact = connect(null, dispatch => dispatch({ type: 'mixedHeader2' }))(Contact)

export default ConnectedContact

/**
 * Require data from fa yaml
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