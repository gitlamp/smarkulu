import React from 'react'
import graphql from 'graphql'
import { Row, Col } from 'react-flexbox-grid'
import $ from 'jquery'

import SEO from '../../components/SEO'
import { Copy, CTA } from '../../components/Elements'
import { Above } from '../../components/Partials'

class FilePreviews extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    $('.formats-cat').on('click', function() {
      $(this).toggleClass('active')
      $(this).next().slideToggle()
    })
  }
  render() {
    const data = this.props.data
    const langKey = this.props.pathContext.langKey
    return (
      <div>
        {data.allContentYaml.edges.map(({node}) =>
          <div key={node.id}>
            <SEO pagePath={langKey} title={node.header.title} generalDesc={node.header.desc}/>
            <Above start="xs">
              <Col xs={12}>
                <Copy type="header" element="h1" child={node.body.hero.header}/>
                <CTA className="button-submit" type="login" name={node.body.hero.cta} langKey={langKey}/>
              </Col>
            </Above>
            <Row tagName="section" center="xs">
              <Col xs={10}>
                <Copy type="header" element="h2">
                 <div dangerouslySetInnerHTML={{__html: node.body.intro.header}}/>
                </Copy>
                <Copy type="description" element="p" child={node.body.intro.body}/>
              </Col>
              <Col xs={11}>
                <Row center="xs">
                {node.body.intro.selectedFormats.map((item, i) => {
                  return (
                    <Col xs={2} key={i}>
                      <div>
                        <img src={item.img} alt={item.title}/>
                      </div>
                      <Copy type="sub" element="h6" child={item.title}/>
                    </Col>
                  )
                })}
                </Row>
              </Col>
            </Row>
            <Row tagName="section" center="xs" className="block-cta">
              <Col xs={6}>
                <Copy type="header" element="h3" child={node.body.demoCTA.header}/>
                <Copy type="subheader" element="h4" child={node.body.demoCTA.subheader}/>
                <CTA className="button-blue" type="internal" name={node.body.demoCTA.cta} langKey={langKey}/>
              </Col>
            </Row>
            <Row tagName="section" center="xs">
              <Col xs={6} sm={8} className="formats-viewer">
                <FormatSearch head={node.body.formatsViewer.header} item={node.body.formatsViewer.formats}/>
              </Col>
            </Row>
          </div>
        )
        }
      </div>
    )
  }
}

class FormatSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      searchVal: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      searchVal: e.target.value
    })
  }
  render() {
    let libraries = this.props.item
    let searchVal = this.state.searchVal.trim().toLowerCase()
    if (searchVal.length > 0) {
      libraries = libraries.filter(item => {
        return item.toLowerCase().match(searchVal)
      })
    }
    return (
      <Row center="xs">
        <table id="table" className="noselect">
          <tbody>
            <tr>
              <th className="column1">{this.props.head}</th>
              <th>
                <div className="search">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <input type="text" id="search" placeholder="Search Formats" value={this.state.searchVal} onChange={this.handleChange} autoComplete="off"/>
                </div>
              </th>
            </tr>
            <tr>
              <td colSpan="2">
              {libraries.map((item, i) => {
                return <span className="formats" key={i}>{item}</span>
              })}
              </td>
            </tr>
          </tbody>
        </table>
      </Row>
    )
  }
}

export default FilePreviews

/**
 * Require data from fa yaml
 */
export const pageQuery = graphql `
query FilePreviews {
  allContentYaml(
    filter: {
      header: {
        lang: {eq: "en"}
        slug: {eq: "/product/file-previews"}
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
            cta
          }
          intro {
            header
            body
            selectedFormats {
              img
              title
            }
          }
          demoCTA {
            header
            subheader
            cta
          }
          formatsViewer {
            header
            formats
          }
        }
      }
    }
  }
}
`