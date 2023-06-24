import React, { useRef, useEffect } from 'react';

const Input = ({ label, type, value, onChange, required }) => {
  const inputRef = useRef(null); 

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const inputId = `${label.toLowerCase()}-input`;
  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input 
        ref={inputRef}
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