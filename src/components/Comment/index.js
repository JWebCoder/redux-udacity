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

  let {body, author, id, voteScore} = props.data

  return (
    <article className='comment' >
      <header>
        {author} Votes: {voteScore} <button onClick={() => voteUp(props.data)}>Vote Up</button> <button onClick={() => voteDown(props.data)}>Vote Down</button>
      </header>
      {body}
      <footer>
        <Link className='button' to={`/comment/${id}`}>Edit</Link>
        <button className='button' onClick={() => this.delete(id)}>Delete</button>
      </footer>
    </article>
  )
}

export default connect(null, mapDispatchToProps)(Comment)
