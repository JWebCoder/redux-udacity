import React from 'react'

const Post = props => {
  let {title, author, voteScore, comments} = props.post,
    onVoteUp = props.onVoteUp,
    onVoteDown = props.onVoteDown

  return (
    <article className='post'>
      <header>
        {title}
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
