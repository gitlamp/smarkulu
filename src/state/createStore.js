import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  switch (action.type) {
    case 'invisibleFooter':
      return Object.assign({}, state, {
        footerVisibility: false
      })
    case 'visibleFooter':
      return Object.assign({}, state, {
        footerVisibility: true
      })
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
    case 'setLangToEn':
      return Object.assign({}, state, {
        lang: 'en'
      })
    case 'setLangToFa':
      return Object.assign({}, state, {
        lang: 'fa'
      })
    default:
      return state;
  }
}

const initialState = {
  headerVisibility: true,
  footerVisibility: true,
  headerType: 'blue',
  blogPostsToShow: 12
}

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore
