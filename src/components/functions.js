import PropTypes from 'prop-types'
/**
 * Custom functions
 */
const ColumnSizeType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);
const ViewportSizeType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);

const colProps = {
  xs: ColumnSizeType,
  sm: ColumnSizeType,
  md: ColumnSizeType,
  lg: ColumnSizeType,
  xl: ColumnSizeType,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  first: ViewportSizeType,
  last: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
}
const rowProps = {
  reverse: PropTypes.bool,
  start: ViewportSizeType,
  center: ViewportSizeType,
  end: ViewportSizeType,
  top: ViewportSizeType,
  middle: ViewportSizeType,
  bottom: ViewportSizeType,
  around: ViewportSizeType,
  between: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node,
  column: PropTypes.bool
}
const gridProps = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
}
const createProps = (type, props) => {
  const newProps = {}
  var propTypes = []
  switch(type) {
    case 'col':
      propTypes = colProps;
      break;
    case 'row':
      propTypes = rowProps;
      break;
    case 'grid':
      propTypes = gridProps;
      break;
  }
  Object.keys(props)
        .filter(key => (propTypes[key]))
        .forEach(key => (newProps[key] = props[key]));
  return newProps
}

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

export { createProps, setlangKey, genLink, toPersianDigits }
