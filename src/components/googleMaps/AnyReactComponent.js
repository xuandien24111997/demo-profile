import React from 'react';

const AnyReactComponent = ({ onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <div class="pulsating-circle"></div>
    </div>
  )
}

export default AnyReactComponent;