import React from 'react';
import deleteIcon from '../assets/deleteIcon.png'; 

const ButtonDelete = ({ onClick }) => {
  return (
    <button type='button' className='button-delete' onClick={onClick}>
      <img src={deleteIcon} alt='Excluir' />
    </button>
  );
};

export default ButtonDelete;