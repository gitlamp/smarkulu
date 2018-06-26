import React from 'react'
import graphql from 'graphql'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { Above, Logos } from '../components/Partials'

const OurUsers = (props) => {
  const { data } = props
  const langKey = props.pathContext.langKey
  return (
    <div>
      {data.allContentYaml.edges.map(({node}) =>
        <div key={node.id}>
          <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc}/>
          <Above className="gradient-red-yellow skewed-bottom" xs={12} center="xs" normal hasGradient>
            <Col xs={11} sm={8}>
              <Copy type="header" element="h1" child={node.body.hero.header}/>
              <Copy type="subheader" element="h3" child={node.body.hero.subheader}/>
            </Col>
          </Above>
          <Grid id="#industries-overview">
            <Row center="xs" className="industry-overview">
              {Object.keys(node.body.industries).map((i) => {
                 var item = node.body.industries[i],
                     filterTitle = item.header.split(" -")[0] //this is very brittle!
                 return (
                   <Col xs={6} sm={3} md={2} className="industry-filters">
                     <a class="" href={"#" + item.id} className="button button-filter">
                       <Copy element="p" type="filter" child={filterTitle} />
                     </a>
                   </Col>
                 )})}
            </Row>
          </Grid>
          <Row tagName="section">
            <Logos src={node.body.industries.marketing.items} header={node.body.industries.marketing.header} sm={2} xs={4} middle="xs" center="xs" id={node.body.industries.marketing.id} />
            <Logos src={node.body.industries.ecommerce.items} header={node.body.industries.ecommerce.header} sm={2} xs={4} middle="xs" center="xs" id={node.body.industries.ecommerce.id} />
            <Logos src={node.body.industries.education.items} header={node.body.industries.education.header} sm={2} xs={4} middle="xs" center="xs" id={node.body.industries.education.id} />
            <Logos src={node.body.industries.manufacturing.items} header={node.body.industries.manufacturing.header} sm={2} xs={4} middle="xs" center="xs" id={node.body.industries.manufacturing.id} />
            <Logos src={node.body.industries.vas.items} header={node.body.industries.vas.header} sm={2} xs={4} middle="xs" center="xs" id={node.body.industries.vas.id} />
            <Logos src={node.body.industries.media.items} header={node.body.industries.media.header} sm={2} xs={4} middle="xs" center="xs" id={node.body.industries.media.id} />
            <Logos src={node.body.industries.professionalService.items} header={node.body.industries.professionalService.header} sm={2} xs={4} middle="xs" center="xs" id={node.body.industries.professionalService.id} />
            <Logos src={node.body.industries.architecture.items} header={node.body.industries.architecture.header} sm={2} xs={4} middle="xs" center="xs" id={node.body.industries.architecture.id} />
            <Logos src={node.body.industries.IT.items} header={node.body.industries.IT.header} sm={2} xs={4} middle="xs" center="xs" id={node.body.industries.IT.id} />
            <Logos src={node.body.industries.communication.items} header={node.body.industries.communication.header} sm={2} xs={4} middle="xs" center="xs" id={node.body.industries.communication.id} />
            <Logos src={node.body.industries.government.items} header={node.body.industries.government.header} sm={2} xs={4} middle="xs" center="xs" id={node.body.industries.government.id} />
            <Logos src={node.body.industries.nonProfit.items} header={node.body.industries.nonProfit.header} sm={2} xs={4} middle="xs" center="xs" id={node.body.industries.nonProfit.id} />
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
query OurUsersPage {
  allContentYaml(
    filter: {
      header: {
        lang: {eq: "en"}
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
            subheader
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
              id
              header
              items {
                company
                alt
              }
            }
            media {
              id
              header
              items {
                company
                alt
              }
            }
            professionalService {
              id
              header
              items {
                company
                alt
              }
            }
            financialService {
              id
              header
              items {
                company
                alt
              }
            }
            architecture {
              id
              header
              items {
                company
                alt
              }
            }
            IT {
              id
              header
              items {
                company
                alt
              }
            }
            communication {
              id
              header
              items {
                company
                alt
              }
            }
            government {
              id
              header
              items {
                company
                alt
              }
            }
            nonProfit {
              id
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
