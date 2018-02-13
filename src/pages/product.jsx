import React from 'react'
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
              <Row>
                <Col xs className="content">
                  <Copy type="header" element="h2" child="Ut commodo minim culpa in labore amet sit sint dolore laborum voluptate Lorem."/>
                  <Copy type="subheader" element="p" child="Dolor excepteur officia aliquip in Lorem eu est esse velit esse. Minim sint ea sint cupidatat laboris nisi ut magna cupidatat anim. Aliqua mollit nisi pariatur laboris qui consectetur sint irure commodo nisi sint exercitation incididunt."/>
                </Col>
              </Row>
            </Grid>
          </Above>
          <Row tagName="section" center="xs">
            <Grid>
              <TwoColumn ratio={{ xs:[12,12], sm:[6,6], md:[4,8], lg:[4,8] }}>
                <div>
                  <Copy type="header" element="h2" child="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, porro?"/>
                  <Copy type="body" element="p" child="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ea aut velit dolorem odio animi fugit eius itaque alias facilis."/>
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
                  <Copy type="header" element="h2" child="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, porro?"/>
                  <Copy type="body" element="p" child="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ea aut velit dolorem odio animi fugit eius itaque alias facilis."/>
                </div>
              </TwoColumn>
            </Grid>
          </Row>
          <Row tagName="section" center="xs">
            <Grid>
              <TwoColumn ratio={{ xs:[12,12], sm:[6,6], md:[4,8], lg:[4,8] }}>
                <div>
                  <Copy type="header" element="h2" child="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, porro?"/>
                  <Copy type="body" element="p" child="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ea aut velit dolorem odio animi fugit eius itaque alias facilis."/>
                </div>
                <Img src="#" alt="No IMG"/>
              </TwoColumn>
            </Grid>
          </Row>
          <Row tagName="section" style={{backgroundColor: '#f6f8f9'}} center="xs">
            <Grid>
              <Row>
                <Col xs={12} sm={4} lg={4} className="features">
                  <span className="features-icon">
                    <i className="fa fa-id-badge" aria-hidden="true"></i>
                  </span>
                  <Copy type="subheader" element="h3" className="features-title" child="Title"/>
                  <Copy type="body" element="p" className="features-desc" child="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores culpa soluta in dicta repudiandae quos numquam reprehenderit vero tempore sed."/>
                  <FormattedMessage id="link.learnmore">
                  {(txt) =>
                    <Link to="#" className="btn button button-white">
                      {txt}
                      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>
                  }
                  </FormattedMessage>
                </Col>
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
 * Require data from en yaml
 */
export const productQuery = graphql `
query ProductPage {
  allContentYaml(
    filter: {
      header: {
        lang: { eq: "en" }
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
      }
    }
  }
}
`

