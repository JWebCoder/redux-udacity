import React from 'react'
import {Link} from 'react-router-dom'

const Post = props => {
  let {title, author, voteScore, comments, id, category} = props.post,
    onVoteUp = props.onVoteUp,
    onVoteDown = props.onVoteDown

  return (
    <article className='post'>
      <header>
        <Link to={`/${category}/${id}`}>{title}</Link>
        <div>
          Votes: {voteScore} <button onClick={() => onVoteUp(props.post)}>Vote Up</button> <button onClick={() => onVoteDown(props.post)}>Vote Down</button>
        </div>
      </header>
      <footer>
        {author} Comments: {comments.length}
      </footer>
    </article>
  )
}

export default Post
