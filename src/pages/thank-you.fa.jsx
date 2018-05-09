import React from 'react'
import graphql from 'graphql'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { Above } from '../components/Partials'
import { Col } from 'react-flexbox-grid'

class ThankYouFaPage extends React.Component {
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
            <Above className="gradient-blue-red" hasGradient>
              <Col xs="6">
                <Copy align="center" type="header" element="h1" child={node.body.header} />
                <Copy align="center" type="header" element="h3" child={node.body.subheader} />
              </Col>
            </Above>
          </div>)}
      </div>)
  }
}

export default ThankYouFaPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query ThankYouFaPage {
  allContentYaml(filter: {header: {lang: {eq: "fa"}, slug: {eq: "/thank-you"}}}) {
    edges {
      node {
        id
        header {
          title
          desc
        }
        body {
          header
          subheader
        }
      }
    }
  }
}
`
