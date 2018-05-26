import React from 'react'
import Helmet from 'react-helmet'
import { Above, TwoColumn } from '../components/Partials'
import { Grid } from 'react-flexbox-grid'

const NotFoundPage = (props) => {
  const lang = props.pathContext.langKey,
        enMessages = {
          style: '/styles/main.css',
          dir: 'ltr',
          header: 'Oops!<br/> We seem to have lost this page!',
          title: 'Page not found',
          img: '/img/404-en.png',
          button: 'Go back'
        },
        faMessages = {
          style: '/styles/main-rtl.css',
          dir: 'rtl',
          header: 'ای وای!<br/> انگار این صفحه را گم کرده‌ایم!',
          title: 'صفحه مورد نظر پیدا نشد',
          img: '/img/404-fa.png',
          button: 'به صفحه قبل برگرد'
        }

  const {style, dir, header, img, button, title} = (lang == 'en') ? enMessages : faMessages
  return (
    <div>
      <Helmet>
        <html lang={lang} dir={dir} />
        <title>{title}</title>
        {(process.env.NODE_ENV === `production`) ? <link rel="stylesheet" href={style}/> : null}
      </Helmet>
      <Grid>
        <Above center="xs">
          <TwoColumn ratio={{ xs:[12,12], sm:[6,6] }}>
            <div>
              <h1 className="content-subheader"><div dangerouslySetInnerHTML={{__html: header}} /></h1>
              <br/>
              <a className="button button-normal" href="javascript:history.back()">{button}</a>
            </div>
            <img src={img} width="100%" />
          </TwoColumn>
        </Above>
      </Grid>
    </div>
  )
}

export default NotFoundPage
