/**
 * Custom functions
 */
import $ from 'jquery'

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
/*
 * parentDOM is the one that takes active class
 * childDOM is the one that is hidden or shown
 * expandableDOm is the one that can be clicked
 * (if empty it will be the same is parentDOM)
 * allExpanded if false let only one parent is expanded at a time
 * (defaults to false)
 */
const expandDetails = (parentDOM, childDOM, expandableDOM, allExpanded=true) => {
  let parent = `.${parentDOM}`,
      child = `.${childDOM}`,
  $expandable = expandableDOM ? $(`.${expandableDOM}`) : $(parent)
  $expandable.on('click', function() {
    let $that = expandableDOM ? $(this).parents(parent) : $(this)
     if(!allExpanded && !$that.hasClass('active')) {
      $(parent).not(this).removeClass('active')
      $(parent).not(this).children(child).slideUp()
    }
    $that.children(child).slideToggle()
    $that.toggleClass('active')
  })
}

export { genLink, toPersianDigits, expandDetails }
