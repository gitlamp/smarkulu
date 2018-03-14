import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  if(action.type == 'invisibleHeader') {
    return Object.assign({}, state, {
      headerVisibility: false
    })
  }
  if(action.type == 'visibleHeader') {
    return Object.assign({}, state, {
      headerVisibility: true
    })
  }
  if(action.type == 'whiteHeader') {
    return Object.assign({}, state, {
      headerType: 'white'
    })
  }
  if(action.type == 'blueHeader') {
    return Object.assign({}, state, {
      headerType: 'blue'
    })
  }
  return state
}

const initialState = {
  headerVisibility: true,
  headerType: 'blue'
}

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore