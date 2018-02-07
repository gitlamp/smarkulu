import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid'

class Above extends React.Component{
  constructor() {
    super()
    this.state = {
      class: 'above'
    }
  }
  componentWillMount() {
    if (this.props.full) {
      const full = 'above-full'
      this.setState({
        class: this.state.class + ' ' + full
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
  render() {
    const img = this.props.src

    // Base path for logo images
    const basePath = '/logos/companies/'
    let isgray = (this.props.isgray) ? ' isgray' : null
    return (
      <Row tagName="section" column style={this.props.style} className="complogos">
        {(this.props.header) ? (<Col xs={12} className="complogos-header">{this.props.header}</Col>) : null}
        <Row center="xs">
          {img.map((item, index) => {
             return (
               <Col key={index}  className="complogos-img">
                 <img src={basePath + logos[item.company]} alt={item.alt} className={isgray}/>
               </Col>
             )
          })}
        </Row>
      </Row>
    )
  }
}

Logos.propTypes = {
  src: PropTypes.array.isRequired,
  header: PropTypes.string,
  isgray: PropTypes.bool,
  style: PropTypes.object
}

TwoColumn.propTypes = {
  ratio: PropTypes.object,
  equal: PropTypes.bool
}

Above.propTypes = {
  full: PropTypes.bool
}

export { Above, TwoColumn, Logos }
