import React from "react";

const Menu = ({ menuItems, onAddToCart }) => (
  <div>
    {menuItems.map((item) => (
      <div key={item.id}>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
        <button onClick={() => onAddToCart(item)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

export default Menu;
