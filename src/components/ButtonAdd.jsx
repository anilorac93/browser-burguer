import React from 'react';
import moreIcon from '../assets/moreIcon.png'; 

const ButtonAdd = ({ onClick }) => {
  
  return (
    <button type='button' className='button-add' onClick={onClick}>
      <img src={moreIcon} alt='Adicionar' />
    </button>
  );
};

export default ButtonAdd;