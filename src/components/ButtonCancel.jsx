import React from 'react';

const ButtonCancel = ({ onClick }) => {
  return (
    <button type='reset' className='button-cancel' onClick={onClick}>
      Cancelar
    </button>
  );
};

export default ButtonCancel;