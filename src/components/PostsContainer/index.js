import React, {Component} from 'react'
import PostItem from 'components/PostItem'
import postsService from 'services/posts'
import { bindActionCreators } from 'redux'
import * as PostActions from 'reducers/posts/actions'
import {connect} from 'react-redux'

const mapStateToProps = null

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(PostActions, dispatch)
  }
)

class PostsContainer extends Component {
  voteUp(post) {
    postsService.upVote(post.id).then(
      result => {
        this.props.actions.setPost(result)
      }
    )
  }

  voteDown(post) {
    postsService.downVote(post.id).then(
      result => {
        this.props.actions.setPost(result)
      }
    )
  }

  render() {
    return (
      <section className='posts-container'>
        {this.props.posts.map(
          (post, index) => (
            <PostItem
              key={index}
              post={post}
              onVoteUp={(post) => this.voteUp(post)}
              onVoteDown={(post) => this.voteDown(post)}
            />
          )
        )}
      </section>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
