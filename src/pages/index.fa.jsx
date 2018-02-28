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
        {data.allContentYaml.edges.map(({node}) =>
          <div key={node.id}>
            <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc}/>
            <Above full center="xs">
              <Grid>
                <Row>
                  <Col xs>
                    <h2 className="home-hero">
                      {node.body.hero.body}
                      <div className="text-switcher">{node.body.hero.items.map(item => <span key={item}>{item}</span>)}</div>
                    </h2>
                    <Input placeholder="Enter your email address"/>
                  </Col>
                </Row>
                <div className="proto">
                  <div className="proto-content"></div>
                  <Img src="/img/home-hero.png" alt="browser frame"/>
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
              <Col xs={8} style={{backgroundImage: "url('/img/make-own-project.svg')"}} className="homewhy">
                <Copy child={node.body.why.eazy.title} type="whyheader" element="h3" align="right" />
              </Col>
              <Col xs={8} style={{backgroundImage: "url('/img/collaboration.svg')"}} className="homewhy">
                <Copy style={{float: "left"}} align="right" child={node.body.why.scalable.title} type="whyheader" element="h3"/>
              </Col>
            </Row>
            {langKey==='fa' ?
              <a href={node.body.customers.src} style={{textDecoration: "none"}}>
                <Row style={{backgroundImage: "url('/img/saeed.png')"}} className="video-background" ragName="section" end="xs">
                  <i className="fa fa-play-circle"></i>
                  <Col xs={3} xsOffset={8}>
                    <Copy type="video-copy" element="h3" align="right" child={node.body.customers.header} />
                  </Col>
                </Row>
              </a>:null}
            <Row tagName="section" className="block-tour" center="xs">
              <Col xs={10}>
                <Copy type="header" element="h3" className="title" child={node.body.indexFeatures.header}/>
              </Col>
              {node.body.indexFeatures.items.map((item, i) => {
                 return (
                   <Col xs={10} md lg={3} key={i}>
                     <div className="features-card">
                       <div className="features-card-icon">
                         <Img src={item.icon} width="40%" />
                       </div>
                       <div className="features-card-txt content-title">
                         {item.text}
                       </div>
                     </div>
                   </Col>
                 )})}
              <Col xs={10}>
                <CTA type="internal" href="/product" langKey={langKey} className="button-submit" name="btn.product" />
              </Col>
            </Row>
            <Row column style={{alignItems: "center"}} tagName="section" center="xs" className="block-cta">
              <Col xs={10} lg={6}>
                <h2 className="content-subheader">
                  {/* {[0,1,2].map((item) => {
                      <FormattedMessage id={node.body.demoCTA.headerParts[0]} />
                      })} */}
                  <FormattedMessage id={node.body.demoCTA.headerParts[0]} /> &nbsp;
         <FormattedMessage id={node.body.demoCTA.headerParts[1]} /> &nbsp;
         {node.body.demoCTA.headerParts[2]}
                </h2>
              </Col>
              <Col xs={10} lg={6}>
                <Copy type="announce-white" element="p" child={node.body.demoCTA.body}/>
                <CTA className="button-white" name="btn.demo" href="/enterprise" type="internal" langKey={langKey}/>
              </Col>
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
              eazy {
                title
                img
              }
              scalable {
                title
                img
              }
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
              img
              src
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
            demoCTA {
              header
              headerParts
              body
              cta
            }
          }
        }
      }
    }
  }
`
