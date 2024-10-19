import React from "react";
import "./Cart.css";

function Cart({
  cartItems,
  onRemoveItem,
  onCheckout,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart__items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart__item">
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div className="cart__quantity">
                <button onClick={() => onDecreaseQuantity(index)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncreaseQuantity(index)}>+</button>
              </div>
              <button
                className="cart__remove"
                onClick={() => onRemoveItem(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <button className="cart__checkout" onClick={onCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
