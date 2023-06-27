import React, { useState } from 'react';
import ButtonAdd from './ButtonAdd';
import ButtonRemove from './ButtonRemove';
// import ButtonDelete from './ButtonDelete'

const MenuData = ({ data }) => {
  const [order, setOrder] = useState([]);

  const handleAdd = (item) => {
    const existingItem = order.find((orderItem) => orderItem.id === item.id);

    if (existingItem) {
      const updatedOrder = order.map((orderItem) => {
        if (orderItem.id === item.id) {
          return { ...orderItem, quantidade: orderItem.quantidade + 1 };
        }
        return orderItem;
      });
      setOrder(updatedOrder);
    } else {
      setOrder([...order, { ...item, quantidade: 1 }]);
    }
  };

  const handleRemove = (item) => {
    const existingItem = order.find((orderItem) => orderItem.id === item.id);

    if (existingItem && existingItem.quantidade > 0) {
      const updatedOrder = order.map((orderItem) => {
        if (orderItem.id === item.id) {
          return { ...orderItem, quantidade: orderItem.quantidade - 1 };
        }
        return orderItem;
      });
      setOrder(updatedOrder);
    }
  };

  // const handleDelete = (item) => {
  //   const updatedOrder = order.filter((orderItem) => orderItem.id !== item.id);
  //   setOrder(updatedOrder);
  // };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} <ButtonAdd onClick={() => handleAdd(item)} />
            <span className='quantity-product'>
             {order.find((orderItem) => orderItem.id === item.id)?.quantidade}
            </span>
           <ButtonRemove onClick={() => handleRemove(item)} />
           {/* <ButtonDelete onClick={() => handleDelete(item)} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuData;