import React from 'react'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import { Row, Col } from 'react-flexbox-grid'
import $ from 'jquery'
import { TweenLite } from 'gsap'
import Img from 'gatsby-image'
import { ImageFinder } from '../components/ImageFinder'

import SEO from '../components/SEO'
import Input from '../components/Input'
import { Copy, CTA } from '../components/Elements'
import { Above, Logos } from '../components/Partials'

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
    return (
      <div>
        {data.allContentYaml.edges.map(({node}) =>
          <div key={node.id}>
            <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc}/>
            <Above className="gradient-blue-green curved"  center="xs" full hasGradient>
              <Col xs={10}>
                <Row>
                  <Col xs={12} lg={6}>
                    <h2 className="home-hero">
                      {node.body.hero.body}
                      <div className="text-switcher">{node.body.hero.items.map(item => <span key={item}>{item}</span>)}</div>
                    </h2>
                    <Input placeholder="Enter your email address"/>
                  </Col>
                  <Col xs={12} lg={6} className="proto">
                    <div className="proto-content">
                      <Img sizes={data.product.sizes} />
                    </div>
                      <Img sizes={data.wireframe.sizes} />
                  </Col>
                </Row>
              </Col>
            </Above>
            <Logos
              src={node.body.customerLogos.logos}
              header={node.body.customerLogos.header}
              md={2}
              xs={4}
              middle="xs"
              center="xs"/>
            <Row tagName="section" center="xs" middle="xs" className="homewhy">
              <span className="left"></span>
              <Col xs={12} lg={6} className="content-wrapper">
                <Copy child={node.body.why.easy.title} type="whyheader" element="h3" align="center"/>
              </Col>
              <Col xs={12} lg={4} lgOffset={2} style={{ textAlign: 'center' }}>
                <ImageFinder images={data.whyPhotos} name="why-easy.png"/>
              </Col>
            </Row>
            <Row tagName="section" center="xs" middle="xs" className="homewhy reverse-order">
              <span className="right"></span>
              <Col xs={12} lg={6} style={{ textAlign: 'center' }}>
                <ImageFinder images={data.whyPhotos} name="why-scalable.png"/>
              </Col>
              <Col xs={12} lg={4} lgOffset={2} className="content-wrapper">
                <Copy child={node.body.why.scalable.title} type="whyheader" element="h3" align="center" noEscape/>
              </Col>
            </Row>
            {langKey==='fa' ?
             <a href={node.body.customers.src} style={{textDecoration: "none"}}>
               <Row style={{backgroundImage: "url('/img/saeed.png')"}} className="video-background" tagName="section" end="xs">
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
                   <Col xs={10} md={3} lg={3} key={i}>
                     <div className="features-card">
                       <div className="features-card-icon">
                         <img src={item.icon} width="40%" />
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
                  {node.body.demoCTA.headerParts[0]} &nbsp;
                  <FormattedMessage id={node.body.demoCTA.headerParts[1]}/> &nbsp;
                  {node.body.demoCTA.headerParts[2]}
                </h2>
              </Col>
              <Col xs={10} lg={6}>
                <Copy type="announce-white" element="p" child={node.body.demoCTA.body} noEscape/>
                <CTA className="button-blue" name="btn.demo" href="/enterprise" type="internal" langKey={langKey}/>
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
 * Require data from fa yaml and images
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
              easy {
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
              headerParts
              body
              cta
            }
          }
        }
      }
    }
    wireframe: imageSharp( id: { regex: "/macbook-mockup/" } ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    product: imageSharp( id: { regex: "/project-preview-fa/" } ) {
      sizes {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    whyPhotos: allImageSharp (
      filter: {
        id: { regex: "/why-/" }
      }
    ){
      edges {
        node {
          id
          resolutions(width: 400, height: 400) {
            ...GatsbyImageSharpResolutions_noBase64
          }
        }
      }
    }
  }
`
