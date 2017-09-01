import React, {Component} from 'react'
import Layout from 'components/Layout'
import PostsContainer from 'components/PostsContainer'
import Order from 'components/Order'
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

class PostsCategory extends Component {
  componentDidMount() {
    postsService.getPosts().then(
      posts => {
        this.props.actions.setPosts(posts)
      }
    )
  }

  render() {
    const posts = this.props.posts.items.filter(
      (post) => (post.category === this.props.match.params.category)
    )

    return (
      <Layout>
        <Order/>
        <PostsContainer posts={posts}/>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsCategory)
