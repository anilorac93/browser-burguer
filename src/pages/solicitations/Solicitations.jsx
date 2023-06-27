import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './Solicitations.css';
import ButtonMenu from '../../components/ButtonMenu';
import ButtonStatusSolicitations from '../../components/ButtonStatusSolicitations';
import ButtonConfirm from '../../components/ButtonConfirm';
import ButtonCancel from '../../components/ButtonCancel';
import ButtonAbstratctSolicitation from '../../components/ButtonAbstractSolicitation';
import MenuData from '../../components/MenuData';
import Input from '../../components/Input';
import ButtonGenerateSolicitationNumber from '../../components/ButtonGenerateSolicitationNumber'
import { solicitationsAPI } from '../../API/ApiMockSolicitations';

export const Solicitations = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    solicitationsAPI({
      data })
     .then(response => response.json())
     .then(data => {
     setData(data)
    });
   });

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal2 = () => {
    setIsOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsOpen2(false);
  };

  const handleMenu = () => {
    navigate2('/cardapio');
  };
  const navigate2 = useNavigate();

  const handleCancel = () => {
    window.location.reload();
  };

  const handleNameChange = (e) => { 
    setName(e.target.value); 
  };
  
return (
  <div className='solicitations-container'>
        <img src='src/assets/logo.png' alt='Logo browser burguer' className='logo-solicitations' />
      <div className='top-buttons'>
        <ButtonMenu onClick={handleMenu}/>
        <ButtonStatusSolicitations onClick={handleOpenModal}/>
      </div>
        <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleCloseModal}
              contentLabel= 'Status Pedidos'
              className= 'modal'
            >
          <button onClick={handleCloseModal} className='closeButton'> X </button>
          <h1 className='status-solicitations'>
            💻 Tela de status dos pedidos em construção... 🔨🔧
          </h1>
        </Modal>
      
    <div className='square-brown'>  

      <Input
          label='Nome do cliente:'
          type='text'
          value={name}
          onChange={handleNameChange}
          required
        />
         <ButtonGenerateSolicitationNumber/>
        
        <MenuData data={data} />         
        <ButtonAbstratctSolicitation onClick={handleOpenModal2}/>
        <Modal
              isOpen={modalIsOpen2}
              onRequestClose={handleCloseModal2}
              contentLabel= 'Resumo dos Pedidos'
              className= 'modal'
            >
          <button onClick={handleCloseModal2} className='closeButton'> X </button>
          <h1 className='abstract-solicitation'>
            💻 Tela de resumo do pedido 🔨🔧
          </h1>
          <div className='bottom-buttons'>
            <ButtonCancel onClick={handleCancel}/> 
             <ButtonConfirm onClick={handleCancel}/>
          </div>
        </Modal>
      </div>
    </div>
);
};