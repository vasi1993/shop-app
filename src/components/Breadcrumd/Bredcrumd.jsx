import React from "react";
import "./Breadcrumd.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Bredcrumd = ({ product }) => {
  if (!product?.category || !product?.name) return null;

  const formattedCategory =
    product.category.charAt(0).toUpperCase() +
    product.category.slice(1).toLowerCase();
  return (
    <nav className="breadcrum">
      <div className="breadcrum-home">
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>

      <Link className="breadcrum-category" to={`/${product.category}`}>
        <IoIosArrowForward className="breadcrum-icon" aria-hidden="true" />
        {formattedCategory}
      </Link>
      <div className=" breadcrum-product">
        <IoIosArrowForward className="breadcrum-icon" aria-hidden="true" />
        {product.name.split(" ").slice(0, 3).join(" ")}
      </div>
    </nav>
  );
};

export default Bredcrumd;
