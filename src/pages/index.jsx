import React from 'react'
import graphql from 'graphql'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import Input from '../components/Input'
import { Copy, CTA, Img } from '../components/Elements'
import { TwoColumn, Above } from '../components/Partials'

const IndexPage = (props) => {
  const { data } = props
  const { slug, langKey } = props.pathContext
  return (
    <div>
      {data.allContentYaml.edges.map(({node}) =>
        <div key={node.id}>
          <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc}/>
          <Above full center="xs">
            <Grid>
              <Row>
                <Col className="content" xs>
                  <h1 className="content-head">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, laboriosam!</h1>
                  <Input placeholder="Enter your email address" />
                </Col>
              </Row>
              <div className="proto">
                <div className="proto-content"></div>
                <img src="/img/browser_frame.png" alt="browser frame" />
              </div>
            </Grid>
          </Above>
          <Row tagName="section" center="xs">
            <Grid>
              <Row center="xs">
                <Col xs={12} sm={12} md={8} lg={8}>
                  <Copy align="center" element="h3" child="Lorem ipsum, dolor sit amet consectetur adipisicing elit." type="header"/>
                </Col>
              </Row>
              <TwoColumn ratio={{ xs:[12, 12], sm:[6,6], md:[4,8], lg:[4,8] }}>
                <Copy child="Lorem ipsum, dolor sit amet consectetur adipisicing elit." type="subheader" element="h3"/>
                <Img src="#" alt="No IMG"/>
              </TwoColumn>
              <TwoColumn ratio={{ xs:[12, 12], sm:[6,6], md:[8,4], lg:[8,4] }}>
                <Img src="#" alt="No IMG"/>
                <Copy child="Lorem ipsum, dolor sit amet consectetur adipisicing elit." type="subheader" element="h3"/>
              </TwoColumn>
            </Grid>
          </Row>
          <Row tagName="section" style={{ backgroundColor: '#f6f8f9' }} center="xs">
            <Grid>
              <TwoColumn ratio={{ xs:[12, 12], sm:[6,6], md:[4,8], lg:[4,8] }}>
                <div>
                  <Copy child="Lorem ipsum, dolor sit amet consectetur adipisicing elit." type="header" element="h2"/>
                  <Copy child="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa nemo repudiandae aspernatur neque voluptatibus ut fugit vero fuga obcaecati possimus quod magnam tempore illum rerum, autem nihil repellendus numquam?" type="body" element="p"/>
                </div>
                <Img src="#" alt="No IMG"/>
              </TwoColumn>
            </Grid>
          </Row>
          <Row tagName="section" style={{backgroundColor: '#2980b9'}} center="xs">
            <Grid>
              <Row className="testimonial" center="xs">
                <Col lg={4} md={6} xs={12}>
                  <a className="testimonial-media" href="">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                  </a>
                </Col>
                <Col className="testimonial-content" lg={4} md={6} xs={12}>
                  <h3 className="testimonial-content-head">Lorem ipsum dolor sit.</h3>
                  <span className="testimonial-content-subhead">Lorem ipsum dolor sit amet.</span>
                  <p className="testimonial-content-quote">" Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis quia perspiciatis iusto iste doloribus
                    voluptatem et impedit consequuntur optio! "</p>
                </Col>
              </Row>
            </Grid>
          </Row>
          <Row tagName="section" center="xs">
            <Grid>
              <Row className="compcards" center="xs">
                <Col xs={12} lg={4} sm={12} className="compcards-content">
                  <Copy align="left" element="h3" type="subheader" child="Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam consectetur obcaecati tempora, aut assumenda quasi nemo voluptates error modi."/>
                </Col>
                <Col xs={12} lg={8} sm={12}>
                  <Row>
                    <Col xs={12} sm={12} className="compcards-card">
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Row>
          <Row tagName="section" center="xs">
            <Grid>
              <Row center="xs">
                <Col xs={12} lg={8}>
                  <Copy type="header" element="h2" child="Lorem ipsum dolor sit amet."/>
                  <Copy type="body" element="p" child="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo odio saepe cupiditate consequatur velit Aliquid aliquam quam non eius!"/>
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

export default IndexPage

/**
 * Require data from en yaml
 */
export const pageQuery = graphql `
query IndexPage {
  allContentYaml(
    filter: {
      header: {
        lang: { eq: "en" }
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
      }
    }
  }
}
`
