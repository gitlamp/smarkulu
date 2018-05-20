import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { Above } from '../components/Partials'

const Privacy = (props) => {
  const { data } = props
  const langKey = props.pathContext.langKey
  return (
    <div>
      {data.allContentYaml.edges.map(({node}) =>
        <div key={node.id}>
          <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc}/>
          <Above center="xs" className="background-shamrock" hasGradient>
            <Col xs={12}>
              <Copy type="header" element="h1" child={node.body.hero.header}/>
            </Col>
          </Above>
          <Row tagName="section" center="xs">
            <Col xs={10} sm={6}>
              <Copy type="plain" element="div" child={node.body.preamble} noEscape/>
            </Col>
            <Col xs={10}>
              <Copy type="subheader" element="h3" child={node.body.identity.title}/>
              <Copy type="plain" element="p" child={node.body.identity.body} noEscape/>
              <ul className="content-plain">
                {node.body.identity.items.map((item, i) => {
                    return (
                      <li key={i} className="numbered">{item}</li>
                    )
                })}
              </ul>
                <Copy type="subheader" element="h3" child={node.body.lawEnforcement.title}/>
                <Copy type="plain" element="p" child={node.body.lawEnforcement.body}/>
                <Copy type="subheader" element="h3" child={node.body.encryption.title}/>
                <Copy type="plain" element="p" child={node.body.encryption.body}/>
                <Copy type="subheader" element="h3" child={node.body.deletedData.title}/>
                <Copy type="plain" element="p" child={node.body.deletedData.body}/>
                <Copy type="subheader" element="h3" child={node.body.cookie.title}/>
                <Copy type="plain" element="p" child={node.body.cookie.body}/>
                <Copy type="subheader" element="h3" child={node.body.changes.title}/>
                <Copy type="plain" element="p" child={node.body.changes.body} noEscape/>
            </Col>
          </Row>
        </div>
      )}
    </div>
  )
}

export default Privacy

export const pageQuery = graphql `
query PrivacyPageFa {
  allContentYaml(
    filter: {
      header: {
        lang: {eq: "fa"}
        slug: {eq: "/privacy"}
      }
    }
  ){
    edges {
      node {
        id
        header {
          title
          desc
        }
        body {
          hero {
            header
          }
          preamble
          identity {
            title
            body
            items
          }
          lawEnforcement {
            title
            body
          }
          encryption {
            title
            body
          }
          deletedData {
            title
            body
          }
          cookie {
            title
            body
          }
          changes {
            title
            body
          }
        }
      }
    }
  }
}
`