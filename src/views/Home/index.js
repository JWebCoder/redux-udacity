import React, {Component} from 'react'
import Layout from 'components/Layout'
import Post from 'components/Post'
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
    if (!this.props.posts.loaded) {
      postsService.getPosts().then(
        posts => {
          this.props.actions.setPosts(posts.data)
        }
      )
    }
  }

  render() {
    return (
      <Layout>
        {this.props.posts.loaded && this.props.posts.items.map(
          post => (
            <Post post={post}></Post>
          )
        )}

      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
