import axios from 'axios'

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
        post => getComments(post.id)
      )

      return Promise.all(promises).then(
        (comments) => {
          return posts.map(
            (post, index) => {
              post.comments = comments[index]
              return post
            }
          )
        }
      )
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
  )
}

const service = {
  getPosts,
  upVote,
  downVote
}

export default service
