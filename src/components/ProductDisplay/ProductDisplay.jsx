import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { FaStar } from "react-icons/fa6";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const [sizeActive, setSizeActive] = useState("");
  const [checkedColor, setCheckedColor] = useState("");

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
          <img src={product.image} alt={`Image of ${product.name}`} />
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
            {product.color.map((item, index) => {
              return (
                <label key={index} className="color-input">
                  <input
                    aria-label={`Select color ${item}`}
                    type="radio"
                    checked={item === checkedColor}
                    onChange={() => setCheckedColor(item)}
                    className={
                      item === checkedColor
                        ? "checkbox-round active"
                        : "checkbox-round "
                    }
                    style={{ backgroundColor: item }}
                  />
                  <span className="checkmark"></span>
                </label>
              );
            })}
          </div>
        </div>
        <hr className="product-hr" />
        <div className="produc-display-right-size">
          <p>Choose Size</p>
          <div className="size size-input">
            {product.sizes.map((item, index) => (
              <button
                key={index}
                className={
                  item === sizeActive
                    ? "size-input-activebutton"
                    : "size-input-button"
                }
                onClick={() => setSizeActive(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <hr className="product-hr" />
        <div className="product-display-right-addtocart">
          <button
            onClick={() => {
              if (!sizeActive || !checkedColor) {
                alert("Please select size and color");
                return;
              }
              addToCart(
                product.id,
                sizeActive,
                checkedColor,
                product.new_price
              );
            }}
            aria-label={`Add ${product.name} in size ${sizeActive} and color ${checkedColor} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
