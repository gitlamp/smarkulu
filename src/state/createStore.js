import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  switch (action.type) {

    /* Header Visibility State */
    case 'invisibleHeader':
      return Object.assign({}, state, {
        headerVisibility: false
      })
    case 'visibleHeader':
      return Object.assign({}, state, {
            headerVisibility: true
          })

    /* Footer Visibility State */
    case 'invisibleFooter':
      return Object.assign({}, state, {
        footerVisibility: false
      })
    case 'visibleFooter':
      return Object.assign({}, state, {
        footerVisibility: true
      })

    /* Header Color State */
    case 'whiteHeader':
      return Object.assign({}, state, {
        headerType: 'white'
      })
    case 'blueHeader':
      return Object.assign({}, state, {
            headerType: 'blue'
          })
    case 'mixedHeader1':
      return Object.assign({}, state, {
            headerType: 'mixed-1'
          })
    case 'mixedHeader2':
      return Object.assign({}, state, {
            headerType: 'mixed-2'
          })

    /* Global Language  State */
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
  headerType: 'white',
  blogPostsToShow: 12
}

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore
