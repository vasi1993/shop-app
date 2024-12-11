import React, { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../Context/ShopContext";
import { HiOutlineTrash } from "react-icons/hi2";
const Cart = () => {
  const { cartItems, all_product, addToCart, removeFromCart } =
    useContext(ShopContext);
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
                <div className="cart-items-card">
                  <div className="cart-items-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-items-desc">
                    <h1>{item.name}</h1>
                    <p className="size">Size:</p>
                    <p className="color">Color:</p>
                    <p className="price">${item.new_price}</p>
                  </div>
                  <div className="cart-items-button">
                    <div className="remove">
                      <p onClick={() => removeFromCart(item.id)}>
                        <HiOutlineTrash />
                      </p>
                    </div>
                    <div className="add">+</div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="cart-order">
          <h1>Order Summary</h1>
          <p className="subtotal">Subtotal</p>
          <p className="delivery">Delivery</p>
          <hr />
          <p className="total">Total</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
