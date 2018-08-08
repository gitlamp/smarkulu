import Helmet from 'react-helmet'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import createStore from './src/state/createStore'

exports.onRenderBody = (
  { setHeadComponents, setHtmlAttributes }
) => {
  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.link.toComponent()
  ])
}

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {

  const store = createStore()

  const ConnectedBody = () => (
    <Provider store={store}>
      {bodyComponent}
    </Provider>
  )

  replaceBodyHTMLString(renderToString(<ConnectedBody/>))
}