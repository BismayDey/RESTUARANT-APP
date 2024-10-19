import React, { useState } from "react";
import "./RestaurantList.css";

function RestaurantList({ restaurants, onSelectRestaurant }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("All");

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      (cuisineFilter === "All" || restaurant.cuisine === cuisineFilter) &&
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="restaurant-list">
      <div className="restaurant-list__filters">
        <input
          type="text"
          placeholder="Search for a restaurant..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={cuisineFilter}
          onChange={(e) => setCuisineFilter(e.target.value)}
        >
          <option value="All">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>

      <ul className="restaurant-list__items">
        {filteredRestaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            onClick={() => onSelectRestaurant(restaurant)}
          >
            <h3>{restaurant.name}</h3>
            <p>{restaurant.cuisine}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
