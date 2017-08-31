import React from 'react'

const Post = props => {
  let {title, author, voteScore} = props.post,
    onVoteUp = props.onVoteUp,
    onVoteDown = props.onVoteDown

  return (
    <article className='post'>
      <header>
        {title} Votes:{voteScore} <button onClick={() => onVoteUp(props.post)}>Vote Up</button> <button onClick={() => onVoteDown(props.post)}>Vote Down</button>
      </header>
      <footer>
        {author}
      </footer>
    </article>
  )
}

export default Post
