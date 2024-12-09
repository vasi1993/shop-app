import React from "react";
import "./Breadcrum.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Bredcrum = ({ product }) => {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate(`/${product.category}`);
  };

  return (
    <div className="breadcrum">
      <div className="breadcrum-home">
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>

      <div className="breadcrum-category" onClick={goToCategory}>
        <IoIosArrowForward className="breadcrum-icon" />
        {product.category.charAt(0).toUpperCase() +
          product.category.slice(1).toLowerCase()}
      </div>
      <div className=" breadcrum-product">
        <IoIosArrowForward className="breadcrum-icon" />
        {product.name}
      </div>
    </div>
  );
};

export default Bredcrum;
