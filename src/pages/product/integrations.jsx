import React from 'react'
import graphql from 'graphql'
import { Grid, Row, Col } from 'react-flexbox-grid'
import SEO from '../../components/SEO'
import { Copy, ShowMore } from '../../components/Elements'
import { Above } from '../../components/Partials'
import { expandDetails } from '../../components/functions'

class IntegrationsPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    expandDetails('integration-parent','integration-detail','integration-expand')
  }
  render() {
    const data = this.props.data
    const langKey = this.props.pathContext.langKey
    const node = data.allContentYaml.edges[0].node

    return (
      <div>
        <div key={node.id}>
          <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc} />
          <Above className="gradient-blue-green" center="xs" hasGradient>
            <Col xs={10}>
              <Copy element="h1" type="header" child={node.body.hero.header} />
              <Copy element="h3" type="subheader" child={node.body.hero.subheader} />
            </Col>
          </Above>
          <Row center="xs">
            <Grid fluid className="integrations">
              {node.body.allIntegrations.map((item) => {
                 let nodeDetail
                 data.allContentYaml.edges.forEach((i) =>
                   {
                     if(i.node.header.linked === item.header) nodeDetail = i.node
                   }
                 )
                 return(
                   <Row center="xs" className="integration-wrapper" key={item.header}>
                     <Col xs={8} className="integration-parent">
                       <Copy element="h2" type="integration-title" child={item.header} />
                       <div className="integration-desc">
                         <Copy element="p" type="title" child={item.desc} />
                       </div>
                       <div className={(this.props.activated ? "active ": "") + "integration-detail"}>
                         <Copy element="p" type="content" child={nodeDetail.body.desc} noEscape />
                         {nodeDetail.body.note ?
                          <div className="integration-note">
                            <Copy element="h4" type="sub" children={nodeDetail.body.note.header} />
                            <Copy element="p" type="plain" children={nodeDetail.body.note.desc} />
                          </div> :
                          null
                         }
                       </div>
                       <ShowMore className="button button-blue integration-expand" more="expand.more" less="expand.less" />
                     </Col>
                     <Col xs={4} className="integration-image">
                       <img src={item.img} alt={item.header} />
                     </Col>
                   </Row>
                 )}
              )}
            </Grid>
          </Row>
        </div>
      </div>)
  }
}

export default IntegrationsPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query IntegrationPage {
  allContentYaml(
    filter: {header: {lang: {eq: "en"}, slug: {regex: "/integrations/"}}}
    sort: {fields: [header___slug], order: ASC}
  ) {
    edges {
      node {
        id
        header {
          title
          desc
          linked
        }
        body {
          hero{
            header
            subheader
          }
          allIntegrations {
            header
            desc
            img
          }
          desc
          note {
            header
            desc
          }
          tags
        }
      }
    }
  }
}
`
