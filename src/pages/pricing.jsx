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
              <h1 className="content-head">Choose your pricing plan</h1>
              <p className="content-body">Nulla occaecat mollit sint aliquip eu consequat consectetur non.</p>
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-12 col-sm-6 col-xl-3 plan-wrapper">
                <div className="plan free">
                  <h2 className="plan-title">Free</h2>
                  <p className="plan-text">Magna cillum commodo eu reprehenderit consectetur irure ipsum.</p>
                  <span className="plan-model">Forever</span>
                  <div className="plan-price">10$</div>
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
              </div>
              <div className="col-12 col-sm-6 col-xl-3 plan-wrapper">
                <div className="plan professional">
                  <div className="plan-ribbon">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  best
                  </div>
                  <h2 className="plan-title">Free</h2>
                  <p className="plan-text">Magna cillum commodo eu reprehenderit consectetur irure ipsum.</p>
                  <span className="plan-model">Starting at</span>
                  <div className="plan-price">10$</div>
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
              </div>
              <div className="col-12 col-sm-6 col-xl-3 plan-wrapper">
                <div className="plan business">
                  <div className="plan-ribbon">
                  <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
                  best
                  </div>
                  <h2 className="plan-title">Free</h2>
                  <p className="plan-text">Magna cillum commodo eu reprehenderit consectetur irure ipsum.</p>
                  <span className="plan-model">Starting at</span>
                  <div className="plan-price">10$</div>
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
              </div>
              <div className="col-12 col-sm-6 col-xl-3 plan-wrapper">
                <div className="plan dedicated">
                  <h2 className="plan-title">Free</h2>
                  <p className="plan-text">Magna cillum commodo eu reprehenderit consectetur irure ipsum.</p>
                  <span className="plan-model">Starting at</span>
                  <div className="plan-price">10$</div>
                  <div className="plan-list">
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
              </div>
            </div>
          </div>
        </section>
        <section style={{backgroundColor: '#f6f8f9'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8 faq">
                <h2 className="content-head">Frequently asked question</h2>
                <div className="faq-question-wrapper">
                  <div className="question-tab">
                    <div className="question-tab-inner">
                      <p>Incididunt do excepteur irure deserunt incididunt esse aliqua irure aliqua laborum eiusmod officia irure proident.</p>
                    </div>
                  </div>
                  <div className="question-body">
                    <div className="question-body-inner">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus ullam dolor nemo necessitatibus rem reprehenderit
                        repudiandae quo! Nostrum, et. Perspiciatis aliquid dolorem nobis veniam accusantium? Aut, temporibus eligendi.
                        Eos, illo laborum perspiciatis in repellat at totam sapiente distinctio repellendus.</p>
                    </div>
                  </div>
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
      }
    }
  }
}
`