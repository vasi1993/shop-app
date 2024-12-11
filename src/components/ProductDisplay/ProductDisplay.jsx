import React, { useContext } from "react";
import "./ProductDisplay.css";
import { FaStar } from "react-icons/fa6";
import ColorInput from "../ShopCategoryFilter/ColorInput";
import SizeInput from "../ShopCategoryFilter/SizeInput";
import { ShopContext } from "../../Context/ShopContext";

const COLOR = [
  "green",
  "red",
  "yellow",
  "orange",
  "pink",
  "blue",
  "purple",
  "gray",
  "white",
  "black",
];

const SIZE = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3x-Large",
];

const ProductDisplay = (props) => {
  const { product } = props;

  const { cartItems, addToCart } = useContext(ShopContext);

  const calculateDiscount = () => {
    const discount =
      ((product.old_price - product.new_price) / product.old_price) * 100;
    return discount.toFixed(2); // Round to 2 decimal places
  };

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
          <div className="produc-display-right-price-new">
            ${product.new_price}
          </div>
          <div className="produc-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="produc-display-right-price-discount">
            -{calculateDiscount()}%
          </div>
        </div>
        <div className="product-display-right-description">
          {" "}
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <hr className="product-hr" />
        <div className="product-display-right-colors">
          <p>Select Colors</p>
          <div className="colors">
            {COLOR.map((item) => {
              return <ColorInput backgroundColor={item} />;
            })}
          </div>
        </div>
        <hr className="product-hr" />
        <div className="produc-display-right-size">
          <p>Choose Size</p>
          <div className="size">
            {SIZE.map((item) => {
              return <SizeInput size={item} />;
            })}
          </div>
        </div>
        <hr className="product-hr" />
        <div className="product-display-right-addtocart">
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
