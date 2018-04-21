import React from 'react'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Helmet from 'react-helmet'
import $ from 'jquery'
import { TweenLite } from 'gsap'

import SEO from '../components/SEO'
import Input from '../components/Input'
import { Copy, CTA, Img } from '../components/Elements'
import { TwoColumn, Above, Logos } from '../components/Partials'

class TimeManagementPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.data
    const langKey = this.props.pathContext.langKey
    const slug = this.props.pathContext.slug
    return (
      <div>
        {data.allContentYaml.edges.map(({node}) =>
          <div key={node.id}>
            <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc} />
            <Above end="xs">
              <Col xs={4} xsOffset={1}>
                <Copy align="right" type="header" element="h1" child={node.body.hero.header} />
                <Copy align="right" type="title" element="h4" child={node.body.hero.subheader} />
                <div style={{textAlign: "center"}}>
                  <CTA type="login" name={node.body.hero.cta} langKey={langKey} className="button-submit" />
                </div>
              </Col>
            </Above>
            <TwoColumn ratio={{xs: [12,12], sm:[5,5]}} center="xs">
              <div>
                <Copy element="h2" type="title" align="right" child={node.body.intro1.header} />
                <Copy element="p" type="description" align="right" child={node.body.intro1.body} noEscape />
              </div>
              <Img src={node.body.intro1.img} alt={node.body.intro1.alt} width="80%" />
            </TwoColumn>
            <TwoColumn ratio={{xs: [12,12], sm:[5,5]}} center="xs">
              <Img src={node.body.intro2.img} alt={node.body.intro2.alt} width="80%" />
              <div>
                <Copy element="h2" type="title" align="right" child={node.body.intro2.header} />
                <Copy element="p" type="description" align="right" child={ node.body.intro2.body } noEscape />
              </div>
            </TwoColumn>
            <Row className="block-announce" center="xs">
              <Col xs={10}>
                <Copy element="h2" type="subheader" align="center" child={node.body.solution.header} />
              </Col>

              {node.body.solution.items.map((item) =>
                <Col xs={12} sm={6} md={4}>
                  <div
                    style={{height: "15rem",
                            background: "no-repeat 100% url("+item.img+")"}}>
                  </div>
                  <Copy type="title" element="h3" child={item.title} />
                  <Copy type="description" element="p" child={item.desc} />
                </Col>
              )}
            </Row>
            <Row column center="xs" className="block-cta">
              <Col>
                <Copy type="announce-white" element="h3" >
                  {node.body.joinCTA.headerParts[0]} &nbsp;
                  <FormattedMessage id={node.body.joinCTA.headerParts[1]} /> &nbsp;
                  {node.body.joinCTA.headerParts[2]}
                </Copy>
                <CTA type="login" name={node.body.joinCTA.cta1} className="button-submit button--besides" langKey={langKey} />&nbsp;
                <CTA type="internal" href="/enterprise" name={node.body.joinCTA.cta2} className="button-blue button--besides" langKey={langKey} />
              </Col>
            </Row>
          </div>)}
      </div>)
  }
}

export default TimeManagementPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query TimeManagementFaPage {
  allContentYaml(filter: {header: {lang: {eq: "fa"}, slug: {eq: "/time-management"}}}) {
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
            background
          }
          intro1 {
            body
            header
            img
            alt
          }
          intro2 {
            body
            header
            img
            alt
          }
          solution {
            items {
              title
              desc
              img
            }
            header
          }
          joinCTA {
            headerParts
            cta1
            cta2
          }
        }
      }
    }
  }
}
`
