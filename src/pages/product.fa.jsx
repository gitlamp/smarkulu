import React, { Component } from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SEO from '../components/SEO'
import { Copy, Img } from '../components/Elements'
import { TwoColumn, Above } from '../components/Partials'

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
          <Above center="xs">
            <Grid>
              <Row center="xs">
                <Col xs={4}>
                  <Copy type="header" element="h1" child={node.body.hero.header} align="right" />
                  <Copy type="title" element="p" child={node.body.hero.desc} align="right" />
                </Col>
              </Row>
            </Grid>
          </Above>
          <Row tagName="section" center="xs">
            <Grid>
              <TwoColumn ratio={{ xs:[12,12], sm:[6,6], md:[4,8], lg:[4,8] }}>
                <div>
                  <Copy type="title" align="right" element="h2" child={node.body.section1.header}/>
                  <Copy type="description" align="right" element="p" child={node.body.section1.body}/>
                </div>
                <Img src="#" alt="No IMG"/>
              </TwoColumn>
            </Grid>
          </Row>
          <Row tagName="section" center="xs">
            <Grid>
              <TwoColumn ratio={{ xs:[12,12], sm:[6,6], md:[8,4], lg:[8,4] }}>
                <Img src="#" alt="No IMG"/>
                <div>
                  <Copy type="title" align="right" element="h2" child={node.body.section2.header}/>
                  <Copy type="description" align="right" element="p" child={node.body.section2.body}/>
                </div>
              </TwoColumn>
            </Grid>
          </Row>
          <Row tagName="section" center="xs">
            <Grid>
              <TwoColumn ratio={{ xs:[12,12], sm:[6,6], md:[4,8], lg:[4,8] }}>
                <div>
                  <Copy type="title" align="right" element="h2" child={node.body.section3.header}/>
                  <Copy type="description" align="right" element="p" child={node.body.section3.body}/>
                </div>
                <Img src="#" alt="No IMG"/>
              </TwoColumn>
            </Grid>
          </Row>
          <Row tagName="section" style={{backgroundColor: '#f6f8f9'}} center="xs">
            <Grid>
              <Row>
                {node.body.features.items.map((item, i) => {
                   return (
                     <Col xs={12} sm={4} lg={4} className="features" key={i}>
                       <span className="features-icon">
                         <span className={`taskulu-icon ${item.icon}`}></span>
                       </span>
                       <Copy type="subheader" element="h3" className="features-title" child={item.title}/>
                       <Copy type="body" element="p" className="features-desc" child={item.desc}/>
                       <FormattedMessage id="link.learnmore">
                         {(txt) =>
                           <Link to="#" className="btn button button-white">
                             {txt}
                             <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                           </Link>
                         }
                       </FormattedMessage>
                     </Col>
                   )
                })}
              </Row>
            </Grid>
          </Row>
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
            desc
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
