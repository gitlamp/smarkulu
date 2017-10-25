/**
 * Custom functions
 */
const setlangKey = (langCode) => {
  var langKey = ''
  if(langCode) {
    if(langCode !== 'IR') {
      var langKey = 'en'
      console.log('locale is en')
    } else {
      var langKey = 'fa'
      console.log('locale is fa')
    }
  }
  return langKey
}

const genLink = (lang, link) => {
  if (lang == 'en') {
    return link
  } else {
    return lang + link
  }
}

export { setlangKey, genLink }