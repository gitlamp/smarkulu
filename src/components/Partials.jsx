import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, getColumnProps } from 'react-flexbox-grid'
import logos from '../data/logos'
import { createProps } from './functions.js'

class Above extends React.Component{
  constructor(props) {
    super(props)
  }

  classNames(props) {
    const classes = []

    classes.push("above")
    classes.push(props.className)
    props.full ? classes.push("above-full") : null
    return classes.join(" ")
  }

  render() {
    let rowProps = createProps('row', this.props)
    return (
      <Row className={this.classNames(this.props)} tagName="section" {...rowProps}/>
    )
  }
}

/* class TwoColumn extends React.Component {
 *   render() {
 *     return(
 *       <Row tagName="section" {...this.props}>
 *         {this.props.children}
 *       </Row>
 *     )
 *   }
 * }
 * */

class TwoColumn extends React.Component {
  render() {
    let ratio = this.props.vertical ? [12,12] : this.props.ratio
    let index = 0

    return (
      <Row column={this.props.vertical?true:null}
           style={{width: this.props.width}} >
        {ratio.map((item, i) => {
           const allProps = createProps('col', this.props.children[i].props)
           console.log(allProps)
            return (
              <Col key={'key'+i} xs={12} md={ratio[i]}  {...allProps}>
                {this.props.children[i]}
              </Col>
            )
        })}
      </Row>
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
  ratio: PropTypes.array,
  width: PropTypes.string,
  vertical: PropTypes.bool,
  full: PropTypes.bool
}
Above.propTypes = {
  full: PropTypes.bool
}

export { Above, TwoColumn, Logos }
