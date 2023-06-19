import React from 'react';

const MenuData = ({ data }) => {

  return (
    <div>
        <ul>
            {data.map((item) => (
            <li key="item.id">
                {item.id} - {item.name} - {item.price}
            </li>
            ))};
        </ul>
    </div>
  );
};

export default MenuData;