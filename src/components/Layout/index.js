import React from 'react'
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
  children: React.PropTypes.node
}

export default Layout
