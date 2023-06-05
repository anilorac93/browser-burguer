import React from 'react';

const Input = ({ label, type, value, onChange, required }) => {
  const inputId = `${label.toLowerCase()}-input`;
  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
