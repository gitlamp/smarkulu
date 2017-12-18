import React from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

import SEO from '../components/SEO'
import { Section } from '../components/Section'

const Product = (props) => {
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
            <div className="container">
              <div className="row">
                <div className="col text-center content">
                  <h2 className="content-head">{node.body.hero.header}</h2>
                  <p className="content-body">{node.body.hero.body}</p>
                </div>
              </div>
            </div>
          </section>
          <Section
            langKey={langKey}
            align="left"
            colClass={{ left: 'col-12 col-sm-4 col-xl-4', right: 'col-12 col-sm-8 col-xl-8' }}
            header={node.body.section1.header}
            body={node.body.section1.body}/>
          <Section
            langKey={langKey}
            align="right"
            colClass={{ left: 'col-12 col-sm-8 col-xl-8', right: 'col-12 col-sm-4 col-xl-4' }}
            header={node.body.section2.header}
            body={node.body.section2.body}/>
          <Section
            langKey={langKey}
            align="left"
            colClass={{ left: 'col-12 col-sm-4 col-xl-4', right: 'col-12 col-sm-8 col-xl-8' }}
            header={node.body.section3.header}
            body={node.body.section3.body}/>
          <section style={{backgroundColor: '#f6f8f9'}}>
            <div className="container">
              <div className="row">
                {node.body.features.items.map(item => {
                  return (
                    <div className="col-12 col-sm-4 col-xl-4 features" key={item.title}>
                      <span className="features-icon">
                        <i className={'fa ' + item.icon} aria-hidden="true"></i>
                      </span>
                      <h3 className="features-title">{item.title}</h3>
                      <p className="features-desc">{item.desc}</p>
                      <FormattedMessage id="link.learnmore">
                      {(txt) =>
                        <Link to="#" className="btn button button-white">
                          {txt}
                          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                        </Link>
                      }
                      </FormattedMessage>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default Product

/**
 * Require data from fa yaml
 */
export const productFaQuery = graphql `
query ProductFaPage {
  allContentYaml(
    filter: {
      header: {
        lang: { eq: "fa" }
        slug: { eq: "/product" }
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
          }
          section1 {
            header
            body
          }
          section2 {
            header
            body
          }
          section3 {
            header
            body
          }
          features {
            header
            items {
              title
              desc
              icon
            }
          }
        }
      }
    }
  }
}
`