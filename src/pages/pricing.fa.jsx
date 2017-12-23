import React from 'react'
import Link from 'gatsby-link'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'

import SEO from '../components/SEO'

const Pricing = (props) => {
  const { data } = props
  const { slug, langKey } = props.pathContext
  return (
    <div>
      {data.allContentYaml.edges.map(({node}) =>
      <div key={node.id}>
        <SEO
            pagePath={langKey}
            title={node.header.title}
            generalDesc={node.header.desc}/>
        <section className="above">
          <div className="container" style={{maxWidth: '1200px'}}>
            <div className="row">
              <div className="col text-center content">
              <h1 className="content-head">{node.body.hero.header}</h1>
              <p className="content-body">{node.body.hero.body}</p>
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-12 col-sm-6 col-lg-3 plan-wrapper">
                <div className="plan free">
                  <div className="spacer34"></div>
                  <h2 className="plan-title">{node.body.plan.free.header}</h2>
                  <p className="plan-text">{node.body.plan.free.desc}<br/>{node.body.plan.free.span}</p>
                  <div className="plan-price">{node.body.plan.free.price}</div>
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
              </div>
              <div className="col-12 col-sm-6 col-lg-3 plan-wrapper">
                <div className="plan professional">
                  <div className="plan-ribbon">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <h2 className="plan-title">{node.body.plan.professional.header}</h2>
                  <p className="plan-text">{node.body.plan.professional.desc}<br/>{node.body.plan.professional.span}</p>
                  <div className="plan-price">{node.body.plan.professional.price}</div>
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
              </div>
              <div className="col-12 col-sm-6 col-lg-3 plan-wrapper">
                <div className="plan business">
                  <div className="plan-ribbon">
                  <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <h2 className="plan-title">{node.body.plan.business.header}</h2>
                  <p className="plan-text">{node.body.plan.business.desc}<br/>{node.body.plan.business.span}</p>
                  <div className="plan-price">{node.body.plan.business.price}</div>
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
              </div>
              <div className="col-12 col-sm-6 col-lg-3 plan-wrapper">
                <div className="plan dedicated">
                  <div className="spacer34"></div>
                  <h2 className="plan-title">{node.body.plan.dedicated.header}</h2>
                  <p className="plan-text">{node.body.plan.dedicated.desc}</p>
                  <div className="spacer24"></div>
                  <div className="plan-price">{node.body.plan.dedicated.price}</div>
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
              </div>
            </div>
          </div>
        </section>
        <section style={{backgroundColor: '#f6f8f9'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 col-sm-10 col-xl-8 faq">
                <h2 className="content-head">{node.body.faq.header}</h2>
                <div className="faq-question-wrapper">
                  <h3 className="question-type">{node.body.faq.services.header}</h3>
                  {node.body.faq.services.items.map(item =>
                    <div>
                      <div className="question-tab">
                      <div className="question-tab-inner">
                        <p>{item.question}</p>
                      </div>
                      </div>
                      <div className="question-body">
                      <div className="question-body-inner">
                        <p>{item.answer}</p>
                      </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="faq-question-wrapper">
                  <h3 className="question-type">{node.body.faq.payments.header}</h3>
                  {node.body.faq.payments.items.map(item =>
                    <div>
                      <div className="question-tab">
                      <div className="question-tab-inner">
                        <p>{item.question}</p>
                      </div>
                      </div>
                      <div className="question-body">
                      <div className="question-body-inner">
                        <p>{item.answer}</p>
                      </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="faq-question-wrapper">
                  <h3 className="question-type">{node.body.faq.security.header}</h3>
                  {node.body.faq.security.items.map(item =>
                    <div>
                      <div className="question-tab">
                      <div className="question-tab-inner">
                        <p>{item.question}</p>
                      </div>
                      </div>
                      <div className="question-body">
                      <div className="question-body-inner">
                        <p>{item.answer}</p>
                      </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="faq-question-wrapper">
                  <h3 className="question-type">{node.body.faq.legality.header}</h3>
                  {node.body.faq.legality.items.map(item =>
                    <div>
                      <div className="question-tab">
                      <div className="question-tab-inner">
                        <p>{item.question}</p>
                      </div>
                      </div>
                      <div className="question-body">
                      <div className="question-body-inner">
                        <p>{item.answer}</p>
                      </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )}
    </div>
  )
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