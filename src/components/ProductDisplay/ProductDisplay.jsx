import React from "react";
import "./ProductDisplay.css";
import { FaStar } from "react-icons/fa6";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
          <img src={product.image} alt="product-image" />
        </div>
        <div className="product-display-img">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <FaStar className="star-item" />
          <FaStar className="star-item" />
          <FaStar className="star-item" />
          <FaStar className="star-item" />
        </div>
        <div className="produc-display-right-prices">
          <div className="produc-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="produc-display-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          {" "}
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="product-display-right-colors">
          <p>Select Colors</p>
          <div className="colors">
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </div>
        <div className="produc-display-right-size">
          <p>Choose Size</p>
          <div className="size">
            <button>Small</button>
            <button>Medium</button>
            <button>Large</button>
            <button>X-large</button>
          </div>
        </div>
        <div className="product-display-right-addtocart">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
