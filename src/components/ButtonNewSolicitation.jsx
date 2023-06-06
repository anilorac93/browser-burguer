import React from 'react';

const ButtonNewSolicitation = ({ onClick }) => {
  return (
    <button className='button-new-solicitation' onClick={onClick}>
      Novo pedido
    </button>
  );
};

export default ButtonNewSolicitation;