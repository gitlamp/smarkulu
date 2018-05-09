import React from 'react'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy, CTA, Img } from '../components/Elements'
import { TwoColumn, Above } from '../components/Partials'

class TimesheetPage extends React.Component {
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
                <Copy element="h2" type="title" align="right" child={node.body.problem.header} />
                <Copy element="p" type="description" align="right" child={node.body.problem.body} noEscape />
              </div>
              <Img src={node.body.problem.img} alt={node.body.problem.alt} width="80%" />
            </TwoColumn>
            <TwoColumn ratio={{xs: [12,12], sm:[5,5]}} center="xs">
              <Img src={node.body.solution.img} alt={node.body.solution.alt} width="80%" />
              <div>
                <Copy element="h2" type="title" align="right" child={node.body.solution.header} />
                <Copy element="p" type="description" align="right" child={ node.body.solution.body } noEscape />
              </div>
            </TwoColumn>
            <Row className="block-announce gradient-blue-green" center="xs">
              <Col xs={10}>
                <Copy element="h2" type="subheader" align="center" child={node.body.timesheetFeatures.header} />
              </Col>

              {node.body.timesheetFeatures.items.map((item) =>
                <Col xs={12} sm={6} md={6}>
                  <div
                    style={{height: "15rem",
                            background: "no-repeat center top/70% url("+item.img+")"}}>
                  </div>
                  <Copy type="title" element="h3" child={item.title} />
                  <Copy type="description" element="p" child={item.desc} />
                </Col>
              )}
            </Row>
            <Row column center="xs" className="block-cta">
              <Col>
                <Copy type="announce-white" element="h3" child={node.body.joinCTA.header}>
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

export default TimesheetPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query TimesheetFaPage {
  allContentYaml(filter: {header: {lang: {eq: "fa"}, slug: {eq: "/timesheet"}}}) {
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
          problem {
            body
            header
            img
            alt
          }
          solution {
            body
            header
            img
            alt
          }
          timesheetFeatures {
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
