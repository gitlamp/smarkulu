import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../../components/SEO'
import { Copy, CTA, Img } from '../../components/Elements'
import { TwoColumn, Above } from '../../components/Partials'

class OnpremisePage extends React.Component {
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
            <Above center="xs" className="gradient-blue-green skewed-bottom" hasGradient>
              <Col xs={10} md={6}>
                <Copy align="left" element="h1" type="header" child={node.body.hero.header} />
                <Copy align="left" element="p" type="description" child={node.body.hero.subheader} />
                <CTA name={node.body.hero.cta} className="button-normal" type="internal" href="/enterprise" langKey={langKey} />
              </Col>
            </Above>
            <Row center="xs">
              <Col xs={6}>
                <Copy element="h2" type="subheader" child={node.body.benefits.header} />
              </Col>
            </Row>
            <TwoColumn ratio={{xs: [10,10], sm:[5,4]}} center="xs" className="block-tour">
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.benefits.secure.title} />
                <Copy element="p" type="description" align="left" child={ node.body.benefits.secure.desc } noEscape />
              </div>
              <Img src={node.body.benefits.secure.img} alt={node.body.benefits.secure.alt} width="80%" />
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[4,5]}} center="xs" className="block-tour">
              <Img src={node.body.benefits.nointerrupt.img} alt={node.body.benefits.nointerrupt.alt} width="80%" />
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.benefits.nointerrupt.title} />
                <Copy element="p" type="description" align="left" child={ node.body.benefits.nointerrupt.desc } />
              </div>
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[5,4]}} center="xs" className="block-tour">
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.benefits.customize.title} />
                <Copy element="p" type="description" align="left" child={ node.body.benefits.customize.desc } noEscape />
              </div>
              <Img src={node.body.benefits.customize.img} alt={node.body.benefits.customize.alt} width="80%" />
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[4,5]}} center="xs" className="block-tour">
              <Img src={node.body.benefits.deploy.img} alt={node.body.benefits.deploy.alt} />
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.benefits.deploy.title} />
                <Copy element="p" type="description" align="left" child={ node.body.benefits.deploy.desc } noEscape />
              </div>
            </TwoColumn>
            <Row column center="xs" className="block-cta">
              <Col>
                <Copy type="announce-white" element="h3" child={ node.body.demoCTA.header} noEscape/>
              </Col>
              <Col>
                <CTA type="login" name={node.body.demoCTA.cta} className="button-submit button--besides" langKey={langKey} />&nbsp;
              </Col>
            </Row>
          </div>)}
      </div>)
  }
}

export default OnpremisePage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query OnpremiseEnPage {
  allContentYaml(filter: {header: {lang: {eq: "en"}, slug: {eq: "/product/on-premise"}}}) {
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
            subheader
            cta
          }
          benefits {
            header
            secure {
              title
              desc
              img
              alt
            }
            nointerrupt {
              title
              desc
              img
              alt
            }
            customize {
              title
              desc
              img
              alt
            }
            deploy {
              title
              desc
              img
              alt
            }
          }
          demoCTA {
            header
            cta
          }
        }
      }
    }
  }
}
`
