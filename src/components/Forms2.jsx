import React from 'react'
import graphql from 'graphql'

class Form extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if (typeof MauticSDKLoaded == 'undefined') {
      var MauticSDKLoaded = true;
      var head            = document.getElementsByTagName('head')[0];
      var script          = document.createElement('script');
      script.type         = 'text/javascript';
      script.src          = 'https://m.taskulu.com/media/js/mautic-form.js';
      script.onload       = function() {
        MauticSDK.onLoad();
      };
      head.appendChild(script);

      var MauticDomain = 'https://m.taskulu.com';
      var MauticLang   = {
        'submittingMessage': "Please wait..."
      }
    }
    console.log(this.props.id)
    var form = document.getElementById(`mautic-form-${this.props.formContent.id}`)
    var script2 = document.createElement('script')
    script2.type = 'text/javascript'
    script2.src = 'https://m.taskulu.com/form/generate.js?id=1'
    form.insertBefore(script2, document.getElementById(`form-inner-${this.props.formContent.id}`))
  }

  cleanStyle (cached) {
    return cached.replace(/<style(.|\n)*?<\/style>/, "")
  }
  render() {
    const { id, cachedHtml } = this.props.formContent
    return(
      <div id={`mautic-form-${id}`} >
        <div id={`form-inner-${id}`}>
          <div dangerouslySetInnerHTML={{__html: this.cleanStyle(cachedHtml)}} />
        </div>
      </div>
    )
  }
}

export default Form

export const mauticQuery = graphql`
  fragment mauticFormData on MauticForm {
      id
      cachedHtml
  }
`
