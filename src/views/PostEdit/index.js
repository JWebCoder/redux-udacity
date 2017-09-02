/* global history */
import React, {Component} from 'react'
import Layout from 'components/Layout'
import Comment from 'components/Comment'
import postsService from 'services/posts'
import { bindActionCreators } from 'redux'
import * as PostActions from 'reducers/posts/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => (
  {
    post: state.posts.current
  }
)

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(PostActions, dispatch)
  }
)

class Post extends Component {
  componentDidMount() {
    postsService.getPost(this.props.match.params.post_id).then(
      post => {
        this.props.actions.setCurrentPost(post)
      }
    )
  }

  voteUp(post) {
    postsService.upVote(post.id).then(
      result => {
        this.props.actions.setPost(result)
        this.props.actions.setCurrentPost(result)
      }
    )

  }

  voteDown(post) {
    postsService.downVote(post.id).then(
      result => {
        this.props.actions.setPost(result)
        this.props.actions.setCurrentPost(result)
      }
    )
  }

  createComment() {
    console.log(this.newCommentText.value)
    console.log(this.props.post.id)
  }

  back() {
    if (this.props.location.state && this.props.location.state.fromPost) {
      window.history.back()
    } else {
      this.props.history.push({
        pathname: `/${this.props.post.category}/${this.props.post.id}`
      })
    }
  }

  render() {
    if (Object.keys(this.props.post).length > 0) {
      let {title, body, author, voteScore, comments, id} = this.props.post,
        post = this.props.post
      return(
        <Layout>
          <div className='post-view-edit'>
            <div className='actions'>
              <button className='button' onClick={() => this.save(post)}>Save</button>
              <button className='button' onClick={() => this.delete(id)}>Delete</button>
              <button className='button' onClick={() => this.back()}>Back</button>
            </div>
            <article className='post-content'>
              <header>
                <h1>{title}</h1>
                <div>{author} Votes: {voteScore} <button onClick={() => this.voteUp(post)}>Vote Up</button> <button onClick={() => this.voteDown(post)}>Vote Down</button> </div>
              </header>
              <div className='body'>
                {body}
              </div>
              <footer>
                Comments: {comments.length}
              </footer>
            </article>
            <section className='new-comment'>
              <textarea
                ref={(textarea) => {this.newCommentText = textarea}}
                >
              </textarea>
              <div>
                <button className='button' onClick={() => this.createComment()}>Create</button>
              </div>
            </section>
            {comments.map(
              (comment, index) => (
                <Comment key={index} data={comment}/>
              )
            )}
          </div>
        </Layout>
      )
    } else {
      return null
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
