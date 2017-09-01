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
      const posts = result.data
      let promises = posts.map(
        post => addCommentsToPost(post)
      )

      return Promise.all(promises)
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

const service = {
  getPosts,
  upVote,
  downVote
}

export default service
