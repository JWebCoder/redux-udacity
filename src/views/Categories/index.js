import React from 'react'
import Layout from '../../components/Layout'

const Categories = props => (
  <Layout>
    <div>
      Category<br/>
      {props.match.params.category}
    </div>
  </Layout>
)

export default Categories
