import React from 'react';
import './InputField.css';

const InputField = ({name, type, placeholder, onChange}) => {
  return (
    <input name={name} type={type} placeholder={placeholder} onChange={onChange} className={"form-control"}/>
  );
}

export default InputField;
