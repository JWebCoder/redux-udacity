import React, {Component} from 'react'
import Layout from 'components/Layout'
import Comment from 'components/Comment'
import {Link} from 'react-router-dom'
import uuidv1 from 'uuid/v1'
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
        this.props.actions.setPost(post)
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
        console.log(result)
      }
    )
  }

  createComment() {
    postsService.createComment(
      uuidv1(),
      (new Date()).getTime(),
      this.newCommentText.value,
      this.newCommentAuthor.value,
      this.props.post.id
    ).then(
      result => {
        const updatedPost = {
          ...this.props.post,
          comments: [
            ...this.props.post.comments,
            result
          ]
        }
        this.props.actions.setPost(updatedPost)
        this.props.actions.setCurrentPost(updatedPost)
      }
    )
  }

  render() {
    if (Object.keys(this.props.post).length > 0) {
      let {title, body, author, voteScore, comments, id, category} = this.props.post,
        post = this.props.post
      return(
        <Layout>
          <div className='post-view-edit'>
            <div className='actions'>
              <Link
                className='button'
                to={
                  {
                    pathname: `/${category}/${id}/edit`,
                    state: {fromPost: true}
                  }
                }>
                Edit
              </Link>
              <button className='button' onClick={() => this.delete(id)}>Delete</button>
            </div>
            <article className='post-content'>
              <header>
                <h1>{title}</h1>
                <div>
                  {author} Votes: {voteScore} <button onClick={() => this.voteUp(post)}>Vote Up</button> <button onClick={() => this.voteDown(post)}>Vote Down</button>
                </div>
              </header>
              <div className='body'>
                {body}
              </div>
              <footer>
                Comments: {comments.length}
              </footer>
            </article>
            <section className='new-comment'>
              <input
                type='text'
                placeholder='Your name'
                ref={(input) => {this.newCommentAuthor = input}}
                />
              <br/>
              <textarea
                ref={(textarea) => {this.newCommentText = textarea}}
                placeholder='Insert the comment here'
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
