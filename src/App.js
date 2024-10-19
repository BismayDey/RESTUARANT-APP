import React, { useState } from "react";
import { restaurants } from "./data/restaurants";
import "./App.css";

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]); // State to track cart items
  const [showCart, setShowCart] = useState(false); // State to toggle cart view

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Add item to cart
  };

  const handleShowCart = () => {
    setShowCart(!showCart); // Toggle cart view
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2); // Calculate total price
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Foodie Paradise</h1>
        <p>Explore a variety of cuisines and order your favorite dishes!</p>
        <button className="cart-button" onClick={handleShowCart}>
          {showCart ? "Close Cart" : "View Cart"} ({cart.length})
        </button>
      </header>

      <div className="content">
        {showCart ? (
          <div className="cart">
            <h2>Your Cart</h2>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <span>{item.name}</span> -{" "}
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
            <button className="checkout-button">Checkout</button>
          </div>
        ) : (
          <>
            <ul className="restaurant-list">
              {restaurants.map((restaurant) => (
                <li
                  key={restaurant.id}
                  onClick={() => handleRestaurantClick(restaurant)}
                  className="restaurant-item"
                >
                  <h2>{restaurant.name}</h2>
                  <p>{restaurant.cuisine}</p>
                  <p>Rating: {restaurant.rating} ⭐</p>
                  <p>Price Range: {restaurant.priceRange}</p>
                </li>
              ))}
            </ul>

            {selectedRestaurant && (
              <div className="restaurant-menu">
                <h2>Menu for {selectedRestaurant.name}</h2>
                <ul>
                  {selectedRestaurant.menu.map((item, index) => (
                    <li key={index}>
                      <span>{item.name}</span> -{" "}
                      <span>${item.price.toFixed(2)}</span>
                      <button onClick={() => handleAddToCart(item)}>
                        Add to Cart
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
