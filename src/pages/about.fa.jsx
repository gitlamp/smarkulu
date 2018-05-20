import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { Above } from '../components/Partials'

class AboutPage extends React.Component {
  constructor() {
    super()
  }
  render() {
    const data = this.props.data
    const langKey = this.props.pathContext.langKey
    return (
      <div>
        {data.allContentYaml.edges.map(({node}) =>
          <div key={node.id}>
            <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc} />
            <Above className="gradient-blue-green skewed-bottom" center="xs" hasGradient>
              <Col xs={10}>
                <Copy type="header" element="h1" child={node.body.header} />
              </Col>
            </Above>
            <Row tagName="section" center="xs">
              <Col xs={10}>
                <Row center="xs" style={{ marginTop: '-200px' }}>
                  {node.body.team.map((item,i) => {
                    const twitter = <a href={item.twitter} className="team-social-icon"><i className="fa fa-twitter twitter-filled" aria-hidden="true"></i></a>
                    const linkedin = <a href={item.linkedin} className="team-social-icon"><i className="fa fa-linkedin-square linkedin-filled"></i></a>
                    return (
                      <Col xs={9} sm={4} lg={3} key={i} className="team">
                        <div className="team-card">
                          <PersonsImg front={item.front} back={item.back} person={item.name}/>
                          <Copy type="title" element="h3" child={item.name} className="team-name"/>
                          <Copy type="subtitle" element="h4" child={item.jobTitle} className="team-job-title"/>
                          {item.twitter ? twitter : null}
                          {item.linkedin ? linkedin : null}
                        </div>
                      </Col>
                    )
                  })}
                </Row>
              </Col>
            </Row>
            <Row tagName="section" center="xs" className="background-mandy">
              <Col xs={6}>
                <Copy type="header" element="h2" child={node.body.mission.header} />
                <Copy type="content" align="right" element="p" child={node.body.mission.body} noEscape/>
              </Col>
            </Row>
          </div>
        )}
      </div>
    )
  }
}

class PersonsImg extends React.Component {
  constructor(props) {
    super(props)
    this.MouseIn = this.MouseIn.bind(this)
    this.MouseOut = this.MouseOut.bind(this)
    this.state = {
      faceSide: this.props.front
    }
  }
  MouseIn() {
    this.setState({
      faceSide: this.props.back
    })
  }
  MouseOut() {
    this.setState({
      faceSide: this.props.front
    })
  }
  render() {
    let img = null
    if (this.props.front && this.props.back) {
      img = <img src={this.state.faceSide}
                 onMouseOver={this.MouseIn}
                 onMouseOut={this.MouseOut}
                 alt={this.props.person}/>
    } else {
      img = <span className="team-char">
              <i className="fa fa-user-o" aria-hidden="true"></i>
            </span>
    }
    return (
      <div className="team-image">{img}</div>
    )
  }
}

export default AboutPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query AboutFaPage {
  allContentYaml(
    filter: {
      header: {
        lang: {eq: "fa"}
        slug: {eq: "/about"}
      }
    }
  ){
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
            jobTitle
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
