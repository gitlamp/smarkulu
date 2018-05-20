import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy, CTA, Img } from '../components/Elements'
import { TwoColumn, Above } from '../components/Partials'

class TaskManagementPage extends React.Component {
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
            <Above start="xs" className="skewed-bottom gradient-blue-red" compact hasGradient>
              <Col xs={1} />
              <Col xs={4}>
                <Copy align="right" type="header" element="h1" child={node.body.hero.header} />
                <Copy align="right" type="title" element="h4" child={node.body.hero.subheader} />
                <div style={{textAlign: "center"}}>
                  <CTA type="login" name={node.body.hero.cta} langKey={langKey} className="button-submit" />
                </div>
              </Col>
            </Above>
            <TwoColumn ratio={{xs: [12,12], sm:[5,5]}} center="xs">
              <Img src={node.body.intro.img} alt={node.body.intro.alt} width="80%" />

              <div>
                <Copy element="h2" type="title" align="right" child={node.body.intro.header} />
                <Copy element="p" type="description" align="right" child={node.body.intro.body} noEscape />
              </div>
            </TwoColumn>
            <Row className="block-announce gradient-blue-green" center="xs">
              <Col xs={10}>
                <Copy element="h2" type="subheader" align="center" child={node.body.solution.header} />
                <Copy element="p" type="description" align="center" child={node.body.solution.body} />
              </Col>

              {node.body.taskFeatures.map((item) =>
                <Col xs={12} sm={6} md={4}>
                  <Copy type="title" element="h3" child={item.title} />
                  <Copy type="description" element="p" child={item.desc} />
                </Col>
              )}
            </Row>
            <Row column center="xs" className="block-cta">
              <Col>
                <Copy type="subheader" element="h3" child={node.body.tryCTA.header} />
                <Copy type="description" element="p" child={node.body.tryCTA.subheader} />
                <CTA type="login" name={node.body.tryCTA.cta} className="button-submit button--besides" langKey={langKey} />&nbsp;
              </Col>
            </Row>
          </div>)}
      </div>)
  }
}

export default TaskManagementPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query TaskManagementFaPage {
  allContentYaml(filter: {header: {lang: {eq: "fa"}, slug: {eq: "/product/task-management"}}}) {
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
          intro {
            body
            header
            img
            alt
          }
          solution {
            header
            body
          }
          taskFeatures {
            title
            desc
          }
          tryCTA {
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
