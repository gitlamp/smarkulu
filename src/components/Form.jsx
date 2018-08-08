import React from 'react'
import Helmet from 'react-helmet'

class Form extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var form = document.getElementById('form1')
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://m.taskulu.com/form/generate.js?id=1'
    form.appendChild(script)
  }
  render() {
    return(
      <div id="form1"></div>
    )
  }
}

export default Form
