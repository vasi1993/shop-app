import React, { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../Context/ShopContext";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";

const Cart = () => {
  const {
    cartItems,
    all_product,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);
  return (
    <div className="cart">
      <div className="cart-title">
        <h1>YOUR CART</h1>
      </div>
      <div className="cart-container">
        <div className="cart-items">
          {all_product.map((item, index) => {
            if (cartItems[item.id] > 0) {
              return (
                <div className="cart-items-card-container">
                  <div className="cart-items-card">
                    <div className="cart-items-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="cart-items-desc">
                      <p className="title-cart">
                        {item.name.split(" ").slice(0, 3).join(" ")}
                      </p>
                      <p className="size-cart">Size:</p>
                      <p className="color-cart">Color:</p>
                      <p className="price-cart">${item.new_price}</p>
                    </div>
                    <div className="cart-items-button">
                      <div
                        className="remove-cart"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <HiOutlineTrash className="remove-cart-icon" />
                      </div>
                      <div className="add-cart">
                        <div className="add-cart-remove">
                          <IoIosRemove
                            className="add-cart-remove-icon"
                            onClick={() => removeFromCart(item.id)}
                          />
                        </div>
                        <p>{cartItems[item.id]}</p>
                        <div className="add-cart-add">
                          <IoIosAdd
                            className="add-cart-add-icon"
                            onClick={() => addToCart(item.id)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {cartItems > 1 ? <></> : <hr className="cart-items-hr" />}
                </div>
              );
            }
          })}
        </div>
        <div className="cart-order">
          <h1>Order Summary</h1>
          <div className="subtotal">
            <span>Subtotal</span>
            <span>${getTotalCartAmount()}</span>{" "}
          </div>
          <div className="delivery">
            <span>Delivery</span>{" "}
            <span> ${getTotalCartAmount() === 0 ? 0 : 2}</span>
          </div>
          <hr className="cart-order-hr" />
          <div className="total">
            <span>Total</span>
            <span>
              ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
            </span>
          </div>
          <div className="cart-order-cupon">
            <div className="cuppon-ticket">
              <IoTicketOutline className="ticket" />
              <input type="text" placeholder="Add promo code" />
            </div>
            <button className="cuppon-button">Apply</button>
          </div>
          <div className="cart-order-button">
            <button>
              Go to Checkbox{" "}
              <FaLongArrowAltRight className="cart-order-button-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
