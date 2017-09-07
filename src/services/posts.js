import axios from 'axios'

const addCommentsToPost = (post) => {
  return getComments(post.id).then(
    (comments) => {
      post.comments = comments
      return post
    }
  )
}

export const getComments = (id) => {
  return axios.get(`http://localhost:5001/posts/${id}/comments`,
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => result.data
  )
}

export const getPosts = () => {
  return axios.get('http://localhost:5001/posts',
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => {
      const posts = result.data.filter(
        post => !post.deleted
      )

      let promises = posts.map(
        post => addCommentsToPost(post)
      )

      return Promise.all(promises)
    }
  )
}

export const getPost = (id) => {
  return axios.get(`http://localhost:5001/posts/${id}`,
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => {
      const post = result.data
      return addCommentsToPost(post)
    }
  )
}

export const getPostsByCategory = (category) => {
  return axios.get(`http://localhost:5001/${category}/posts`,
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  )
}

export const upVote = (id) => {
  return axios.post(`http://localhost:5001/posts/${id}`,
    {
      option: 'upVote'
    },
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => {
      return addCommentsToPost(result.data)
    }
  )
}

export const downVote = (id) => {
  return axios.post(`http://localhost:5001/posts/${id}`,
    {
      option: 'downVote'
    },
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => {
      return addCommentsToPost(result.data)
    }
  )
}

export const upVoteComment = (id) => {
  return axios.post(`http://localhost:5001/comments/${id}`,
    {
      option: 'upVote'
    },
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => result.data
  )
}

export const downVoteComment = (id) => {
  return axios.post(`http://localhost:5001/comments/${id}`,
    {
      option: 'downVote'
    },
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => result.data
  )
}

export const createComment = (id, timestamp, body, author, parentId) => {
  return axios.post(`http://localhost:5001/comments`,
    {
      id,
      timestamp,
      body,
      author,
      parentId
    },
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => result.data
  )
}

export const deleteComment = (id) => {
  return axios.delete(`http://localhost:5001/comments/${id}`,
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => result.data
  )
}

export const deletePost = (id) => {
  return axios.delete(`http://localhost:5001/posts/${id}`,
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => result.data
  )
}

export const savePost = (post) => {
  return axios.put(`http://localhost:5001/posts/${post.id}`,
    {
      ...post
    },
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => result.data
  )
}

export const createPost = (post) => {
  return axios.post(`http://localhost:5001/posts`,
    {
      ...post
    },
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => result.data
  )
}

const service = {
  getPosts,
  upVote,
  downVote,
  upVoteComment,
  downVoteComment,
  getPost,
  createComment,
  deleteComment,
  deletePost,
  savePost,
  createPost
}

export default service
