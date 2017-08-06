import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Layout = props => {
  const containerClass = classNames(
    'main-container'
  )
  return (
    <div>
      Menu
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
