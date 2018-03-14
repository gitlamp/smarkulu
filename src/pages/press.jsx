
import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { Above, TwoColumn } from '../components/Partials'

const Press = (props) => {
  const { data } = props
  const { slug, langKey } = props.pathContext
  return (
    <div>
      {data.allContentYaml.edges.map(({node}) =>
        <div key={node.id}>
          <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc}/>
          <Above center="xs">
            <Col xs={12}>
              <Copy type="header" element="h1" child={node.body.hero.header}/>
              <Copy type="content" element="p" child={node.body.hero.body}/>
            </Col>
          </Above>
          <Row tagName="section" center="xs">
            <Col xs={11} sm={8}>
              <Copy type="header" element="h2" child={node.body.history.header}/>
              <div dangerouslySetInnerHTML={{__html: node.body.history.body}}/>
            </Col>
          </Row>
          <Row tagName="section" center="xs">
            <Col xs={10}>
              <Copy type="title" element="h3" child={node.body.logos.header} align="left"/>
              <Copy type="sub" element="p" child={node.body.logos.desc} align="left"/>
              <TwoColumn ratio={{ xs:[12,12], md:[6,6], sm:[4,4] }} center="xs">
                      <div className="download-box">
                        <a href={node.body.logos.enWhiteSrc} className="download-box-overlay">
                          <span>
                            <i className="fa fa-download" aria-hidden="true"></i>
                          </span>
                        </a>
                        <img src={node.body.logos.enWhite} alt=""/>
                      </div>
                      <div className="download-box">
                        <a href={node.body.logos.enBlueSrc} className="download-box-overlay">
                          <span>
                            <i className="fa fa-download" aria-hidden="true"></i>
                          </span>
                        </a>
                        <img src={node.body.logos.enBlue} alt=""/>
                      </div>
                    </TwoColumn>
              <Copy type="title" element="h3" child={node.body.icons.header} align="left"/>
              <Copy type="sub" element="p" child={node.body.icons.desc} align="left"/>
              <TwoColumn ratio={{ xs:[12,12], md:[6,6], sm:[4,4] }} center="xs">
                      <div className="download-box">
                        <a href={node.body.icons.iconWhiteSrc} className="download-box-overlay">
                          <span>
                            <i className="fa fa-download" aria-hidden="true"></i>
                          </span>
                        </a>
                        <img src={node.body.icons.iconWhite} alt=""/>
                      </div>
                      <div className="download-box">
                        <a href={node.body.icons.iconBlueSrc} className="download-box-overlay">
                          <span>
                            <i className="fa fa-download" aria-hidden="true"></i>
                          </span>
                        </a>
                        <img src={node.body.icons.iconBlue} alt=""/>
                      </div>
                    </TwoColumn>
                  </Col>
                </Row>
          <Row tagName="section" center="xs" className="press-coverage">
              <Col xs={10}>
                <Copy type="header" element="h2" child={node.body.news.header} align="left"/>
                <Row start="xs">
                  {node.body.news.items.map((item, i) => {
                    return (
                    <Col xs={12} sm={4} lg={3} key={i}>
                        <a href={item.link} className="press-card">
                          <div className="press-image">
                            <img src={item.img} alt={item.link}/>
                          </div>
                          <Copy type="title" element="h4" child={item.title} className="press-title"/>
                          <Copy type="sub" element="p" child={`- ${item.source}`} className="press-src"/>
                        </a>
                      </Col>
                    )
                  })}
                </Row>
              </Col>
          </Row>
        </div>
      )}
    </div>
  )
}

export default Press

/**
 * Require data from en yaml
 */
export const pageQuery = graphql `
query PressPage {
  allContentYaml(
    filter: {
      header: {
        lang: {eq: "en"}
        slug: {eq: "/press"}
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
          hero {
            header
            body
          }
          history {
            header
            body
          }
          logos {
            header
            desc
            enBlue
            enBlueSrc
            enWhite
            enWhiteSrc
          }
          icons {
            header
            desc
            iconBlue
            iconBlueSrc
            iconWhite
            iconWhiteSrc
          }
          news {
            header
            items {
              title
              source
              img
              link
            }
          }
        }
      }
    }
  }
}
`