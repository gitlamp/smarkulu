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

class TermsPage extends React.Component {
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
            <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc}/>
            <Above compact center="xs">
              <Col xs>
                <Copy type="header" element="h1" child={node.body.hero.header}/>
              </Col>
            </Above>
            <Row tagName="section" center="xs">
              <Col xs={6}>
                <Copy type="plain" element="div">
                  <div dangerouslySetInnerHTML = {{__html: node.body.preamble}} />
                </Copy>
              </Col>
              <Col xs={8}>
                <Copy type="subheader" element="h3" child={node.body.account.title}/>
                <ul className="content-plain">
                  {node.body.account.items.map(item => {
                     return (
                       <li>{item}</li>
                     )
                  })}
                </ul>
                <Copy type="subheader" element="h3" child={node.body.payment.title}/>
                <ul className="content-plain">
                  {node.body.payment.items.map(item => {
                     return (
                       <li>{item}</li>
                     )
                  })}
                </ul>
                <Copy type="subheader" element="h3" child={node.body.cancellation.title}/>
                <ul className="content-plain">
                  {node.body.cancellation.items.map(item => {
                     return (
                       <li>{item}</li>
                     )
                  })}
                </ul>
                <Copy type="subheader" element="h3" child={node.body.serviceChange.title}/>
                <ul className="content-plain">
                  {node.body.serviceChange.items.map(item => {
                     return (
                       <li>{item}</li>
                     )
                  })}
                </ul>
                <Copy type="subheader" element="h3" child={node.body.IP.title}/>
                <ul className="content-plain">
                  {node.body.payment.items.map(item => {
                     return (
                       <li>{item}</li>
                     )
                  })}
                </ul>
                <Copy type="subheader" element="h3" child={node.body.general.title}/>
                <ul className="content-plain">
                  {node.body.general.items.map(item => {
                     return (
                       <li dangerouslySetInnerHTML ={{__html: item}} />
                     )
                  })}
                </ul>
              </Col>
              <Col xs={6}>
                <Copy type="plain" element="div">
                  <div dangerouslySetInnerHTML = {{__html: node.body.ending}} />
                </Copy>
              </Col>
            </Row>
          </div>
        )}
      </div>
    )
  }
}

export default TermsPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query TermsEnPage {
  allContentYaml(filter: {header: {lang: {eq: "en"}, slug: {eq: "/terms"}}}) {
    edges {
      node {
        id
        header {
          title
          desc
        }
        body {
          hero {
            header
          }
          preamble
          account {
            title
            items
          }
          payment {
            title
            items
          }
          cancellation {
            title
            items
          }
          serviceChange {
            title
            items
          }
          IP {
            title
            items
          }
          general {
            title
            items
          }
          ending
        }
      }
    }
  }
}
`