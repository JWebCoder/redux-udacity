import axios from 'axios'

export const getCategories = () => {
  return axios.get('http://localhost:5001/categories',
    {
      headers: { Authorization: 'whatever-you-want' }
    }
  ).then(
    result => {
      result.data = result.data.categories
      return result
    }
  )
}

const service = {
  getCategories
}

export default service
