import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import graphql from 'graphql'

import TemplateWrapper from '../layouts/index'

class SEO extends React.Component {
  constructor(props) {
    super(props)
    // Set initial state
    this.state = {
      title: this.props.title,
      description: this.props.generalDesc,
      link: '',
      openGraph: {
        type: this.props.ogType,
        title: this.props.ogTitle,
        image: this.props.image,
        imageWidth: this.props.imageWidth,
        imageHeight: this.props.imageHeight,
        url: this.props.url,
        siteName: this.props.siteName,
        appId: this.props.appId,
        publisher: this.props.publisher,
        publishedTime: this.props.publishedTime,
        modifiedTime: this.props.modifiedTime,
        updatedTime: this.props.updatedTime
      },
      twitter: {
        title: this.props.twitterTitle,
        url: this.props.twitterUrl,
        description: this.props.twitterDesc,
        site: this.props.twitterSiteName,
        image: this.props.image,
        creator: this.props.twitterCreator,
        card: this.props.twitterCard,
        iOS: {
          iphone: {
            name: this.props.twitterIphoneName,
            id: this.props.twitterIphoneId,
            url: this.props.twitterIphoneUrl
          },
          ipad: {
            name: this.props.twitterIpadName,
            id: this.props.twitterIpadId,
            url: this.props.twitterIpadUrl
          }
        },
        android: {
          googleplay: {
            name: this.props.googleplayName,
            id: this.props.googleplayId,
            url: this.props.googleplayUrl
          }
        }
      }
    }
  }
  componentWillMount() {
    this.setState({
      link: this.props.pageLink
    })
  }
  render() {
    return (
      <Helmet>
        {/* General tags */}
          <title>{this.state.title}</title>
          <meta name="description" content={this.state.description}/>
          {<link href={ 'https:www.taskulu.com' + this.state.link } rel="alternative" hrefLang="en-US"/>}
          {<link href={ 'https:www.taskulu.com/fa' + this.state.link } rel="alternative"  hrefLang="fa-IR"/>}
        {/* OpenGraph mata */}
          <meta property="og:type" content={this.state.openGraph.type}/>
          <meta property="og:title" content={this.state.openGraph.title}/>
          <meta property="og:image" content={this.state.openGraph.image}/>
          <meta property="og:image:width" content={this.state.openGraph.imageWidth}/>
          <meta property="og:image:height" content={this.state.openGraph.imageHeight}/>
          <meta property="og:url" content={this.state.openGraph.url}/>
          <meta property="og:site_name" content={this.state.openGraph.siteName}/>
          <meta property="fb:app_id" content={this.state.openGraph.appId}/>
          <meta property="article:publisher" content={this.state.openGraph.publisher}/>
          <meta property="article:published_time" content={this.state.openGraph.publishedTime}/>
          <meta property="article:modified_time" content={this.state.openGraph.modifiedTime}/>
          <meta property="og:updated_time" content={this.state.openGraph.updatedTime}/>
        {/* Twitter card meta */}
          <meta name="twitter:title" content={this.state.twitter.title}/>
          <meta name="twitter:url" content/>
          <meta name="twitter:description" content={this.state.twitter.description}/>
          <meta name="twitter:site" content={this.state.twitter.site}/>
          <meta name="twitter:image" content={this.state.twitter.image}/>
          <meta name="twitter:creator" content={this.state.twitter.creator}/>
          <meta name="twitter:card" content={this.state.twitter.card}/>
          {/* iOS app */}
          <meta name="twitter:app:name:iphone" content={this.state.twitter.iOS.iphone.name}/>
          <meta name="twitter:app:id:iphone" content={this.state.twitter.iOS.iphone.id}/>
          <meta name="twitter:app:url:iphone" content={this.state.twitter.iOS.iphone.url}/>
          <meta name="twitter:app:name:ipad" content={this.state.twitter.iOS.ipad.name}/>
          <meta name="twitter:app:id:ipad" content={this.state.twitter.iOS.ipad.id}/>
          <meta name="twitter:app:url:ipad" content={this.state.twitter.iOS.ipad.url}/>
          {/* Android app */}
          <meta name="twitter:app:name:googleplay" content={this.state.twitter.android.googleplay.name}/>
          <meta name="twitter:app:id:googleplay" content={this.state.twitter.android.googleplay.id}/>
          <meta name="twitter:app:url:googleplay" content={this.state.twitter.android.googleplay.url}/>
      </Helmet>
    )
  }
}

SEO.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  openGraph: PropTypes.object,
  twitter: PropTypes.object
}

export default SEO