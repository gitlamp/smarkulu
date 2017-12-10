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
        <div key={node}>
          <SEO
            pagePath={langKey}
            title={node.header.title}
            generalDesc={node.header.desc}/>
          <Section
            langKey={langKey}
            align="center"
            colClass={{ center: 'col-12 col-sm-12 col-xl-8' }}
            header="Adipisicing elit mollit amet magna nulla duis occaecat enim velit nostrud nostrud."
            body="Aliquip et sunt ullamco esse sunt amet. Nostrud ex irure quis enim excepteur reprehenderit et dolor nulla labore magna aute. Id labore dolore qui ex amet. Voluptate dolore sint excepteur officia irure velit. Fugiat incididunt fugiat est aute."
            cta="btn.register"/>
          <Section
            langKey={langKey}
            align="left"
            colClass={{ left: 'col-12 col-sm-6 col-xl-6', right: 'col-12 col-sm-6 col-xl-6' }}
            header="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            body="Incididunt eiusmod in adipisicing sint incididunt id labore incididunt nostrud nisi irure. Ipsum ad sunt in ullamco est ad aliqua. Nostrud ad sunt aute proident officia ipsum incididunt dolore. Qui nisi elit voluptate dolore. Incididunt dolore voluptate do cupidatat ad nulla ea ipsum. Commodo consectetur nisi ea cillum Lorem nostrud sit."/>
          <Section
            langKey={langKey}
            align="right"
            colClass={{ left: 'col-12 col-sm-6 col-xl-6', right: 'col-12 col-sm-6 col-xl-6' }}
            header="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            body="Sunt id nulla enim do qui irure esse laboris enim ex proident fugiat. Do consequat dolor magna laboris dolor culpa enim eu nisi. Amet esse eu nostrud voluptate culpa commodo adipisicing ea. Voluptate in qui minim pariatur enim aliqua elit ad consectetur dolore. Adipisicing qui culpa sunt consequat reprehenderit aliquip sit anim consectetur. Esse eiusmod aliquip pariatur et reprehenderit est excepteur dolore ut sunt exercitation irure."/>
          <Section
            langKey={langKey}
            align="left"
            colClass={{ left: 'col-12 col-sm-6 col-xl-6', right: 'col-12 col-sm-6 col-xl-6' }}
            header="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            body="Officia pariatur eiusmod et consectetur nisi non est esse consectetur. Tempor culpa esse qui cillum elit. Quis velit exercitation dolore irure non eiusmod ea incididunt sint nisi occaecat duis voluptate exercitation. Exercitation amet et cillum eiusmod qui. Id quis aliqua nulla irure consectetur deserunt dolor duis et laborum aliquip proident."/>
          <section style={{backgroundColor: '#f6f8f9'}}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-4 col-xl-4 features">
                  <span className="features-icon">
                    <i className="fa fa-id-badge" aria-hidden="true"></i>
                  </span>
                  <h3 className="features-title">Title</h3>
                  <p className="features-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ducimus neque unde natus facilis voluptatibus repellat, soluta at et rem.</p>
                  <FormattedMessage id="link.learnmore">
                  {(txt) =>
                    <Link to="#">Learn More</Link>
                  }
                  </FormattedMessage>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default Product

export const productQuery = graphql `
query ProductPage {
  allContentYaml(
    filter: {
      header: {
        lang: { regex: "/en/" },
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
      }
    }
  }
}
`

