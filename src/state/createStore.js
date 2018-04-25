import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  switch (action.type) {
    case 'invisibleHeader':
      return Object.assign({}, state, {
            headerVisibility: false
          })
    case 'visibleHeader':
      return Object.assign({}, state, {
            headerVisibility: true
          })
    case 'whiteHeader':
      return Object.assign({}, state, {
            headerType: 'white'
          })
    case 'blueHeader':
      return Object.assign({}, state, {
            headerType: 'blue'
          })
    default:
      return state;
  }
}

const initialState = {
  headerVisibility: true,
  headerType: 'blue'
}

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore