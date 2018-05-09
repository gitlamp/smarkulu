import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../../components/SEO'
import { Copy, CTA, Img } from '../../components/Elements'
import { TwoColumn, Above } from '../../components/Partials'

class TimeTrackingPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.data
    const langKey = this.props.pathContext.langKey
    return (
      <div>
        {data.allContentYaml.edges.map(({node}) =>
          <div key={node.id}>
            <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc} />
            <Above center="xs gradient-red-yellow" hasGradient>
              <Col xs={5}>
                <Copy align="left" element="h1" type="header" child={node.body.hero.header} />
                <CTA name={node.body.hero.cta} className="button-white" type="login" langKey={langKey} />
              </Col>
            </Above>
            <TwoColumn ratio={{xs: [10,10], sm:[4,5]}} center="xs" className="block-tour">
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.trackingFeatures.advanced.header} />
                <Copy element="p" type="description" align="left" child={ node.body.trackingFeatures.advanced.body } />
              </div>
              <Img src={node.body.trackingFeatures.advanced.img} alt={node.body.trackingFeatures.advanced.alt} width="60%" />
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[5,4]}} center="xs" className="block-tour">
              <Img src={node.body.trackingFeatures.reports.img} alt={node.body.trackingFeatures.reports.alt} width="60%" />
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.trackingFeatures.reports.header} />
                <Copy element="p" type="description" align="left" child={ node.body.trackingFeatures.reports.body } />
                <CTA href="/product/preformance-analytics" type="internal" name={node.body.trackingFeatures.reports.cta} langKey={langKey} className="button-blue" />
              </div>
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[4,5]}} center="xs" className="block-tour">
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.trackingFeatures.export.header} />
                <Copy element="p" type="description" align="left" child={ node.body.trackingFeatures.export.body } />
              </div>
              <Img src={node.body.trackingFeatures.export.img} alt={node.body.trackingFeatures.export.alt} width="60%" />
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[5,4]}} center="xs" className="block-tour">
              <Img src={node.body.trackingFeatures.updates.img} alt={node.body.trackingFeatures.updates.alt} width="60%" />
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.trackingFeatures.updates.header} />
                <Copy element="p" type="description" align="left" child={ node.body.trackingFeatures.updates.body } />
              </div>
            </TwoColumn>
            <Row column center="xs" className="block-cta">
              <Col>
                <Copy type="announce-white" element="h3" child={ node.body.demoCTA.header} />
                <Copy type="announce-white" element="p" child={ node.body.demoCTA.body} />
              </Col>
              <Col>
                <CTA type="internal" href="/enterprise" name={node.body.demoCTA.cta} className="button-blue button--besides" langKey={langKey} />
              </Col>
            </Row>
          </div>)}
      </div>)
  }
}

export default TimeTrackingPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query TimeTrackingPage {
  allContentYaml(filter: {header: {lang: {eq: "en"}, slug: {eq: "/product/time-tracking"}}}) {
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
            cta
          }
          trackingFeatures {
            advanced {
              header
              body
              img
              alt
            }
            reports {
              header
              body
              img
              alt
              cta
            }
            export {
              header
              body
              img
              alt
            }
            updates {
              header
              body
              img
              alt
            }
          }
          demoCTA {
            header
            body
            cta
          }
        }
      }
    }
  }
}
`
