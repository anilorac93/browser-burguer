import React from 'react';
import Modal from 'react-modal';
import './Solicitations.css';
import { useNavigate } from 'react-router-dom';
import ButtonMenu from '../../components/ButtonMenu';
import ButtonStatusSolicitations from '../../components/ButtonStatusSolicitations';
import ButtonConfirm from '../../components/ButtonConfirm';
import ButtonCancel from '../../components/ButtonCancel';
import ButtonAbstratctSolicitation from '../../components/ButtonAbstractSolicitation';

export const Solicitations = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);

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
          <h1 className='administration'>
            💻 Tela de status dos pedidos em construção... 🔨🔧
          </h1>
        </Modal>
      
    <div className='square-brown'>        
        <ButtonAbstratctSolicitation onClick={handleOpenModal2}/>
        <Modal
              isOpen={modalIsOpen2}
              onRequestClose={handleCloseModal2}
              contentLabel= 'Resumo dos Pedidos'
              className= 'modal'
            >
          <button onClick={handleCloseModal2} className='closeButton'> X </button>
          <h1 className='administration'>
            💻 Tela de resumo do pedido 🔨🔧
          </h1>
          <div className='bottom-buttons'>
            <ButtonConfirm onClick={handleCancel}/>
            <ButtonCancel onClick={handleCancel}/> 
          </div>
        </Modal>
      </div>
    </div>
);
};