import React from 'react';

const ButtonMenu = ({ onClick }) => {
  return (
    <button className= 'buttonMenuSolicitations' onClick={onClick}>
      Cardápio
    </button>
  );
};

export default ButtonMenu;