import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'
import { connect } from 'react-redux'

import Form from '../components/Forms2'
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
            <Col xs={12} sm={6} className="double-divided-col">
              <Copy type="header" element="h1" className="double-divided-col-header" child={node.body.header}/>
              <ul className="double-divided-col-body">
                <div style={{lineHeight:1.8,fontSize:2.1+'rem',marginBottom: 20+'px'}} dangerouslySetInnerHTML={{__html: node.body.list.header}} />
                {node.body.list.items.map((item, i) =>
                  <li key={i}>{item}</li>
                )}
              </ul>
            </Col>
            <Col xs={12} sm={6} className="double-divided-col hasBackground">
              <Form formContent={data.form} />
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
  form: mauticForm(name: {regex: "/Demo.*en/"}) {
    ...mauticFormData
  }
}
`
