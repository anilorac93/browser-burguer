import React from 'react';
import removeIcon from '../assets/removeIcon.png'; 

const ButtonRemove = ({ onClick }) => {
  return (
    <button type='button' className='button-remove' onClick={onClick}>
      <img src={removeIcon} alt='Remover' />
    </button>
  );
};

export default ButtonRemove;