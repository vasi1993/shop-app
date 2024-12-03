import React from "react";
import "./Card.css";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Card = ({ id, image, name, stars_number, new_price }) => {
  return (
    <div className="card">
      <div className="card-items">
        <Link to={`/product/${id}`}>
          <img src={image} alt="card" className="card-image" />
        </Link>
        <p className="card-title">{name}</p>
        <div className="stars">
          <div className="star">
            <FaStar className="star-item" />
            <FaStar className="star-item" />
            <FaStar className="star-item" />
            <FaStar className="star-item" />
          </div>
          {/* <div className="stars-number">{stars_number}</div> */}
        </div>
        <div className="card-price">
          <span>$</span>
          <span>{new_price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
