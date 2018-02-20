import React from 'react'
import Link from 'gatsby-link'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { toPersianDigits } from '../components/functions'
import { Copy, Img } from '../components/Elements'
import { TwoColumn, Above } from '../components/Partials'

class Pricing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currency: 'تومان',
      professionalPrice: 9000,
      businessPrice: 25000,
      monthlyChecked: true,
      annuallyChecked: false
    }
    this.switch = this.switch.bind(this)
  }
  componentDidMount() {
    $('.question-tab').on('click', function() {
      $(this).children().toggleClass('active')
      $(this).parent().toggleClass('parent-white')
      $(this).next('.question-body').slideToggle()
    })
  }
  switch(e) {
    var target = e.target.id
    if(target == 'monthly') {
      this.setState({
        professionalPrice: 9000,
        businessPrice: 25000
      })
    }
    if(target == 'annually') {
      this.setState({
        professionalPrice: 6000,
        businessPrice: 20000
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
          <Above center="xs">
            <Grid>
              <Row>
                <Col xs>
                  <Copy type="header" element="h1" child={node.body.hero.header}/>
                  <Copy type="body" element="p" child={node.body.hero.body}/>
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
                    <Copy element="h2" className="plan-title" child={node.body.plan.free.header}/>
                    <Copy element="p" className="plan-text" child={node.body.plan.free.desc}/>
                    <div className="plan-price">
                      {node.body.plan.free.price}
                      <FormattedMessage id="pricing.mode"/>
                      <span>{node.body.plan.free.span}</span>
                    </div>
                    <div className="plan-list">
                      <FormattedMessage id="btn.register">
                      {(txt) =>
                        <Link to="" className="btn button button-normal">{txt}</Link>
                      }
                      </FormattedMessage>
                      <ul>
                        {node.body.plan.free.features.map(item => <li key={item}>{item}</li> )}
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={3} className="plan-wrapper">
                  <div className="plan professional">
                  <div className="spacer34"></div>
                    <Copy element="h2" className="plan-title" child={node.body.plan.professional.header}/>
                    <Copy element="p" className="plan-text" child={node.body.plan.professional.desc}/>
                    <div className="plan-price">
                      {toPersianDigits(this.state.professionalPrice) + ' ' + this.state.currency}
                      <FormattedMessage id="pricing.mode"/>
                      <span>{node.body.plan.professional.span}</span>
                    </div>
                    <div className="plan-list">
                      <FormattedMessage id="btn.register">
                      {(txt) =>
                        <Link to="" className="btn button button-normal">{txt}</Link>
                      }
                      </FormattedMessage>
                      <ul>
                        {node.body.plan.professional.features.map(item => <li key={item}>{item}</li> )}
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={3} className="plan-wrapper">
                  <div className="plan business">
                    <div className="plan-ribbon">
                    <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <Copy element="h2" className="plan-title" child={node.body.plan.business.header}/>
                    <Copy element="p" className="plan-text" child={node.body.plan.business.desc}/>
                    <div className="plan-price">
                      {toPersianDigits(this.state.businessPrice) + ' ' + this.state.currency}
                      <FormattedMessage id="pricing.mode"/>
                      <span>{node.body.plan.business.span}</span>
                    </div>
                    <div className="plan-list">
                      <FormattedMessage id="btn.register">
                      {(txt) =>
                        <Link to="" className="btn button button-normal">{txt}</Link>
                      }
                      </FormattedMessage>
                      <ul>
                        {node.body.plan.business.features.map(item => <li key={item}>{item}</li> )}
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} lg={3} className="plan-wrapper">
                  <div className="plan dedicated">
                    <div className="spacer34"></div>
                    <Copy element="h2" className="plan-title" child={node.body.plan.dedicated.header}/>
                    <Copy element="p" className="plan-text" child={node.body.plan.dedicated.desc}/>
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
                        {node.body.plan.dedicated.features.map(item => <li key={item}>{item}</li> )}
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </Above>
          <Row tagName="section" style={{backgroundColor: '#f6f8f9'}} center="xs">
            <Grid>
              <Row center="xs">
                <Col xs={10} sm={10} lg={8} className="faq">
                  <Copy type="header" element="h2" child={node.body.faq.header}/>
                  <div className="faq-question-wrapper">
                    <Copy type="subheader" element="h3" className="question-type" child={node.body.faq.services.header}/>
                    {node.body.faq.services.items.map((item, i) =>
                      <div key={i}>
                        <div className="question-tab">
                          <div className="question-tab-inner">
                            <Copy type="" element="p" child={item.question}/>
                          </div>
                        </div>
                        <div className="question-body">
                          <div className="question-body-inner">
                            <Copy type="" element="p" child={item.answer}/>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="faq-question-wrapper">
                  <Copy type="subheader" element="h3" className="question-type" child={node.body.faq.payments.header}/>
                    {node.body.faq.payments.items.map(item =>
                      <div key={item.question}>
                        <div className="question-tab">
                          <div className="question-tab-inner">
                            <Copy type="" element="p" child={item.question}/>
                          </div>
                        </div>
                        <div className="question-body">
                          <div className="question-body-inner">
                            <Copy type="" element="p" child={item.answer}/>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="faq-question-wrapper">
                    <Copy type="subheader" element="h3" className="question-type" child={node.body.faq.security.header}/>
                    {node.body.faq.security.items.map(item =>
                      <div key={item.question}>
                        <div className="question-tab">
                          <div className="question-tab-inner">
                            <Copy type="" element="p" child={item.question}/>
                          </div>
                        </div>
                        <div className="question-body">
                          <div className="question-body-inner">
                            <Copy type="" element="p" child={item.answer}/>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="faq-question-wrapper">
                    <Copy type="subheader" element="h3" className="question-type" child={node.body.faq.legality.header}/>
                    {node.body.faq.legality.items.map(item =>
                      <div key={item.question}>
                        <div className="question-tab">
                          <div className="question-tab-inner">
                            <Copy type="" element="p" child={item.question}/>
                          </div>
                        </div>
                        <div className="question-body">
                          <div className="question-body-inner">
                            <Copy type="" element="p" child={item.answer}/>
                          </div>
                        </div>
                      </div>
                    )}
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
export const pricingFaQuery = graphql `
query PricingFaPage {
  allContentYaml(
    filter: {
      header: {
        lang: { eq: "fa" }
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
                answer
                question
              }
            }
            payments {
              header
              items {
                answer
                question
              }
            }
            security {
              header
              items {
                answer
                question
              }
            }
            legality {
              header
              items {
                answer
                question
              }
            }
          }
        }
      }
    }
  }
}
`