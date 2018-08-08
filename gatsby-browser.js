import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './src/state/createStore'

exports.onClientEntry = () => {
  /*eslint no-console: "off"*/
  console.log('App is up!')
}

exports.replaceRouterComponent = ({ history }) => {

  const store = createStore()

  const ConnectRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectRouterWrapper
}