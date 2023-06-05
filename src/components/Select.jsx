import React from 'react';

const Select = ({ label, value, onChange, options }) => {
  const selectId = `${label.toLowerCase()}-select`;

  return (
    <div>
      <label htmlFor={selectId}>{label}</label>
      <select id={selectId} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;