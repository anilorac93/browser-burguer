import React from 'react';

const ButtonLogin = ({ onClick }) => {
  return (
    <button type='submit' onClick={onClick}>
      Entrar
    </button>
  );
};

export default ButtonLogin;