import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import Helmet from 'react-helmet'

import SEO from '../components/SEO'
import Input from '../components/Input'
import { Section, Logos } from '../components/Section'

const IndexPage = (props) => {
  const { data } = props
  const { slug, langKey } = props.pathContext
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
              <div className="col text-center content">
                <h1 className="content-head">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, laboriosam!</h1>
                <Input placeholder="Enter your email address" />
              </div>
            </div>
            <div className="proto">
              <div className="proto-content"></div>
              <img src="/img/browser_frame.png" alt="browser frame" />
            </div>
          </div>
        </section>
        <Logos src={[ 'MA11-Modern.png', 'MA13-Zibaloon.jpg', 'MA27-DMC.png', 'SD11-Fanap.png', 'SD25-Raycom.png']} isgray/>
        <Section
          langKey={langKey}
          align="center"
          colClass={{ center: 'col-12 col-sm-12 col-xl-8' }}
          header="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa nemo repudiandae aspernatur neque voluptatibus ut fugit vero fuga obcaecati possimus quod magnam tempore illum rerum, autem nihil repellendus numquam?"/>
        <Section
          langKey={langKey}
          align="left"
          colClass={{ left: 'col-12 col-sm-6 col-xl-4', right: 'col-12 col-sm-6 col-xl-8' }}
          header="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa nemo repudiandae aspernatur neque voluptatibus ut fugit vero fuga obcaecati possimus quod magnam tempore illum rerum, autem nihil repellendus numquam?"
          style={{backgroundColor: '#f6f8f9'}}/>
        <Section
          langKey={langKey}
          align="right"
          colClass={{ left: 'col-12 col-sm-6 col-xl-8', right: 'col-12 col-sm-6 col-xl-4'}} 
          header="Lorem, ipsum dolor."
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vero inventore labore nisi cum itaque expedita nihil unde. Ratione enim ex est sed explicabo praesentium, aliquid maxime vitae libero nostrum reprehenderit nemo. Reiciendis, et autem."/>
        <section style={{backgroundColor: '#2980b9'}}>
          <div className="container">
            <div className="row justify-content-center align-items-center testimonial">
              <div className="col-12 col-sm-6 col-xl-4">
                <a className="testimonial-media" href="#">
                  <i className="fa fa-play-circle" aria-hidden="true"></i>
                </a>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 testimonial-content">
                <h3 className="testimonial-content-head">Lorem ipsum dolor sit.</h3>
                <span className="testimonial-content-subhead">Lorem ipsum dolor sit amet.</span>
                <p className="testimonial-content-quote">" Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis quia perspiciatis iusto iste doloribus
                  voluptatem et impedit consequuntur optio! "</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center compcards">
              <div className="col-12 col-sm-12 col-xl-4 compcards-content">
                <div className="content align-items-right">
                  <h2 className="content-head">Lorem ipsum dolor sit amet.</h2>
                  <p className="content-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam consectetur obcaecati tempora, aut assumenda
                    quasi nemo voluptates error modi.</p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-xl-8 row">
                <div className="col compcards-card">
                  <div className="wistia_responsive_padding" style={{padding:'56.25% 0 0 0',position:'relative'}}>
                    <div className="wistia_responsive_wrapper" style={{height:'100%',left:'0',position:'absolute',top:'0',width:'100%'}}>
                      <div className="wistia_embed wistia_async_x3j06nrfqu popover=true seo=false popoverAnimateThumbnail=true" style={{height:'100%',width:'100%'}}>&nbsp;</div>
                    </div>
                  </div>
                </div>
                <div className="col compcards-card">
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
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-xl-8 content text-center">
                <h2 className="content-head">Lorem ipsum dolor sit amet.</h2>
                <p className="content-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo odio saepe cupiditate consequatur velit!
                  Aliquid aliquam quam non eius!</p>
                <Input placeholder="Enter your email address" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )}
  </div>
  )
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
          lang: { regex: "/fa/" }
          slug: { regex: "/\/$/ig" }
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
        }
      }
    }
  }
`