import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Solicitations.css';
import { useNavigate } from 'react-router-dom';
import ButtonMenu from '../../components/ButtonMenu';
import ButtonStatusSolicitations from '../../components/ButtonStatusSolicitations';
import ButtonConfirm from '../../components/ButtonConfirm';
import ButtonCancel from '../../components/ButtonCancel';
import ButtonAbstratctSolicitation from '../../components/ButtonAbstractSolicitation';
import MenuData from '../../components/MenuData';
import { solicitationsAPI } from '../../API/ApiMockSolicitations';
// import ButtonAdd from '../../components/ButtonAdd';

export const Solicitations = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [data, setData] = useState([]);
  // const [count, setCount] = useState(0);

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

  // const handleAdd = () => {
  //   // useState é um Hook que define uma variável reativa
  //   setCount(count + 1);
  //   return (
  //     <div>
  //       <button onClick={() => }>Comprar: {count}</button>
  //       <p>Total: {count}</p>
  //       <p>Preço: R$ {count * 250}</p>
  //     </div>
  //   );
  // };

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

        {/* <ButtonAdd onClick={handleAdd} /> */}
        
        <MenuData data={data} />         
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