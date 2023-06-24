import React, {useState} from 'react';

const ButtonGenerateSolicitationNumber = () => {

const [num, setNum] = useState(0);

function randomNumberInRange() {
    return  Math.round(Math.random() * 1000) ;
  }

  const handleGenerateNumber = () => {
    setNum(randomNumberInRange());
  };

  return (
    <div>
      <button className='solicitation-number' onClick={handleGenerateNumber}> Número do pedido: {num} </button>
    </div>
  );
};

export default ButtonGenerateSolicitationNumber;