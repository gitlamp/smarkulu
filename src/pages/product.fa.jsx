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
          <Section
            langKey={langKey}
            align="center"
            colClass={{ center: 'col-12 col-sm-12 col-xl-8' }}
            header={node.body.section1.header}
            body={node.body.section1.body}
            cta="btn.register"/>
          <Section
            langKey={langKey}
            align="left"
            colClass={{ left: 'col-12 col-sm-6 col-xl-6', right: 'col-12 col-sm-6 col-xl-6' }}
            header={node.body.section1.header}
            body={node.body.section1.body}/>
          <Section
            langKey={langKey}
            align="right"
            colClass={{ left: 'col-12 col-sm-6 col-xl-6', right: 'col-12 col-sm-6 col-xl-6' }}
            header={node.body.section2.header}
            body={node.body.section2.body}/>
          <Section
            langKey={langKey}
            align="left"
            colClass={{ left: 'col-12 col-sm-6 col-xl-6', right: 'col-12 col-sm-6 col-xl-6' }}
            header={node.body.section3.header}
            body={node.body.section3.body}/>
          <section style={{backgroundColor: '#f6f8f9'}}>
            <div className="container">
              <div className="row">
                {node.body.features.map(item => {
                  return (
                    <div className="col-12 col-sm-4 col-xl-4 features" key={item.title}>
                      <span className="features-icon">
                        <i className={'fa ' + item.icon} aria-hidden="true"></i>
                      </span>
                      <h3 className="features-title">{item.title}</h3>
                      <p className="features-desc">{item.desc}</p>
                      <FormattedMessage id="link.learnmore">
                      {(txt) =>
                        <Link to="#">{txt}</Link>
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

export const productFaQuery = graphql `
query ProductFaPage {
  allContentYaml(
    filter: {
      header: {
        lang: { regex: "/fa/" }
        slug: { regex: "/\/product$/" }
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
            icon
            title
            desc
          }
        }
      }
    }
  }
}
`