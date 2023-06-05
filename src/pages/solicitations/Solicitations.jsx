import React from 'react';
import './Solicitations.css';
import { useNavigate } from 'react-router-dom';
import ButtonMenu from '../../components/ButtonMenu';

export const Solicitations = () => {

  const handleMenu = () => {
    navigate2('/cardapio');
  };
  const navigate2 = useNavigate();

return (
  <div className='solicitations-container'>
      <div className='button-logo'>
        {/* <img src='src/assets/logo.png' alt='Logo browser burguer' className='logo-solicitations' />
        <ButtonMenu onClick={handleMenu} /> */}
      </div>
    <div className='square-brown'>
    </div>
  </div>
  );
};