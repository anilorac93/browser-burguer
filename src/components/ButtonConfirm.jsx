import React from 'react';

const ButtonConfirm = ({ onClick }) => {
  return (
    <button type='submit' className='button-confirm' onClick={onClick}>
      Confirmar
    </button>
  );
};

export default ButtonConfirm;