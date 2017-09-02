import React from 'react'
import {Link} from 'react-router-dom'

const Post = props => {
  let {body, author, id} = props.data

  return (
    <article className='comment' >
      <header>
        {author}
      </header>
      {body}
      <footer>
        <Link className='button' to={`/comment/${id}`}>Edit</Link>
        <button className='button' onClick={() => this.delete(id)}>Delete</button>
      </footer>
    </article>
  )
}

export default Post
