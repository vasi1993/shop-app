import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = (itemId, size, color, price) => {
    const itemKey = `${itemId}-${size}-${color}`;

    setCartItems((prev) => {
      const existingItem = prev[itemKey];
      return {
        ...prev,
        [itemKey]: existingItem
          ? { ...existingItem, quantity: existingItem.quantity + 1 }
          : {
              id: itemId,
              size,
              color,
              price,
              quantity: 1,
            },
      };
    });
  };

  const removeFromCart = (itemId, size, color) => {
    const itemKey = `${itemId}-${size}-${color}`;
    setCartItems((prev) => {
      const updatedItem = { ...prev[itemKey] };
      if (updatedItem.quantity > 1) {
        updatedItem.quantity -= 1;
        return { ...prev, [itemKey]: updatedItem };
      } else {
        const newCart = { ...prev };
        delete newCart[itemKey];
        return newCart;
      }
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      const item = cartItems[key];
      totalAmount += item.price * item.quantity;
    }
    return totalAmount;
  };
  const contextValue = {
    all_product,
    addToCart,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
