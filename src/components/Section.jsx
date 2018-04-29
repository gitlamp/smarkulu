import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

class Section extends React.Component {
  constructor() {
    super()
    this.state = {
      justify: '',
      textAlign: 'text-left'
    }
  }
  componentWillMount() {
    // Check alignment
    if (this.props.align == 'center') {
      let colClass = this.props.colClass.center
      this.imgColClass = colClass
      this.contentColClass = colClass + ' text-center'
      this.setState({
        justify: 'justify-content-center'
      })
    } else if (this.props.align == 'left') {
      this.contentColClass = this.props.colClass.left
      this.imgColClass = this.props.colClass.right
    } else {
      this.contentColClass = this.props.colClass.right
      this.imgColClass = this.props.colClass.left
    }
  }
  render() {
    // Check if cta prop exists then render it
    const cta = (this.props.cta) ?
    <FormattedMessage id={this.props.cta}>
    {(txt) =>
      <a className={"btn button " + this.props.ctaClass} href={`${process.env.LOGIN_LINK}` + this.props.langKey}>{txt}</a>
    }
    </FormattedMessage>
    : null

    // Check if img prop exists then render it
    const img = (this.props.img) ?
    <img className={this.props.imgClass} src={this.props.img} alt="section image"/>
    : null
    return (
    <section style={this.props.style}>
    <div className="container">
      <div className={'row' +  ' ' + this.state.justify}>
        {(this.props.align == 'right') ? <div className={this.imgColClass}>{img}</div> : null}
        <div className={this.contentColClass + ' ' + 'content'}>
          <h2 className="content-head">{this.props.header}</h2>
          <p className="content-body">{this.props.body}</p>
          {cta}
        </div>
        {(this.props.align == 'left') ? <div className={this.imgColClass}>{img}</div> : null}
        {(this.props.align == 'center' && this.props.img) ? <div className={this.state.colClass}>{img}</div> : null}
      </div>
    </div>
    </section>
    )
  }
}



Section.propTypes = {
  langKey: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'right', 'center']),
  colClass: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  cta: PropTypes.string,
  ctaClass: PropTypes.string,
  img: PropTypes.string,
  imgClass: PropTypes.string,
  style: PropTypes.object
}


Section.defaultProps = {
  ctaClass: 'button-submit'
}

export { Section }
