import React from 'react'
import Layout from '../../components/Layout'

const Post = props => (
  <Layout>
    <div>
      Category<br/>
      {props.match.params.category}
    </div>
    <br/>
    <div>
      Post id<br/>
      {props.match.params.post_id}
    </div>
  </Layout>
)

export default Post
