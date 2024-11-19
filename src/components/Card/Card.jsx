import React from "react";
import "./Card.css";
import { FaStar } from "react-icons/fa6";
const Card = ({ image, title, stars_number, price }) => {
  return (
    <div className="card">
      <div className="card-items">
        <img src={image} alt="card" className="card-image" />
        <h2 className="card-title">{title}</h2>
        <div className="stars">
          <div className="star">
            <FaStar className="star-item" />
            <FaStar className="star-item" />
            <FaStar className="star-item" />
            <FaStar className="star-item" />
          </div>
          <div className="stars-number">{stars_number}</div>
        </div>
        <div className="card-price">
          <span>$</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
