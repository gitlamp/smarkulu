import React from 'react'

let stylesStr = []
if (process.env.NODE_ENV === `production`) {
  try {
    const baseStyles = require(`!raw-loader!../public/styles/styles.css`)
    const autoGenByGatsby = require(`!raw-loader!../public/styles.css`)
    stylesStr.push(baseStyles, autoGenByGatsby)
  } catch (e) {
    console.log(e)
  }
}

class HTML extends React.Component {
  render() {
    let style
    if (process.env.NODE_ENV === `production`) {
      style = (
        <style
          id="inlined-css"
          key="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          {/* Meta-data */}
          <meta charSet="utf-8" />
          <meta
          httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Header Components */}
          {this.props.headComponents}

          {/* Favicons */}
          <link rel="apple-touch-icon" href="/favicons.ico/apple-icon.png"/>
          <link rel="apple-touch-icon" sizes="57x57" href="/favicons.ico/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/favicons.ico/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/favicons.ico/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/favicons.ico/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/favicons.ico/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/favicons.ico/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/favicons.ico/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/favicons.ico/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons.ico/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="36x36"  href="/favicons.ico/android-icon-36x36.png"/>
          <link rel="icon" type="image/png" sizes="48x48"  href="/favicons.ico/android-icon-48x48.png"/>
          <link rel="icon" type="image/png" sizes="72x72"  href="/favicons.ico/android-icon-72x72.png"/>
          <link rel="icon" type="image/png" sizes="96x96"  href="/favicons.ico/android-icon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="144x144"  href="/favicons.ico/android-icon-144x144.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/favicons.ico/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons.ico/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicons.ico/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons.ico/favicon-16x16.png"/>
          <link rel="manifest" href="/favicons.ico/manifest.json"/>
          <meta name="msapplication-config" content="browserconfig.xml"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>

          {/* Styles */}
          {style}
        </head>
        <body {...this.props.bodyAttributes}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

export default HTML
