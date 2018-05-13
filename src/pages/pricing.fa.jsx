import React from 'react'
import Link from 'gatsby-link'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import { Grid, Row, Col } from 'react-flexbox-grid'
import CountUp, { startAnimation } from 'react-countup'

import SEO from '../components/SEO'
import { toPersianDigits, genLink } from '../components/functions'
import { Copy } from '../components/Elements'
import { Above } from '../components/Partials'
import { expandDetails } from '../components/functions'

class Pricing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currency: 'تومان',
      startProfessionalPrice: 0,
      startBusinessPrice: 0,
      endProfessionalPrice: 9000,
      endBusinessPrice: 25000,
      monthlyChecked: true,
      annuallyChecked: false
    }
    this.switch = this.switch.bind(this)
  }
  componentDidMount() {
    expandDetails('faq-tab','faq-tab-answer')
  }
  switch(e) {
    var target = e.target.id
    startAnimation(this.myCountUp)
    if(target == 'monthly') {
      this.setState({
        startProfessionalPrice: 6000,
        startBusinessPrice: 20000,
        endProfessionalPrice: 9000,
        endBusinessPrice: 25000
      })
    }
    if(target == 'annually') {
      this.setState({
        startProfessionalPrice: 9000,
        startBusinessPrice: 25000,
        endProfessionalPrice: 6000,
        endBusinessPrice: 20000
      })
    }
  }
  render() {
    const data = this.props.data
    const langKey = this.props.pathContext.langKey
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
                    <Copy type="content" element="p" child={node.body.hero.body}/>
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
                <Row center="xs">
                  <Col xs={10} sm={6} lg={3} className="plan-wrapper">
                    <div className="plan free">
                      <div className="spacer30"></div>
                      <h2 className="plan-title">{node.body.plan.free.header}</h2>
                      <p className="plan-text">{node.body.plan.free.desc}</p>
                      <div className="plan-price">
                        {node.body.plan.free.price}
                        <FormattedMessage id="pricing.mode"/>
                        <span>{node.body.plan.free.span}</span>
                      </div>
                      <FormattedMessage id="btn.register">
                        {(txt) =>
                          <a href={`${process.env.LOGIN_LINK}` + langKey} className="button button-white">{txt}</a>
                        }
                      </FormattedMessage>
                      <div className="plan-list">
                        <ul>
                          {node.body.plan.free.features.map(item => <li key={item}>{item}</li> )}
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col xs={10} sm={6} lg={3} className="plan-wrapper">
                    <div className="plan professional">
                      <div className="spacer30"></div>
                      <h2 className="plan-title">{node.body.plan.professional.header}</h2>
                      <p className="plan-text">{node.body.plan.professional.desc}</p>
                      <div className="plan-price">
                        <CountUp
                          className="number"
                          start={this.state.startProfessionalPrice}
                          end={this.state.endProfessionalPrice}
                          duration={1}
                          formattingFn={toPersianDigits}
                          suffix={this.state.currency}
                          ref={(countUp) => this.myCountUp = countUp}/>
                        <span className="number">{this.state.currency}</span>
                        <FormattedMessage id="pricing.mode"/>
                        <span>{node.body.plan.professional.span}</span>
                      </div>
                      <FormattedMessage id="btn.register">
                        {(txt) =>
                          <a href={`${process.env.LOGIN_LINK}` + langKey} className="button button-white">{txt}</a>
                        }
                      </FormattedMessage>
                      <div className="plan-list">
                        <ul>
                          {node.body.plan.professional.features.map(item => <li key={item}>{item}</li> )}
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col xs={10} sm={6} lg={3} className="plan-wrapper">
                    <div className="plan business">
                      <div className="plan-ribbon">
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                      </div>
                      <h2 className="plan-title">{node.body.plan.business.header}</h2>
                      <p className="plan-text">{node.body.plan.business.desc}</p>
                      <div className="plan-price">
                        <CountUp
                          className="number"
                          start={this.state.startBusinessPrice}
                          end={this.state.endBusinessPrice}
                          duration={1}
                          formattingFn={toPersianDigits}
                          prefix={this.state.currency}
                          ref={(countUp) => this.myCountUp = countUp}/>
                        <span className="number">{this.state.currency}</span>
                        <FormattedMessage id="pricing.mode"/>
                        <span>{node.body.plan.business.span}</span>
                      </div>
                      <FormattedMessage id="btn.register">
                        {(txt) =>
                          <a href={`${process.env.LOGIN_LINK}` + langKey} className="button button-white">{txt}</a>
                        }
                      </FormattedMessage>
                      <div className="plan-list">
                        <ul>
                          {node.body.plan.business.features.map(item => <li key={item}>{item}</li> )}
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col xs={10} sm={6} lg={3} className="plan-wrapper">
                    <div className="plan dedicated">
                      <div className="spacer30"></div>
                      <h2 className="plan-title">{node.body.plan.dedicated.header}</h2>
                      <p className="plan-text">{node.body.plan.dedicated.desc}</p>
                      <div className="plan-price">
                        {node.body.plan.dedicated.price}
                      </div>
                      <FormattedMessage id="btn.contact">
                        {(txt) =>
                          <Link to={genLink(langKey, '/enterprise')} className="button button-white">{txt}</Link>
                        }
                      </FormattedMessage>
                      <div className="plan-list">
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
                    <Copy className="center-xs" type="header" element="h2" child={node.body.faq.header}/>
                    <div className="faq-question-wrapper">
                      <Copy type="subheader" element="h3" className="question-type" child={node.body.faq.services.header}/>
                      {node.body.faq.services.items.map((item) =>
                        <div key={item.question} className="faq-tab">
                          <div className="faq-tab-question">
                            <Copy type="title" element="p" child={item.question}/>
                          </div>
                          <div className="faq-tab-answer">
                            <Copy type="content" element="p" child={item.answer} noEscape/>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="faq-question-wrapper">
                      <Copy type="subheader" element="h3" className="question-type" child={node.body.faq.payments.header}/>
                      {node.body.faq.payments.items.map(item =>
                        <div key={item.question} className="faq-tab">
                          <div className="faq-tab-question">
                            <Copy type="title" element="p" child={item.question}/>
                          </div>
                          <div className="faq-tab-answer">
                            <Copy type="content" element="p" child={item.answer} noEscape/>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="faq-question-wrapper">
                      <Copy type="subheader" element="h3" className="question-type" child={node.body.faq.security.header}/>
                      {node.body.faq.security.items.map(item =>
                        <div key={item.question} className="faq-tab">
                          <div className="faq-tab-question">
                            <Copy type="title" element="p" child={item.question}/>
                          </div>
                          <div className="faq-tab-answer">
                            <Copy type="content" element="p" child={item.answer} noEscape/>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="faq-question-wrapper">
                      <Copy type="subheader" element="h3" className="question-type" child={node.body.faq.legality.header}/>
                      {node.body.faq.legality.items.map(item =>
                        <div key={item.question} className="faq-tab">
                          <div className="faq-tab-question">
                            <Copy type="title" element="p" child={item.question}/>
                          </div>
                          <div className="faq-tab-answer">
                            <Copy type="content" element="p" child={item.answer} noEscape/>
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
