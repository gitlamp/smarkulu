import React from 'react'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import Helmet from 'react-helmet'
import $ from 'jquery'
import { TweenLite } from 'gsap'

import SEO from '../components/SEO'
import Input from '../components/Input'
import { Section, Logos } from '../components/Section'

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
            <section className="above above-full">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="content">
                      <h1 className="content-head">{node.body.hero.header}</h1>
                      <div className="content-body">
                        {node.body.hero.body}
                        <div className="text-switcher">{node.body.hero.items.map(item => <span key={item}>{item}</span>)}</div>
                      </div>
                    </div>
                    <Input placeholder="Enter your email address" />
                  </div>
                </div>
                <div className="proto">
                  <div className="proto-content"></div>
                  <img src="/img/browser_frame.png" alt="browser frame" />
                </div>
              </div>
            </section>
            <Logos src={[ 'MA11-Modern.png', 'MA13-Zibaloon.jpg', 'MA27-DMC.png', 'SD11-Fanap.png', 'SD25-Raycom.png']}/>
            <Section
              langKey={langKey}
              align="center"
              colClass={{ center: 'col-12 col-sm-12 col-xl-8' }}
              header={node.body.why.header}/>
            <Section
              langKey={langKey}
              align="left"
              colClass={{ left: 'col-12 col-sm-6 col-xl-4', right: 'col-12 col-sm-6 col-xl-8' }}
              header={node.body.why.easy}/>
            <Section
              langKey={langKey}
              align="right"
              colClass={{ left: 'col-12 col-sm-6 col-xl-8', right: 'col-12 col-sm-6 col-xl-4' }}
              header={node.body.why.scalable}/>
            <section data-headstate="dark">
              <div className="container">
                <div className="row align-items-center compcards">
                  <div className="col-12 col-sm-12 col-xl-4 compcards-content">
                    <div className="content align-items-right">
                      <h2 className="content-head">{node.body.customers.header}</h2>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-xl-8 row">
                    <div className="col-12 col-sm-12 col-md compcards-card">
                      <div className="wistia_responsive_padding" style={{padding:'56.25% 0 0 0',position:'relative'}}>
                        <div className="wistia_responsive_wrapper" style={{height:'100%',left:'0',position:'absolute',top:'0',width:'100%'}}>
                          <div className="wistia_embed wistia_async_x3j06nrfqu popover=true seo=false popoverAnimateThumbnail=true" style={{height:'100%',width:'100%'}}>&nbsp;</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md compcards-card">
                      <div className="wistia_responsive_padding" style={{padding:'56.25% 0 0 0',position:'relative'}}>
                        <div className="wistia_responsive_wrapper" style={{height:'100%',left:'0',position:'absolute',top:'0',width:'100%'}}>
                          <div className="wistia_embed wistia_async_4o2mxn9zbo popover=true seo=false popoverAnimateThumbnail=true" style={{height:'100%',width:'100%'}}>&nbsp;</div>
                        </div>
                      </div>
                    </div>
                    <div className="w-100"></div>
                    <a className="col compcards-card" href="#"></a>
                    <a className="col compcards-card" href="#"></a>
                    <a className="col compcards-card" href="#"></a>
                  </div>
                </div>
              </div>
            </section>
            <Section
              langKey={langKey}
              align="right"
              colClass={{ left: 'col-12 col-sm-6 col-xl-8', right: 'col-12 col-sm-6 col-xl-4' }}
              header={node.body.collaboration.header}/>
              <section style={{ backgroundColor: '#2980b9' }} data-headstate="dark">
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