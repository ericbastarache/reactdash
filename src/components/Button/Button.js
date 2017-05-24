import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className={props.buttonClassName}>{props.buttonText}</button>
  );
}

export default Button;
