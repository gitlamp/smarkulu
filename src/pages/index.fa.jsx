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

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const $item = $('.text-switcher').find('span')
    let oldItem = 0
    let currentItem = -1
    const flip = function() {
      let oldItem = currentItem

      if(currentItem < $item.length -1) {
        currentItem++
      } else {
        currentItem = 0
      }

      TweenLite.to($item.eq(oldItem), .4, {
        top: -20,
        alpha: 0,
        rotationX: 90
      })
      TweenLite.fromTo($item.eq(currentItem), .4, {
        top: 20,
        alpha: 0,
        rotationX: -90
      }, {
        top: 0,
        alpha: 1,
        rotationX: 0
      })
      TweenLite.delayedCall(3, flip)
    }
    flip()
  }
  render() {
    const data = this.props.data
    const langKey = this.props.pathContext.langKey
    const slug = this.props.pathContext.slug
    return (
      <div>
        <Helmet>
          <script src="https://fast.wistia.com/embed/medias/x3j06nrfqu.jsonp" async></script>
          <script src="https://fast.wistia.com/embed/medias/4o2mxn9zbo.jsonp" async></script>
          <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
        </Helmet>
        {data.allContentYaml.edges.map(({node}) =>
          <div key={node.id}>
            <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc}/>
              <Above full center="xs">
                <Grid>
                  <Row>
                    <Col xs>
                      <Copy type="subheader" element="h1" child={node.body.hero.header}/>
                      <Copy type="header" element="h2">
                        {node.body.hero.body}
                        <div className="text-switcher">{node.body.hero.items.map(item => <span key={item}>{item}</span>)}</div>
                      </Copy>
                      <Input placeholder="Enter your email address"/>
                    </Col>
                  </Row>
                  <div className="proto">
                    <div className="proto-content"></div>
                    <Img src="/img/browser_frame.png" alt="browser frame"/>
                  </div>
                </Grid>
              </Above>
              <Logos
                src={node.body.customerLogos.logos}
                header={node.body.customerLogos.header}
                md={2}
                xs={4}
                middle="xs"/>
              <Row tagName="section" center="xs">
                <Grid>
                  <Row center="xs">
                    <Col xs={12} sm={12} md={8} lg={8}>
                      <Copy align="center" element="h3" child={node.body.why.header} type="header"/>
                    </Col>
                  </Row>
                  <TwoColumn ratio={{ xs:[12, 12], sm:[6,6], md:[4,8], lg:[4,8] }} middle="xs">
                    <Copy child={node.body.why.easy} type="subheader" element="h3"/>
                    <Img src="/img/make-own-project.svg" height="5rem" alt="No IMG"/>
                  </TwoColumn>
                  <TwoColumn ratio={{ xs:[12,12], sm:[6,6], md:[8,4], lg:[8,4] }} middle="xs">
                    <Img src="/img/collaboration.svg" alt="No IMG"/>
                    <Copy last="md" first="xs" child={node.body.why.scalable} type="subheader" element="h3"/>
                  </TwoColumn>
                </Grid>
              </Row>
              <Row tagName="section" center="xs">
                <Grid>
                  <Row className="compcards" center="xs">
                    <Col xs={12} lg={4} sm={12} className="compcards-content">
                      <Copy align="right" element="h2" type="header" child={node.body.customers.header}/>
                    </Col>
                    <Col xs={12} lg={8} sm={12}>
                      <Row>
                        <Col xs={12} sm={12} md className="compcards-card">
                          <div className="wistia_responsive_padding" style={{padding:'56.25% 0 0 0',position:'relative'}}>
                            <div className="wistia_responsive_wrapper" style={{height:'100%',left:'0',position:'absolute',top:'0',width:'100%'}}>
                              <div className="wistia_embed wistia_async_x3j06nrfqu popover=true seo=false popoverAnimateThumbnail=true" style={{height:'100%',width:'100%'}}>&nbsp;</div>
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} sm={12} md className="compcards-card">
                          <div className="wistia_responsive_padding" style={{padding:'56.25% 0 0 0',position:'relative'}}>
                            <div className="wistia_responsive_wrapper" style={{height:'100%',left:'0',position:'absolute',top:'0',width:'100%'}}>
                              <div className="wistia_embed wistia_async_4o2mxn9zbo popover=true seo=false popoverAnimateThumbnail=true" style={{height:'100%',width:'100%'}}>&nbsp;</div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Grid>
              </Row>
              <Row tagName="section" center="xs">
                <Grid>
                  <TwoColumn ratio={{ xs:[12, 12], sm:[6,6], md:[8,4], lg:[8,4] }}>
                    <Img src="#" alt="No IMG"/>
                    <Copy type="subheader" element="h2" child={node.body.collaboration.header}/>
                  </TwoColumn>
                </Grid>
              </Row>
              <Row tagName="section" style={{ backgroundColor: '#2980b9' }} center="xs">
                <Grid>
                  <Row center="xs">
                    <Col xs={10}>
                      <Copy type="header" element="h3" className="typo-white" child={node.body.indexFeatures.header}/>
                    </Col>
                    {node.body.indexFeatures.items.map((item, i) => {
                      return (
                        <Col xs={12} md lg={4} key={i}>
                          <div className="features-card">
                            <div className="features-card-icon">
                              <span className={`taskulu-icon ${item.icon}`}></span>
                            </div>
                            <div className="features-card-txt content-body">{item.text}</div>
                          </div>
                        </Col>
                      )
                    })}
                  </Row>
                  <Row center="xs">
                    <FormattedMessage id="btn.seeMore">
                      {(txt) =>
                        <a href="" className="btn button button-submit">{txt}</a>
                      }
                    </FormattedMessage>
                  </Row>
                </Grid>
              </Row>
              <Row tagName="section" center="xs">
                <Grid>
                  <Row center="xs">
                    <Col xs={12} lg={8}>
                      <Copy type="header" element="h2" child={node.body.ending.header}/>
                      <Copy type="body" element="p" child={node.body.ending.body}/>
                      <CTA className="button-submit" name="link.learnmore" href="#" type="internal" langKey={langKey}/>
                    </Col>
                  </Row>
                </Grid>
              </Row>
          </div>
        )}
      </div>
    )
  }
}

export default IndexPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
  query IndexFaPage {
    allContentYaml(
      filter: {
        header: {
          lang: { eq: "fa" }
          slug: { eq: "/" }
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
              items
            }
            why {
              header
              easy
              scalable
            }
            customerLogos {
              header
              logos {
                company
                alt
              }
            }
            customers {
              header
            }
            collaboration {
              header
            }
            indexFeatures {
              header
              items {
                icon
                text
              }
            }
            ending {
              header
              body
              cta
            }
          }
        }
      }
    }
  }
`