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
          {this.props.headComponents}
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