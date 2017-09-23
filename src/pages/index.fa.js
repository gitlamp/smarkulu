import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const IndexPage = () => (
  <div>
    <h1>خانه</h1>
    <p>به تسکولو خوش آمدید.</p>
    <Link to="/product">امکانات</Link>
  </div>
)

export default IndexPage
