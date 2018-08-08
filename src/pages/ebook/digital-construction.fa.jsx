import React from 'react'
import graphql from 'graphql'
import { FormattedMessage } from 'react-intl'
import { Row, Col } from 'react-flexbox-grid'

import Form from '../../components/Forms2'
import SEO from '../../components/SEO'
import { Copy } from '../../components/Elements'
import { Above } from '../../components/Partials'

class ConstructionPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.data
    const langKey = this.props.pathContext.langKey
    return (
      <div>
        {data.allContentYaml.edges.map(({node}) =>
          <div key={node.id}>
            <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc} />
            <Above empty hasGradient />
            <Row center="xs" className="construction-landing">
              <Col xs={12} sm={8} lg={6} className="ebook-content">
                <Copy element="h3" type="sub" child={node.body.subheader} />
                <Copy element="h1" type="header" child={node.body.header} noEscape />
                <Copy element="h2" type="subheader" child={node.body.subtitle} />
                <Copy element="p" align="right" type="content" child={node.body.body} noEscape />
                <div className="form-wrapper">
                  <div className="form-banner">
                    <div className="form-title">
                      <FormattedMessage id={node.body.form.banner} />
                    </div>
                    <div className="form-subtitle">
                      <FormattedMessage id={node.body.form.required} />
                    </div>
                  </div>
                  <div>
                    <Form formContent={data.form} />
                  </div>
                  <div className="form-footer">
                    <div className="form-subtitle">
                      <FormattedMessage id={node.body.form.privacy} />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>)}
      </div>)
  }
}

export default ConstructionPage

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query ConstructionPage {
  allContentYaml(filter: {header: {lang: {eq: "fa"}, slug: {eq: "/ebook/digital-construction"}}}) {
    edges {
      node {
        id
        header {
          title
          desc
        }
        body {
          subheader
          header
          body
          form {
            banner
            required
            privacy
          }
        }
      }
    }
  }
  form: mauticForm(name: {regex: "/Digital.*/"}) {
    ...mauticFormData
  }
}
`
