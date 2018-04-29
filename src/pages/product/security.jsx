import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../../components/SEO'
import { Copy, CTA, Img } from '../../components/Elements'
import { TwoColumn, Above } from '../../components/Partials'

class SecurityPage extends React.Component {
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
            <Above center="xs" compact className="gradient-yellow-green curved" hasGradient>
              <Col xs={10} md={5}>
                <Copy element="h1" type="header" child={node.body.hero.header} />
                <CTA type="login" name={node.body.hero.cta} className="button-submit" langKey={langKey} />
              </Col>
            </Above>
            <TwoColumn ratio={{xs: [10,10], sm:[4,6]}} center="xs" className="block-tour">
              <div>
                <Copy element="h2" type="title" align="left" child={node.body.safe.header} />
                <Copy element="p" type="description" align="left" child={node.body.safe.body} />
              </div>
              <Img src={node.body.safe.img} alt={node.body.safe.alt} width="80%" />
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[6,4]}} center="xs" className="block-tour">
              <Img src={node.body.endToEnd.img} alt={node.body.endToEnd.alt} />
              <div>
                <Copy element="h2" type="title"  align="left" child={node.body.endToEnd.header} />
                <Copy element="h5" type="sub"  align="left" child={node.body.endToEnd.subheader} />
                <Copy element="p" type="description" align="left" child={node.body.endToEnd.body} noEscape/>
              </div>
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[4,6]}} center="xs" className="block-tour">
              <div>
                <Copy element="h2"  align="left" type="title" child={node.body.ssl.header} />
                <Copy  align="left" element="p" type="description" child={node.body.ssl.body} />
              </div>
              <Img src={node.body.ssl.img} alt={node.body.ssl.alt} />
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[6,4]}} center="xs" className="block-tour">
              <Img src={node.body.twoFactor.img} alt={node.body.twoFactor.alt} />
              <div>
                <Copy element="h2" type="title" child={node.body.twoFactor.header}  align="left" />
                <Copy element="p" type="description" child={node.body.twoFactor.body}  align="left" />
              </div>
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[4,6]}} center="xs" className="block-tour">
              <div>
                <Copy element="h2" type="title" child={node.body.selfHosted.header}  align="left" />
                <Copy element="p" type="description" child={node.body.selfHosted.body} align="left" />
              </div>
              <Img src={node.body.selfHosted.img} alt={node.body.selfHosted.alt} />
            </TwoColumn>
            <TwoColumn ratio={{xs: [10,10], sm:[6,4]}} center="xs" className="block-tour">
              <Img src={node.body.audits.img} alt={node.body.audits.alt} />
              <div>
                <Copy element="h2" type="title" child={node.body.audits.header}  align="left" />
                <Copy element="p" type="description" align="left" child={node.body.audits.body} noEscape/>
              </div>
            </TwoColumn>
            <Row column center="xs" className="block-cta">
              <Col>
                <Copy element="h3" type="announce-white" child={node.body.demoCTA.header} />
                <Copy element="h4" type="announce-white" child={node.body.demoCTA.subheader} />
                <CTA type="internal" name={node.body.demoCTA.cta} href="/enterprise" className="button-blue" langKey={langKey} />
              </Col>
            </Row>
          </div>)}
      </div>)
  }
}

export default SecurityPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query SecurityEnPage {
  allContentYaml(filter: {header: {lang: {eq: "en"}, slug: {eq: "/product/security"}}}) {
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
            cta
          }
          safe {
            body
            header
            img
            alt
          }
          endToEnd {
            body
            header
            subheader
            img
            alt
          }
          ssl {
            body
            header
            img
            alt
          }
          twoFactor {
            body
            header
            img
            alt
          }
          selfHosted {
            body
            header
            img
            alt
          }
          audits {
            body
            header
            img
            alt
          }
          demoCTA {
            header
            subheader
            cta
          }
        }
      }
    }
  }
}
`
