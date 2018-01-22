import React from 'react'
import graphql from 'graphql'

import SEO from '../components/SEO'
import { Section } from '../components/Section'

const Contact = (props) => {
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
          <section className="double-divided">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-sm-6 col-xl-4 double-divided-col hasBackground">
                  <ul className="double-divided-col-list">
                    <li className="double-divided-col-item">
                      <h2 className="content-head">Lorem, ipsum.</h2>
                      <p className="content-body">Lorem ipsum dolor sit amet consectetur.</p>
                    </li>
                    <li className="double-divided-col-item">
                      <h2 className="content-head">Lorem, ipsum dolor.</h2>
                      <p className="content-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, accusantium.</p>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-xl-8 double-divided-col">
                  <div className="centered">
                    <h3 className="content-head">Lorem ipsum dolor sit amet.</h3>
                    <p className="content-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam magni voluptatum nostrum molestias? Vel voluptatibus debitis vitae nam architecto.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Section
            style={{ paddingTop: '10rem' }}
            langKey={langKey}
            align="center"
            colClass={{ center: 'col-12 col-sm-12 col-xl-8' }}
            header="Lorem ipsum dolor sit amet consectetur"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quibusdam."/>
        </div>
    )}
    </div>
  )
}

export default Contact

/**
 * Require data from en yaml
 */
export const contactQuery = graphql `
query ContactPage {
  allContentYaml(
    filter: {
      header: {
        lang: { eq: "en" }
        slug: { eq: "/contact" }
      }
    }
  ) {
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