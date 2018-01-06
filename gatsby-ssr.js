import Helmet from 'react-helmet'

exports.onRenderBody = (
  { setHeadComponents, setHtmlAttributes }
) => {
  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.link.toComponent()
  ])
}