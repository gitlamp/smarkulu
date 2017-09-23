import en from './en.json'
import fa from './fa.json'

const getLangs = (langKey) => {
  switch (langKey) {
    case 'en': return en;
    case 'fa': return fa;
    default: return en;
  }
}

export default getLangs