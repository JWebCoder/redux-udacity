import React from 'react'

const Post = props => {
  let title, author, voteScore

  ({title, author, voteScore} = props.post)
  return (
    <article className='post'>
      <header>
        {title} {voteScore}
      </header>
      <footer>
        {author}
      </footer>
    </article>
  )
}

export default Post
