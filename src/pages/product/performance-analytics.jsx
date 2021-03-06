import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../../components/SEO'
import { Copy, CTA, Img } from '../../components/Elements'
import { TwoColumn, Above } from '../../components/Partials'

class AnalyticsPage extends React.Component {
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
            <Above center="xs">
              <Col xs={10} md={5} lg={3}>
                <Copy align="left" element="h1" type="header" child={node.body.hero.header} />
                <Copy align="left" element="p" type="description" child={node.body.hero.body} />
              </Col>
              <Col xs={10} md={5} lg={7}>
                <Img src={node.body.hero.img} alt={node.body.hero.alt} />
              </Col>
            </Above>
            <Row center="xs" className="block-cta">
              <Col xs={5}>
                <Copy element="h3" type="announce-white" child={node.body.upgradeCTA.body} />
                <CTA name={node.body.upgradeCTA.cta} className="button-white" type="internal" href="/pricing" langKey={langKey} />
              </Col>
            </Row>
            <TwoColumn ratio={{xs: [10,10], sm:[4,6]}} center="xs" className="block-tour">
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.analyticsFeatures.timeToResolve.header} />
                <Copy element="p" type="description" align="left" child={ node.body.analyticsFeatures.timeToResolve.body } />
              </div>
              <Img src={node.body.analyticsFeatures.timeToResolve.img} alt={node.body.analyticsFeatures.timeToResolve.alt} width="80%" />
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[6,4]}} center="xs" className="block-tour">
              <Img src={node.body.analyticsFeatures.deadlines.img} alt={node.body.analyticsFeatures.deadlines.alt} width="80%" />
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.analyticsFeatures.deadlines.header} />
                <Copy element="p" type="description" align="left" child={ node.body.analyticsFeatures.deadlines.body } />
              </div>
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[4,6]}} center="xs" className="block-tour">
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.analyticsFeatures.progress.header} />
                <Copy element="p" type="description" align="left" child={ node.body.analyticsFeatures.progress.body } />
              </div>
              <Img src={node.body.analyticsFeatures.progress.img} alt={node.body.analyticsFeatures.progress.alt} width="80%" />
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[6,4]}} center="xs" className="block-tour">
              <Img src={node.body.analyticsFeatures.filters.img} alt={node.body.analyticsFeatures.filters.alt} />
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.analyticsFeatures.filters.header} />
                <Copy element="p" type="description" align="left" child={ node.body.analyticsFeatures.filters.body } />
              </div>
            </TwoColumn>
            <Row column center="xs" className="block-cta">
              <Col>
                <Copy type="announce-white" element="h3" child={ node.body.demoCTA.body} noEscape/>
              </Col>
              <Col>
                <CTA type="login" name="btn.start" className="button-submit button--besides" langKey={langKey} />&nbsp;
                <CTA type="internal" href="/enterprise" name={node.body.demoCTA.cta} className="button-blue button--besides" langKey={langKey} />
              </Col>
            </Row>
          </div>)}
      </div>)
  }
}

export default AnalyticsPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query AnalyticsEnPage {
  allContentYaml(filter: {header: {lang: {eq: "en"}, slug: {eq: "/product/performance-analytics"}}}) {
    edges {
      node {
        id
        header {
          title
          desc
        }
        body {
          hero{
            header
            body
            img
            alt
          }
          upgradeCTA {
            body
            cta
          }
          analyticsFeatures {
            timeToResolve {
              header
              body
              img
              alt
            }
            deadlines {
              header
              body
              img
              alt
            }
            progress {
              header
              body
              img
              alt
            }
            filters {
              header
              body
              img
              alt
            }
          }
          demoCTA {
            body
            cta
          }
        }
      }
    }
  }
}
`
