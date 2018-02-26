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

class AboutPage extends React.Component {
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
            <SEO pagePAth={langKey} title={node.header.title} generalDesc={node.header.desc} />
            <Above center="xs">
              <Copy type="header" element="h1" child={node.body.header} />
            </Above>
            <Row center="xs">
              {node.body.team.map((item,i) => {
                 return (
                   <Col xs={6} sm={3} key={"member"+i} className="team-card">
                     <div className="team-image">
                       <img class="front" src={item.front} />
                       <img class="back" src={item.back} />
                       <Copy type="title" element="h3" child={item.name} />
                       <Copy type="subtitle" element="h4" child={item.desc} />
                       {item.twitter ? <a href={item.twitter}><i class="fa fa-twitter" aria-hidden="true"></i></a>:"" }
                       {item.linkedin ? <a href={item.linkedin}><i class="fa fa-linkedin-square"></i></a>:""}
                     </div>
                   </Col>
                 )
              })}
            </Row>
            <Row center="xs">
              <Col xs>
                <Copy type="header" element="h2" child={node.body.mission.header} />
                <Copy type="content" element="p" child={node.body.mission.body} />
              </Col>
            </Row>
          </div>
        )}
      </div>
    )
  }
}

export default AboutPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query AboutPage {
  allContentYaml(filter: {header: {lang: {eq: "en"}, slug: {eq: "/about"}}}) {
    edges {
      node {
        id
        header {
          title
          desc
        }
        body {
          header
          team {
            name
            desc
            twitter
            linkedin
            front
            back
          }
          mission {
            header
            body
          }
        }
      }
    }
  }
}
`
