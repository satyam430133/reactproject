import React from 'react';
import './RestaurantCard.css'; // Importing CSS file for styling

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-details">
        <h2> Tom N Jerry Restro, Bar & Pub </h2>
        <p>Location: Zone - 1 Bhopal, Madhya Pradesh </p>
        <p>Opening Hours: 10:00 AM - 10:00 PM</p>
        <p>Contact: +1 234 567 890</p>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida lectus nec dui blandit, a bibendum magna laoreet.</p>
        <ul>
        <li> <i class="fa-brands fa-facebook"></i> </li>
          <li> <i class="fa-brands fa-instagram"></i> </li> 
          <li> <i class="fa-brands fa-whatsapp"></i> </li> 
          <li> <i class="fa-brands fa-twitter"></i> </li> 
          <li> <i class="fa-brands fa-youtube"></i> </li>
        </ul>
      </div>
    </div>
  );
}

export default RestaurantCard;
