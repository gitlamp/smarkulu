/**
 * Custom functions
 */

const genLink = (lang, link) => {
  if (lang == 'en') {
    return link
  } else {
    return '/' + lang + link
  }
}

const toPersianDigits = (v) => {
  let id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    // let string = v + ''
    let chars = v.toString().split('')
    for(var i = 0; i < chars.length; i++) {
      if(/\d/.test(chars[i])) {
        chars[i] = id[chars[i]]
      }
    }
    return chars.join('')
}

export { genLink, toPersianDigits }
