import React, { useState } from 'react';
import ButtonAdd from './ButtonAdd';

const MenuData = ({ data }) => {
  const [order, setOrder] = useState([]);
  const handleAdd = (item) => {
    // if
    setOrder([...order, {...item, quantidade:1}])
    console.log(order)
  }

  return (
    <div>
        <ul>
            {data.map((item) => (
            <li key={item.id}>
                {item.name} <ButtonAdd onClick={() => handleAdd(item)
                }/> 
            </li>
            ))}
        </ul>
    </div>
  );
};

export default MenuData;