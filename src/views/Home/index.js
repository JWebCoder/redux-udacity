import React, {Component} from 'react'
import Layout from 'components/Layout'
import Order from 'components/Order'
import PostsContainer from 'components/PostsContainer'
import postsService from 'services/posts'
import { bindActionCreators } from 'redux'
import * as PostActions from 'reducers/posts/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => (
  {
    posts: state.posts
  }
)

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(PostActions, dispatch)
  }
)

class Home extends Component {
  componentDidMount() {
    postsService.getPosts().then(
      posts => {
        this.props.actions.setPosts(posts)
      }
    )
  }

  render() {
    return (
      <Layout>
        <Order/>
        <PostsContainer posts={this.props.posts.items}/>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
