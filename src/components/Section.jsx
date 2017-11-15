import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

class Section extends React.Component {
  render() {
    let langKey = 'fa'
    const cta = (this.props.cta) ?
    <FormattedMessage id={this.props.cta}>
    {(txt) =>
      <a className={"btn button " + this.props.ctaClass} href={`${process.env.LOGIN_LINK}` + langKey}>{txt}</a>
    }
    </FormattedMessage>
    : null

    const img = (this.props.img) ?
    <img className={this.props.imgClass} src={this.props.img} alt="section image"/>
    : null

    return (
    <section style={this.props.style}>
    <div className="container">
      <div className="row">
        {(this.props.direction == 'rtl') ? <div className="col-8">{img}</div> : null}
        <div className="col-4 content">
          <h2 className="content-head">{this.props.header}</h2>
          <p className="content-body">{this.props.body}</p>
          {cta}
        </div>
        {(this.props.direction == 'ltr') ? <div className="col-8">{img}</div> : null}
      </div>
    </div>
    </section>
    )
  }
}

Section.propTypes = {
  direction: PropTypes.string.isRequired,
  header: PropTypes.string,
  body: PropTypes.string,
  cta: PropTypes.string,
  ctaClass: PropTypes.string,
  img: PropTypes.string.isRequired,
  imgClass: PropTypes.string,
  style: PropTypes.object
}

Section.defaultProps = {
  ctaClass: 'button-sm'
}

export default Section