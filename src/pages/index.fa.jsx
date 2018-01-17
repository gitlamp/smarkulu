import React from 'react'
import PropTypes, { func } from 'prop-types'
import Link from 'gatsby-link'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import Helmet from 'react-helmet'
import $ from 'jquery'
import { TweenLite } from 'gsap'

import SEO from '../components/SEO'
import Input from '../components/Input'
import { Section } from '../components/Section'
import { Grid, Row, Col} from 'react-flexbox-grid'
import { Copy, Img} from '../components/Elements'
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
        <Grid fluid>
          <Helmet>
            <script src="https://fast.wistia.com/embed/medias/x3j06nrfqu.jsonp" async></script>
            <script src="https://fast.wistia.com/embed/medias/4o2mxn9zbo.jsonp" async></script>
            <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
          </Helmet>

          {data.allContentYaml.edges.map(({node}) =>
            <div key={node.id}>
              <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc}/>
              <Above full center="xs">
                <Col xs={12}>
                  <Copy type="subheader" element="h1" copy={node.body.hero.header} />
                </Col>
                <Col xs={12}>
                  <Copy type="header" element="h2">
                    {node.body.hero.body}
                    <div className="text-switcher">{node.body.hero.items.map(item => <span key={item}>{item}</span>)}</div>
                  </Copy>
                </Col>
                <Col xs={12}>
                  <Input placeholder="Enter your email address" />
                </Col>
                <Col xs={12}>
                  <div className="proto">
                    <div className="proto-content"></div>
                    <Img src="/img/browser_frame.png" alt="browser frame" />
                  </div>
                </Col>
              </Above>
              <Logos
                src={node.body.customerLogos.logos}
                style={{maxWidth: 1000+'px'}}
                header={node.body.customerLogos.header}/>
              <Row tagName="section">
                <Col xs={12}>
                  <Copy align="center" element="h3" copy={node.body.why.header} type="header"/>
                </Col>
                <TwoColumn ratio={[4,8]} >
                  <Copy copy={node.body.why.easy} type="subheader" element="h3" />
                  <Img src="img/placeholder.png" />
                </TwoColumn>
                <TwoColumn ratio={[8,4]} >
                  <Img src="img/placeholder.png" />
                  <Copy last="md" first="xs" copy={node.body.why.scalable} type="subheader" element="h3" />
                </TwoColumn>
              </Row>
              <Row tagName="section" center className="compcards">
                <Col xs={12} md={4} className="compcards-content">
                  <Copy align="right" element="h2" type="header" copy={node.body.customers.header} />
                </Col>
                <Col xs={12} md={3} className="compcards-card">
                  <div className="wistia_responsive_padding" style={{padding:'56.25% 0 0 0',position:'relative'}}>
                    <div className="wistia_responsive_wrapper" style={{height:'100%',left:'0',position:'absolute',top:'0',width:'100%'}}>
                      <div className="wistia_embed wistia_async_x3j06nrfqu popover=true seo=false popoverAnimateThumbnail=true" style={{height:'100%',width:'100%'}}>&nbsp;</div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={3} className="compcards-card">
                  <div className="wistia_responsive_padding" style={{padding:'56.25% 0 0 0',position:'relative'}}>
                    <div className="wistia_responsive_wrapper" style={{height:'100%',left:'0',position:'absolute',top:'0',width:'100%'}}>
                      <div className="wistia_embed wistia_async_4o2mxn9zbo popover=true seo=false popoverAnimateThumbnail=true" style={{height:'100%',width:'100%'}}>&nbsp;</div>
                    </div>
                  </div>
                </Col>
              </Row>
              <TwoColumn ratio={[4,8]}>
                <Copy type="subheader" element="h2" copy={node.body.collaboration.header} />
                <Img src="img/placeholder.png" alt="browser frame" />
              </TwoColumn>
              <Row tagName="section" style={{ backgroundColor: '#2980b9'}}>
                {node.body.indexFeatures.map((item,i) => {
                   return (
                     <Col xs="12" md="3" key={"feature"+i}>
                      <div className="features-card">
                         <div className="features-card-icon"></div>
                         <div className="content-body">{item.text}</div>
                      </div>
                     </Col>
                   )
                })}
              </Row>
              <section style={{ backgroundColor: '#2980b9' }}>
                <div className="container">
                  <div className="row">
                    {node.body.indexFeatures.map(item => {
                       return (
                         <div className="col-12 col-md-6 col-lg-3" key={item.text}>
                           <div className="features-card">
                             <div className="features-card-icon"></div>
                             <div className="content-body">{item.text}</div>
                           </div>
                         </div>
                       )
                    })}
                  </div>
                  <div className="row justify-content-center">
                    <FormattedMessage id="btn.seeMore">
                      {(txt) =>
                        <a href="" className="btn button button-submit">{txt}</a>
                      }
                    </FormattedMessage>
                  </div>
                </div>
              </section>
              <Section
                langKey={langKey}
                align="center"
                colClass={{ center: 'col-12 col-sm-12 col-xl-8' }}
                header={node.body.ending.header}
                body={node.body.ending.body}
                cta={node.body.ending.cta}/>
            </div>
          )}
        </Grid>
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
              logos
                {
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
              icon
              text
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
