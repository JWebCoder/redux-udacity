import React from 'react'
import { Link } from 'react-router-dom'

const Category = props => {
  let name, path

  ({name, path} = props.data)
  return (
    <Link className='post' to={path}>
      {name}
    </Link>
  )
}

export default Category
