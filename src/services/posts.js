import axios from 'axios'

export const getPosts = () => {
  return axios.get('http://localhost:5001/posts',
    {
      headers: { Authorization: 'whatever-you-want' }
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
