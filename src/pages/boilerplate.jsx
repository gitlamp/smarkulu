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

class AnalyticsPage extends React.Component {
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
        </div>)}
      </div>)
  }
}

export default AnalyticsPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query BoilerPage {
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
          }
          upgradeCTA {
            body
            cta
          }
          analyticsFeatures {
            timeToResolve {
              header
              body
            }
            deadlines {
              header
              body
            }
            progress {
              header
              body
            }
            filters {
              header
              body
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
