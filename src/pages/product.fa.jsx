import React from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import { Copy } from '../components/Elements'
import { TwoColumn, Above } from '../components/Partials'

const Product = (props) => {
  const { data } = props
  const langKey = props.pathContext.langKey
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
              <Row start="sm" center="xs">
                <Col xs={10} sm={12}>
                  <Copy type="header" element="h1" child={node.body.hero.header} noEscape/>
                  <Copy type="title" element="p" child={node.body.hero.desc} noEscape/>
                </Col>
              </Row>
            </Grid>
          </Above>
          <Row tagName="section" center="xs">
            <Grid>
              <TwoColumn ratio={{ xs:[10,10], sm:[6,6], md:[4,8], lg:[4,8] }}>
                <div>
                  <Copy type="title" align="right" element="h2" child={node.body.section1.header}/>
                  <Copy type="description" align="right" element="p" child={node.body.section1.body}/>
                </div>
                <Img sizes={data.flexible.sizes} alt="مدیریت کار انعطاف‌پذیر"/>
              </TwoColumn>
            </Grid>
          </Row>
          <Row tagName="section" center="xs">
            <Grid>
              <TwoColumn ratio={{ xs:[10,10], sm:[6,6], md:[8,4], lg:[8,4] }}>
                <Img sizes={data.easy.sizes} alt="مدیریت کار ساده"/>
                <div>
                  <Copy type="title" align="right" element="h2" child={node.body.section2.header}/>
                  <Copy type="description" align="right" element="p" child={node.body.section2.body}/>
                </div>
              </TwoColumn>
            </Grid>
          </Row>
          <Row tagName="section" center="xs">
            <Grid>
              <TwoColumn ratio={{ xs:[10,10], sm:[6,6], md:[4,8], lg:[4,8] }}>
                <div>
                  <Copy type="title" align="right" element="h2" child={node.body.section3.header}/>
                  <Copy type="description" align="right" element="p" child={node.body.section3.body}/>
                </div>
                <Img sizes={data.performance.sizes} alt="مدیریت بهره‌وری"/>
              </TwoColumn>
            </Grid>
          </Row>
          <Row tagName="section" style={{backgroundColor: '#f6f8f9'}} center="xs">
            <Grid>
              <Row>
                {node.body.features.items.map((item, i) => {
                   // Check if there's learn more link
                   let button
                   if(item.link.length !== 0) {
                     button =  <FormattedMessage id="link.learnmore">
                       {(txt) =>
                         <Link to={item.link} className="button button-white">
                           {txt}
                           <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                         </Link>
                       }
                     </FormattedMessage>
                   }

                   return (
                     <Col xs={6} sm={4} lg={4} className="features" key={i}>
                       <div className="features-head">
                         <span className="features-icon">
                           <span className={`taskulu-icon ${item.icon}`}></span>
                         </span>
                         <Copy type="subheader" element="h3" className="features-title" child={item.title}/>
                       </div>
                       <Copy type="content" element="p" className="features-desc" child={item.desc}/>
                       {button}
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
              link
            }
          }
        }
      }
    }
  }
  flexible: imageSharp( id: { regex: "/product-flexible/" } ) {
    sizes {
      ...GatsbyImageSharpSizes_noBase64
    }
  }
  easy: imageSharp( id: { regex: "/product-easy/" } ) {
    sizes {
      ...GatsbyImageSharpSizes_noBase64
    }
  }
  performance: imageSharp( id: { regex: "/product-performance/" } ) {
    sizes {
      ...GatsbyImageSharpSizes_noBase64
    }
  }
}
`
