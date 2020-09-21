import React from 'react';
import './Form.css';

const Form = ({ children, ...rest }) => {
  return (
    <form className="form" {...rest}>
      { children }
    </form>
  )
}

export default Form;