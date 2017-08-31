import React from 'react';
import classnames from 'classnames';

const Loader = props => {
  const elemClass = classnames(
    'loader',
    {'hidden': !props.visible}
  );

  return (
    <div className={elemClass}>
      Loading
    </div>
  )
}

export default Loader;
