import React from 'react';

const ButtonMenu = ({ onClick }) => {
  return (
    <button className='button-menu' onClick={onClick}>
      Cardápio
    </button>
  );
};

export default ButtonMenu;