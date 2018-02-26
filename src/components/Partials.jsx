import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid'
import { FormattedMessage } from 'react-intl';
import $ from 'jquery'

import { Copy } from './Elements'
import logoList from '../data/logos'
class Above extends React.Component{
  constructor() {
    super()
    this.state = {
      class: 'above'
    }
  }
  componentWillMount() {
    if (this.props.full) {
      this.setState({
        class: this.state.class + ' full'
      })
    } else if (this.props.compact) {
      this.setState({
        class: this.state.class + ' compact'
      })
    } else {
      this.setState({
        class: this.state.class + ' normal'
      })
    }
  }
  render() {
    const rowProps = getRowProps(this.props)
    return (
      <section className={this.state.class + ' ' + rowProps.className}>
        {rowProps.children}
      </section>
    )
  }
}

class TwoColumn extends React.Component {
  constructor() {
    super()
    this.splitRatio = this.splitRatio.bind(this)
  }
  componentWillMount() {
    let ratio = this.props.ratio
    const breakPoints = ['xs', 'sm', 'md', 'lg']

    // If both columns are equal
    if (this.props.equal) {
      let ratio = [6,6]
      this.setState({
        xs: ratio,
        sm: ratio,
        md: ratio,
        lg: ratio
      })
    } else {
      // When the responsiveness is important
      let state = {}

      for (let i = 0; i < breakPoints.length; i++) {
        let breakPoint = breakPoints[i]
        if (ratio && ratio.hasOwnProperty(breakPoint)) {
          state[breakPoint] = ratio[breakPoint]
        }
      }

      this.setState(state)
    }
  }
  splitRatio(ratios, childIndex) {
    let obj = {}
    Object.keys(ratios).map(item => {
      obj[item] = ratios[item][childIndex]
    })
    return obj
  }
  render() {
    const rowProps = getRowProps(this.props)
    const children = rowProps.children
    const renderedChild = children.map((item, i) => {
      const props = this.splitRatio(this.state, i)
      return (
        <Col key={i} {...props}>
          {item}
        </Col>
      )
    })

    return (
      <div className={rowProps.className}>
        {(children && children.length == 2)
        ? renderedChild
        : console.error('Warning: `TwoColumn` has less or more than 2 child')
        }
      </div>
    )
  }
}

class Logos extends React.Component {
  constructor() {
    super()
    this.expand = this.expand.bind(this)
  }
  componentDidMount() {
    if (this.props.showMore) {
      const $row = $(this.logoWrap)
      $row.css('max-height', '22rem')
      $row.addClass('active')
    }
  }
  expand() {
    const $row = $(this.logoWrap)
    const $more = $(this.more)
    $row.css('max-height', '100%')
    $row.removeClass('active')
    $more.addClass('hidden')
  }
  render() {
    // Base path for logo images
    const basePath = '/logos/companies/'

    const img = this.props.src
    const rowProps = getRowProps(this.props)
    const colProps = getColumnProps(this.props)
    const showMore =  <FormattedMessage id="label.more">
                        {(txt) =>
                          <a className="complogos-more content-body" onClick={this.expand} ref={node => this.more = node}>{txt}</a>
                        }
                      </FormattedMessage>

    return (
      <Row tagName="section" className="complogos" center="xs">
        {
          (this.props.header) ?
          (
          <Col xs = {12} className = "complogos-header">
            <Copy type="header" element="h3" child={this.props.header}/>
          </Col>
          ) : null
        }
        <Col xs={10}>
          <div className={rowProps.className} ref={node => this.logoWrap = node}>
          {img.map((item, index) => {
             return (
               <div key={index}  className={`${colProps.className} complogos-img`}>
                 <img src={basePath + logoList[item.company]} alt={item.alt}/>
               </div>
             )
          })}
          </div>
          {(this.props.showMore) ? showMore : null}
        </Col>
      </Row>
    )
  }
}

Logos.propTypes = {
  src: PropTypes.array.isRequired,
  header: PropTypes.string
}

TwoColumn.propTypes = {
  ratio: PropTypes.object,
  equal: PropTypes.bool
}

Above.propTypes = {
  full: PropTypes.bool
}

export { Above, TwoColumn, Logos }
