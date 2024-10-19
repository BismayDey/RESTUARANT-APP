import React from "react";

const OrderSummary = ({ order }) => (
  <div>
    <h2>Order Summary</h2>
    {order.map((item, index) => (
      <div key={index}>
        <p>
          {item.name} - {item.price}
        </p>
      </div>
    ))}
    <h4>Total: ${order.reduce((total, item) => total + item.price, 0)}</h4>
  </div>
);

export default OrderSummary;
