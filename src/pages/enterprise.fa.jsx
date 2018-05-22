import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'
import { connect } from 'react-redux'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'

const Enterprise = (props) => {
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
          <Row className="double-divided">
            <Col xs={12} sm={6} className="double-divided-col noBackground">
              <div className="double-divided-col-header">
                <Copy type="sub" element="h3" child={node.body.subheader}/>
                <Copy type="header" element="h1" child={node.body.header}/>
              </div>
                <ul className="double-divided-col-body">
                  {node.body.list.header}
                  {node.body.list.items.map((item, i) =>
                    <li key={i}>{item}</li>
                  )}
                </ul>
            </Col>
            <Col xs={12} sm={6} className="double-divided-col hasBackground">
              <div className="form-wrapper">
                <div className="form-banner">{node.body.form.banner}</div>
                <script type="text/javascript" src="//m.taskulu.com/form/generate.js?id=11"></script>
              </div>
            </Col>
          </Row>
              </div>
      )}
        </div>
  )
}

// Connected component
const ConnectedEnterprise = connect(null, dispatch => dispatch({ type: 'mixedHeader1' }))(Enterprise)

export default ConnectedEnterprise

/**
 * Require data from fa yaml
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
          subheader
          list {
            header
            items
          }
          form {
            banner
          }
        }
      }
    }
  }
}
`
