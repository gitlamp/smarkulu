import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

import SEO from './SEO'
import Input from './Input'

const Index = (props) => {
  const { data } = props
  const { slug, langKey } = props.pathContext
  const generateLink = (link) => {
    return slug + link
  }

  return (
  <div>
    {data.allContentYaml.edges.map(({node}) =>
      <div key={node.id}>
      <SEO
        pagePath={langKey}
        title={node.header.title}
        generalDesc={node.header.desc}/>
      <section className="masthead center">
        <div className="container">
          <div className="row">
            <div className="col content">
            <h1 className="content-head">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, laboriosam!</h1>
            <p className="content-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis adipisci provident est aspernatur architecto doloribus quas. Quo nobis molestias id exercitationem laborum accusamus explicabo odio rem? Voluptate at perspiciatis aliquam!</p>
            <Input placeholder="Enter your email address"/>
            </div>
          </div>
          <div className="proto">
            <div className="proto-content"></div>
            <img src="/img/browser_frame.png"/>
          </div>
        </div>
      </section>
      <section style={{backgroundColor: '#f6f8f9'}}>
        <div className="container">
          <div className="row">
            <div className="col-4 content">
              <h2 className="content-head">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
              <p className="content-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ipsa nemo repudiandae aspernatur neque voluptatibus ut fugit vero fuga obcaecati possimus quod magnam tempore illum rerum, autem nihil repellendus numquam?</p>
            </div>
            <div className="col-8"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-8"></div>
            <div className="col-4 content">
              <h2 className="content-head">Lorem, ipsum dolor.</h2>
              <p className="content-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vero inventore labore nisi cum itaque expedita nihil unde. Ratione enim ex est sed explicabo praesentium, aliquid maxime vitae libero nostrum reprehenderit nemo. Reiciendis, et autem.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{backgroundColor: '#2980b9'}}>
        <div className="container">
          <div className="row justify-content-center align-items-center testimonial">
            <div className="col-4">
              <a className="testimonial-media"></a>
            </div>
            <div className="col-4 testimonial-content">
              <h3 className="testimonial-content-head">Lorem ipsum dolor sit.</h3>
              <span className="testimonial-content-subhead">Lorem ipsum dolor sit amet.</span>
              <p className="testimonial-content-quote">" Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis quia perspiciatis iusto iste doloribus voluptatem et impedit consequuntur optio! "</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center compcards">
            <div className="col-4 compcards-content">
              <div className="content align-items-right">
                <h2 className="content-head">Lorem ipsum dolor sit amet.</h2>
                <p className="content-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam consectetur obcaecati tempora, aut assumenda quasi nemo voluptates error modi.</p>
              </div>
            </div>
            <div className="col-8 row">
              <div className="col compcards-card"></div>
              <div className="col compcards-card"></div>
              <div className="col compcards-card"></div>
              <div className="w-100"></div>
              <div className="col compcards-card"></div>
              <div className="col compcards-card"></div>
              <div className="col compcards-card"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 content">
              <h2 className="content-head">Lorem ipsum dolor sit amet.</h2>
              <p className="content-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo odio saepe cupiditate consequatur velit! Aliquid aliquam quam non eius!</p>
              <Input placeholder="Enter your email address"/>
            </div>
          </div>
        </div>
      </section>
      </div>
    )}
  </div>
  )
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired
}

export default Index