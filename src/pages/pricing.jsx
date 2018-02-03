import React from 'react'
import Link from 'gatsby-link'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy, Img } from '../components/Elements'
import { TwoColumn, Above } from '../components/Partials'

class Pricing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currency: '$',
      professionalPrice: 9,
      businessPrice: 25,
      monthlyChecked: true,
      annuallyChecked: false
    }
    this.switch = this.switch.bind(this)
  }
  componentDidMount() {
    $('.question-tab').on('click', function() {
      $(this).children().toggleClass('active')
      $(this).next('.question-body').slideToggle()
    })
  }
  switch(e) {
    var target = e.target.id
    if(target == 'monthly') {
      this.setState({
        professionalPrice: 9,
        businessPrice: 25
      })
    }
    if(target == 'annually') {
      this.setState({
        professionalPrice: 6,
        businessPrice: 20
      })
    }
  }
  render() {
    const data = this.props.data
    const langKey = this.props.pathContext.langKey
    const slug = this.props.pathContext.slug
    return (
      <div>
        {data.allContentYaml.edges.map(({node}) =>
        <div key={node.id}>
          <SEO
              pagePath={langKey}
              title={node.header.title}
              generalDesc={node.header.desc}/>
          <Above>
            <Grid>
              <Row center="xs">
                <Col xs>
                <Copy type="header" element="h1" child="Choose your pricing plan"/>
                <Copy type="body" element="p" child="Nulla occaecat mollit sint aliquip eu consequat consectetur non."/>
                </Col>
              </Row>
              <Row center="xs">
                <div className="switch-box">
                  <input type="radio" name="tab" id="monthly" onClick={this.switch} defaultChecked/>
                    <FormattedMessage id="label.monthly">
                    {(txt) => <label htmlFor="monthly">{txt}</label>}
                    </FormattedMessage>
                  <input type="radio" name="tab" id="annually" onClick={this.switch}/>
                    <FormattedMessage id="label.annually">
                    {(txt) => <label htmlFor="annually">{txt}</label>}
                    </FormattedMessage>
                  <span className="tab"></span>
                </div>
              </Row>
              <Row>
                <Col xs={12} sm={6} lg={3} className="plan-wrapper">
                  <div className="plan free">
                    <div className="spacer34"></div>
                    <Copy element="h2" className="plan-title" child="Free"/>
                    <Copy element="p" className="plan-text" child="Magna cillum commodo eu reprehenderit consectetur irure ipsum."/>
                    <span className="plan-model">Forever</span>
                    <div className="plan-price">
                      {node.body.plan.free.price}
                      <FormattedMessage id="pricing.mode"/>
                      <span>{node.body.plan.free.span}</span>
                    </div>
                    <div className="plan-list">
                      <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem, ipsum.</li>
                      </ul>
                      <FormattedMessage id="btn.register">
                      {(txt) =>
                        <Link to="" className="btn button button-normal">{txt}</Link>
                      }
                      </FormattedMessage>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={3} className="plan-wrapper">
                  <div className="plan professional">
                    <div className="spacer34"></div>
                    <Copy element="h2" className="plan-title" child="Professional"/>
                    <Copy element="p" className="plan-text" child="Magna cillum commodo eu reprehenderit consectetur irure ipsum."/>
                    <span className="plan-model">Starting at</span>
                    <div className="plan-price">
                      {this.state.professionalPrice + ' ' + this.state.currency}
                      <FormattedMessage id="pricing.mode"/>
                      <span>{node.body.plan.professional.span}</span>
                    </div>
                    <div className="plan-list">
                      <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem, ipsum.</li>
                      </ul>
                      <FormattedMessage id="btn.register">
                      {(txt) =>
                        <Link to="" className="btn button button-normal">{txt}</Link>
                      }
                      </FormattedMessage>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={3} className="plan-wrapper">
                  <div className="plan business">
                    <div className="plan-ribbon">
                    <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
                    best
                    </div>
                    <Copy element="h2" className="plan-title" child="Business"/>
                    <Copy element="p" className="plan-text" child="Magna cillum commodo eu reprehenderit consectetur irure ipsum."/>
                    <span className="plan-model">Starting at</span>
                    <div className="plan-price">
                      {this.state.businessPrice + ' ' + this.state.currency}
                      <FormattedMessage id="pricing.mode"/>
                      <span>{node.body.plan.business.span}</span>
                    </div>
                    <div className="plan-list">
                      <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem, ipsum.</li>
                      </ul>
                      <FormattedMessage id="btn.register">
                      {(txt) =>
                        <Link to="" className="btn button button-normal">{txt}</Link>
                      }
                      </FormattedMessage>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={3} className="plan-wrapper">
                  <div className="plan dedicated">
                    <div className="spacer34"></div>
                    <Copy element="h2" className="plan-title" child="Dedicated"/>
                    <Copy element="p" className="plan-text" child="Magna cillum commodo eu reprehenderit consectetur irure ipsum."/>
                    <div className="plan-price">
                      {node.body.plan.dedicated.price}
                    </div>
                    <div className="plan-list">
                      <FormattedMessage id="btn.contact">
                        {(txt) =>
                          <Link to="" className="btn button button-normal">{txt}</Link>
                        }
                      </FormattedMessage>
                      <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem, ipsum.</li>
                      </ul>
                      <FormattedMessage id="btn.contact">
                      {(txt) =>
                        <Link to="" className="btn button button-normal">{txt}</Link>
                      }
                      </FormattedMessage>
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </Above>
          <Row tagName="section" style={{backgroundColor: '#f6f8f9'}}>
            <Grid>
              <Row center="xs">
                <Col xs={10} sm={10} lg={8} className="faq">
                  <Copy type="header" element="h2" child={node.body.faq.header}/>
                  <div className="faq-question-wrapper">
                    <Copy type="subheader" element="h3" className="question-type" child="Question Type"/>
                    <div>
                      <div className="question-tab">
                        <div className="question-tab-inner">
                          <Copy type="body" element="p" child="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, obcaecati."/>
                        </div>
                      </div>
                      <div className="question-body">
                        <div className="question-body-inner">
                          <Copy type="type" element="p" child="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus veniam voluptas, quidem illum dignissimos temporibus asperiores."/>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Pricing

/**
 * Require data from fa yaml
 */
export const pricingQuery = graphql `
query PricingPage {
  allContentYaml(
    filter: {
      header: {
        lang: { eq: "en" }
        slug: { eq: "/pricing" }
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
          plan {
            free {
              header
              desc
              span
              price
              features
            }
            professional {
              header
              desc
              span
              price
              features
            }
            business {
              header
              desc
              span
              price
              features
            }
            dedicated {
              header
              desc
              price
              features
            }
          }
          faq {
            header
            services {
              header
              items {
                question
                answer
              }
            }
            payments {
              header
              items {
                question
                answer
              }
            }
            security {
              header
              items {
                question
                answer
              }
            }
            legality {
              header
              items {
                question
                answer
              }
            }
          }
        }
      }
    }
  }
}
`