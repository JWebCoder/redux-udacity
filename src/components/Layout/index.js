import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

const Layout = props => {
  const containerClass = classNames(
    'main-container'
  )
  return (
    <div className='app'>
      <nav className='menu'>
        <ul className='menu-list'>
          <li className='menu-item'>
            <NavLink to="/" exact activeClassName='menu-link-active' className='menu-link'>Home</NavLink>
          </li>
          <li className='menu-item'>
            <NavLink to="/categories" activeClassName='menu-link-active' className='menu-link'>Categories</NavLink>
          </li>
        </ul>
      </nav>
      <div className={containerClass}>
        {props.children}
      </div>
      <footer className='footer'>
        <div className='inline made-by'>Made by: João Moura</div>
        <a className='inline' href='https://github.com/JWebCoder'>
          <i className='fa fa-github'></i>
        </a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
