import React from 'react';

const AnyReactComponent = ({ onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <div className="pulsating-circle"></div>
    </div>
  )
}

export default AnyReactComponent;
