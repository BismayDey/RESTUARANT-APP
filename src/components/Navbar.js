import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">FoodieApp</h1>
      <ul className="navbar__links">
        <li>
          <Link to="/">Restaurants</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/order-summary">Order Summary</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
