import React from 'react'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Helmet from 'react-helmet'
import $ from 'jquery'
import { TweenLite } from 'gsap'

import SEO from '../../components/SEO'
import Input from '../../components/Input'
import { Copy, CTA, Img } from '../../components/Elements'
import { TwoColumn, Above, Logos } from '../../components/Partials'

class MobilePage extends React.Component {
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
            <Above center="xs" compact className="mobile-app">
              <Col xs={12} sm={6}>
                <Copy element="h2" type="header" child={node.body.intro.header} />
                <Copy element="h1" type="sub" child={node.body.hero.header} />
                <Copy element="p" type="description" child={node.body.intro.desc} noEscape />
              </Col>
            </Above>
            <Row className="mobile-download">
              <Col xs={6}>
                <div>
                  <img src={node.body.intro.img} height="80%" />
                </div>
              </Col>
              <Col xs={6} className="mobile-stores">
                <a href={node.body.intro.iTunes} className="mobile-store">
                  <img src={node.body.intro.iTunesLogo} />
                </a>
                <a href={node.body.intro.play} className="mobile-store">
                  <img src={node.body.intro.playLogo} />
                </a>
              </Col>
            </Row>
          </div>)}
      </div>)
  }
}

export default MobilePage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query MobilePage {
  allContentYaml(filter: {header: {lang: {eq: "en"}, slug: {eq: "/product/mobile-app"}}}) {
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
          intro {
            header
            desc
            img
            iTunes
            iTunesLogo
            play
            playLogo
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
