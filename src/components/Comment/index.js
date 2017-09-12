import React from 'react'
import {Link} from 'react-router-dom'
import postsService from 'services/posts'
import { bindActionCreators } from 'redux'
import * as PostActions from 'reducers/posts/actions'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(PostActions, dispatch)
  }
)

let commentBeforeEdit

const Comment = props => {
  const voteUp = () => {
    postsService.upVoteComment(props.data.id).then(
      result => {
        props.actions.updateComment(result, result.parentId)
        props.actions.setCurrentPostFromStore(result.parentId)
      }
    )

  }

  const voteDown = () => {
    postsService.downVoteComment(props.data.id).then(
      result => {
        props.actions.updateComment(result, result.parentId)
        props.actions.setCurrentPostFromStore(result.parentId)
      }
    )
  }

  const deleteComment = () => {
    postsService.deleteComment(props.data.id).then(
      result => {
        props.actions.deleteComment(result.id, result.parentId)
        props.actions.setCurrentPostFromStore(result.parentId)
      }
    )
  }

  const toggleEditComment = (id) => {
    commentBeforeEdit = {
      ...props.data
    }
    props.actions.toggleEditComment(id)
  }

  const saveComment = (comment) => {
    postsService.saveComment(comment).then(
      result => {
        props.actions.updateComment(result, result.parentId)
        props.actions.setCurrentPostFromStore(result.parentId)
      }
    )
  }

  const cancelEditComment = () => {
    const comment = {
      ...commentBeforeEdit
    }
    props.actions.updateComment(comment, comment.parentId)
    props.actions.setCurrentPostFromStore(comment.parentId)
  }

  const updateComment = (field, value) => {
    const comment = {
      ...props.data,
      [field]: value
    }
    props.actions.updateComment(comment, comment.parentId)
    props.actions.setCurrentPostFromStore(comment.parentId)
  }

  let {body, author, id, voteScore, parentId, edit} = props.data

  return (
    <article className='comment'>
      <header>
        <div>
          {author}
        </div>
        <div className='sub-header'>
          <div className='score'>
            Votes: {voteScore}
          </div>
          <div className='actions'>
            <button onClick={() => voteUp(props.data)}><i className='fa fa-thumbs-o-up'></i></button>
            <button onClick={() => voteDown(props.data)}><i className='fa fa-thumbs-o-down'></i></button>
            <button onClick={() => toggleEditComment(id)}><i className='fa fa-pencil-square-o'></i></button>
          </div>
        </div>
      </header>
      {edit && (
        <textarea
          type='text'
          value={body}
          onChange={(event) => {
            updateComment('body', event.target.value);
          }}
          />
      ) || body}
      <footer>
        {edit && (
          <button className='button' onClick={() => saveComment(props.data)}>Save</button>
        )}
        {edit && (
          <button className='button' onClick={() => cancelEditComment()}>Cancel</button>
        )}

        <button className='button' onClick={() => deleteComment(id)}>Delete</button>
      </footer>
    </article>
  )
}

export default connect(null, mapDispatchToProps)(Comment)
