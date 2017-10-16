import React from 'react'
/**
 * Custom functions
 */
const getlangKey = (langCode) => {
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

export { getlangKey }