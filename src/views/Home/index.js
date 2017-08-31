import React, {Component} from 'react'
import Layout from 'components/Layout'
import Post from 'components/Post'
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

class Home extends Component {
  componentDidMount() {
    postsService.getPosts().then(
      posts => {
        this.props.actions.setPosts(posts.data)
      }
    )
  }

  voteUp(post) {
    postsService.upVote(post.id).then(
      result => {
        this.props.actions.setPost(result.data)
      }
    )

  }

  voteDown(post) {
    postsService.downVote(post.id).then(
      result => {
        this.props.actions.setPost(result.data)
      }
    )
  }

  render() {
    return (
      <Layout>
        <Order/>
        {this.props.posts.items.map(
          (post, index) => (
            <Post
              key={index}
              post={post}
              onVoteUp={(post) => this.voteUp(post)}
              onVoteDown={(post) => this.voteDown(post)}
            />
          )
        )}
      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
