import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

class SEO extends React.Component {
  constructor(props) {
    super(props)
    // Set initial state
    this.state = {
      lang: this.props.pagePath,
      title: this.props.title,
      description: this.props.generalDesc,
      openGraph: {
        type: this.props.ogType,
        title: this.props.title,
        description: this.props.ogDesc,
        image: this.props.ogImage,
        imageWidth: this.props.imageWidth,
        imageHeight: this.props.imageHeight,
        url: this.props.url,
        siteName: this.props.ogsiteName,
        appId: this.props.appId,
        publisher: this.props.publisher,
        publishedTime: this.props.publishedTime,
        modifiedTime: this.props.modifiedTime,
        updatedTime: this.props.updatedTime
      },
      twitter: {
        title: this.props.title,
        description: this.props.twitterDesc,
        site: this.props.twitterSiteName,
        image: this.props.twitterImage,
        creator: this.props.twitterCreator,
        card: this.props.twitterCard,
      },
      iOS: {
        iphone: {
          name: 'Taskulu',
          id: 1129696826,
          url: 'https://itunes.apple.com/us/app/taskulu/id1129696826?mt=8'
        },
        ipad: {
          name: 'Taskulu',
          id: 1129696826,
          url: 'https://itunes.apple.com/us/app/taskulu/id1129696826?mt=8'
        }
      },
      android: {
        googleplay: {
          name: 'Taskulu',
          id: 'com.taskulu.app',
          url: 'https://play.google.com/store/apps/details?id=com.taskulu.app'
        }
      }
    }
  }
  componentWillMount() {
    const langKey = this.state.lang
    const openGraph = this.state.openGraph
    const twitter = this.state.twitter
    if (this.props.generalDesc.length != 0) {
      openGraph.description = this.props.generalDesc
      twitter.description = this.props.generalDesc
    }
    switch (langKey) {
      case 'en':
      openGraph.appId = '1711491389121582'
      openGraph.publisher = 'https://facebook.com/TaskuluHQ'
      twitter.site = '@taskulu'
      this.setState({
        openGraph,
        twitter
      })
      break
      case 'fa':
      openGraph.appId = '854303587954426'
      openGraph.publisher = 'https://facebook.com/taskuluir'
      twitter.site = '@taskulu_ir'
      this.setState({
        openGraph,
        twitter
      })
      break
      default:
        console.log('No langKey has been passed')
    }
  }
  render() {
    return (
      <Helmet>
        {/* General tags */}
          <html lang={this.state.lang}/>
          <title>{this.state.title}</title>
          <meta name="description" content={this.state.description}/>
        {/* OpenGraph mata */}
          <meta property="og:type" content={this.state.openGraph.type}/>
          <meta property="og:title" content={this.state.openGraph.title}/>
          <meta property="og:description" content={this.state.openGraph.description}/>
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
          <meta name="twitter:description" content={this.state.twitter.description}/>
          <meta name="twitter:site" content={this.state.twitter.site}/>
          <meta name="twitter:image" content={this.state.twitter.image}/>
          <meta name="twitter:creator" content={this.state.twitter.creator}/>
          <meta name="twitter:card" content={this.state.twitter.card}/>
          {/* iOS app */}
          <meta name="twitter:app:name:iphone" content={this.state.iOS.iphone.name}/>
          <meta name="twitter:app:id:iphone" content={this.state.iOS.iphone.id}/>
          <meta name="twitter:app:url:iphone" content={this.state.iOS.iphone.url}/>
          <meta name="twitter:app:name:ipad" content={this.state.iOS.ipad.name}/>
          <meta name="twitter:app:id:ipad" content={this.state.iOS.ipad.id}/>
          <meta name="twitter:app:url:ipad" content={this.state.iOS.ipad.url}/>
          {/* Android app */}
          <meta name="twitter:app:name:googleplay" content={this.state.android.googleplay.name}/>
          <meta name="twitter:app:id:googleplay" content={this.state.android.googleplay.id}/>
          <meta name="twitter:app:url:googleplay" content={this.state.android.googleplay.url}/>
      </Helmet>
    )
  }
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  generalDesc: PropTypes.string.isRequired,
  openGraph: PropTypes.object,
  twitter: PropTypes.object
}

SEO.defaultProps = {
  ogType: 'website',
  ogsiteName: 'Taskulu'
}

export default SEO
