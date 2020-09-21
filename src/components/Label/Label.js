import React from 'react';
import './Label.css';

const Label = ({ children, ...rest }) => {
  return (
    <label className="label" {...rest}>
      { children }
    </label>
  )
}

export default Label;