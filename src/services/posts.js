import axios from 'axios'

export const getPosts = () => {
  return axios.get('http://localhost:5001/posts',
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  )
}

const service = {
  getPosts
}

export default service
