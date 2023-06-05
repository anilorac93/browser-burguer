import React from 'react';

const ButtonMenu = ({ onClick }) => {
  return (
    <button className="button-menu button-solicitation" onClick={onClick}>
      Cardápio
    </button>
  );
};

export default ButtonMenu;