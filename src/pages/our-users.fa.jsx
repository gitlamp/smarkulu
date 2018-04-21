import React from 'react'
import graphql from 'graphql'
import { Grid, Row, Col } from 'react-flexbox-grid'

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
      <Above xs={12} center="xs">
      <Col xs={11} sm={8}>
      <Copy type="header" element="h1" child={node.body.hero.header}/>
      </Col>
      </Above>
      <Grid id="#industries-overview">
      <Row center="xs" className="industry-overview">
      {Object.keys(node.body.industries).map((i) => {
        var item = node.body.industries[i]
        return (
          <Col xs={6} sm={3} md={2} className="industry-filters">
            <a class="" href={"#" + item.id} className="button button-filter">
              <Copy element="p" type="filter" child={item.header} />
            </a>
          </Col>
        )})}
        </Row>
        </Grid>
        <Row tagName="section">
          {/* Object.keys(node.body.industries.map((i) => {
            *  var item = node.body.industries[i]
            *  return (
            *    <Logos src={item.items} id={item.id} header={item.header} sm={2} xs={4} middle="xs" center="xs"/>
            *  )
              })) */}
          <Logos src={node.body.industries.marketing.items} id={node.body.industries.marketing.id} header={node.body.industries.marketing.header} sm={2} xs={4} middle="xs" center="xs"/>

          <Logos src={node.body.industries.ecommerce.items} id={node.body.industries.ecommerce.id} header={node.body.industries.ecommerce.header} sm={2} xs={4} middle="xs" center="xs"/>
          <Logos src={node.body.industries.education.items} id={node.body.industries.education.id} header={node.body.industries.education.header} sm={2} xs={4} middle="xs" center="xs"/>
          <Logos src={node.body.industries.manufacturing.items} id={node.body.industries.manufacturing.id} header={node.body.industries.manufacturing.header} sm={2} xs={4} middle="xs" center="xs"/>
          <Logos src={node.body.industries.vas.items} id={node.body.industries.vas.id} header={node.body.industries.vas.header} sm={2} xs={4} middle="xs" center="xs"/>
          <Logos src={node.body.industries.media.items} id={node.body.industries.media.id}  header={node.body.industries.media.header} sm={2} xs={4} middle="xs" center="xs"/>
          <Logos src={node.body.industries.professionalService.items} id={node.body.industries.professionalService.id} header={node.body.industries.professionalService.header} sm={2} xs={4} middle="xs" center="xs"/>
          <Logos src={node.body.industries.financialService.items} id={node.body.industries.financialService.id} header={node.body.industries.financialService.header} sm={2} xs={4} middle="xs" center="xs" button="#industries-ovreview" />
          <Logos src={node.body.industries.architecture.items} id={node.body.industries.architecture.id} header={node.body.industries.architecture.header} sm={2} xs={4} middle="xs" center="xs"  button="#industries-ovreview"/>
          <Logos src={node.body.industries.IT.items} id={node.body.industries.IT.id} header={node.body.industries.IT.header} sm={2} xs={4} middle="xs" center="xs"/>
          <Logos src={node.body.industries.communication.items} id={node.body.industries.communication.id}  header={node.body.industries.communication.header} sm={2} xs={4} middle="xs" center="xs"/>
          <Logos src={node.body.industries.government.items} id={node.body.industries.government.id}  header={node.body.industries.government.header} sm={2} xs={4} middle="xs" center="xs"/>
          <Logos src={node.body.industries.nonProfit.items} id={node.body.industries.nonProfit.id}  header={node.body.industries.nonProfit.header} sm={2} xs={4} middle="xs" center="xs"/>
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
              id
              header
              items {
                company
                alt
              }
            }
            ecommerce {
              id
              header
              items {
                company
                alt
              }
            }
            education {
              id
              header
              items {
                company
                alt
              }
            }
            manufacturing {
              id
              header
              items {
                company
                alt
              }
            }
            vas {
              header
              id
              items {
                company
                alt
              }
            }
            media {
              header
              id
              items {
                company
                alt
              }
            }
            professionalService {
              header
              id
              items {
                company
                alt
              }
            }
            financialService {
              header
              id
              items {
                company
                alt
              }
            }
            architecture {
              header
              id
              items {
                company
                alt
              }
            }
            IT {
              header
              id
              items {
                company
                alt
              }
            }
            communication {
              header
              id
              items {
                company
                alt
              }
            }
            government {
              header
              id
              items {
                company
                alt
              }
            }
            nonProfit {
              header
              id
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
