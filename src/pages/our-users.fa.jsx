import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { Above, Logos } from '../components/Partials'

const OurUsers = (props) => {
  const { data } = props
  const { slug, langKey } = props.pathContext
  return (
    <div>
      {data.allContentYaml.edges.map(({node}) =>
        <div key={node.id}>
          <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc}/>
          <Above className="gradient-red-yellow skewed-bottom" xs={12} center="xs" normal hasGradient>
            <Col xs={11} sm={8}>
              <Copy type="header" element="h1" child={node.body.hero.header}/>
            </Col>
          </Above>
          <Row tagName="section">
            <Logos src={node.body.industries.marketing.items} header={node.body.industries.marketing.header} sm={2} xs={4} middle="xs" center="xs"/>
            <Logos src={node.body.industries.ecommerce.items} header={node.body.industries.ecommerce.header} sm={2} xs={4} middle="xs" center="xs"/>
            <Logos src={node.body.industries.education.items} header={node.body.industries.education.header} sm={2} xs={4} middle="xs" center="xs"/>
            <Logos src={node.body.industries.manufacturing.items} header={node.body.industries.manufacturing.header} sm={2} xs={4} middle="xs" center="xs"/>
            <Logos src={node.body.industries.vas.items} header={node.body.industries.vas.header} sm={2} xs={4} middle="xs" center="xs"/>
            <Logos src={node.body.industries.media.items} header={node.body.industries.media.header} sm={2} xs={4} middle="xs" center="xs"/>
            <Logos src={node.body.industries.professionalService.items} header={node.body.industries.professionalService.header} sm={2} xs={4} middle="xs" center="xs"/>
            <Logos src={node.body.industries.architecture.items} header={node.body.industries.architecture.header} sm={2} xs={4} middle="xs" center="xs"/>
            <Logos src={node.body.industries.IT.items} header={node.body.industries.IT.header} sm={2} xs={4} middle="xs" center="xs"/>
            <Logos src={node.body.industries.communication.items} header={node.body.industries.communication.header} sm={2} xs={4} middle="xs" center="xs"/>
            <Logos src={node.body.industries.government.items} header={node.body.industries.government.header} sm={2} xs={4} middle="xs" center="xs"/>
            <Logos src={node.body.industries.nonProfit.items} header={node.body.industries.nonProfit.header} sm={2} xs={4} middle="xs" center="xs"/>
          </Row>
        </div>
      )}
    </div>
  )
}

export default OurUsers

/**
 * Require data from en yaml
 */
export const pageQuery = graphql `
query OurUsersFaPage {
  allContentYaml(
    filter: {
      header: {
        lang: {eq: "fa"}
        slug: {eq: "/our-users"}
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
          industries {
            marketing {
              header
              items {
                company
                alt
              }
            }
            ecommerce {
              header
              items {
                company
                alt
              }
            }
            education {
              header
              items {
                company
                alt
              }
            }
            manufacturing {
              header
              items {
                company
                alt
              }
            }
            vas {
              header
              items {
                company
                alt
              }
            }
            media {
              header
              items {
                company
                alt
              }
            }
            professionalService {
              header
              items {
                company
                alt
              }
            }
            financialService {
              header
              items {
                company
                alt
              }
            }
            architecture {
              header
              items {
                company
                alt
              }
            }
            IT {
              header
              items {
                company
                alt
              }
            }
            communication {
              header
              items {
                company
                alt
              }
            }
            government {
              header
              items {
                company
                alt
              }
            }
            nonProfit {
              header
              items {
                company
                alt
              }
            }
          }
        }
      }
    }
  }
}
`