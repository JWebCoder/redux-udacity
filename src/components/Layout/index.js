import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

const Layout = props => {
  const containerClass = classNames(
    'main-container'
  )
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </nav>
      <div className={containerClass}>
        {props.children}
      </div>
      Footer
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
