import React, { createContext, useEffect, useState } from "react";
import all_product from "../assets/all_product";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  // State Filter

  const [dropfilter, setDropfilter] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortType, setSortType] = useState("popular");
  const [subCategory, setSubCategory] = useState([]);
  const [colorCat, setColorCat] = useState([]);
  const [sizeCat, setSizeCat] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);

  // ShopCategoryFilter state
  const [pricedrop, setPriceDrop] = useState(false);
  const [colorDrop, setColorDrop] = useState(false);
  const [sizeDrop, setSizeDrop] = useState(false);
  const [styleDrop, setStyleDrop] = useState(false);

  // Shearch state
  const [search, setSearch] = useState("");

  // ShopCategoryFilter function
  const toggleFilter = () => {
    setDropfilter((prev) => !prev);
  };

  // Filter Function
  const showFilterModal = () => {
    setFilterModal(true);
    setDropfilter(true);
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleColor = (e) => {
    if (colorCat.includes(e.target.value)) {
      setColorCat((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setColorCat((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSize = (e) => {
    const value = e.target.value;
    if (sizeCat.includes(value)) {
      setSizeCat((prev) => prev.filter((item) => item !== value));
    } else {
      setSizeCat((prev) => [...prev, value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = all_product.slice();

    // Search
    if (search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    //end search

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (colorCat.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        item.color?.some((c) => colorCat.includes(c))
      );
    }

    if (sizeCat.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        item.sizes?.some((s) => sizeCat.includes(s))
      );
    }

    if (priceRange.length === 2) {
      const [min, max] = priceRange;
      productsCopy = productsCopy.filter(
        (item) => item.new_price >= min && item.new_price <= max
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-hight":
        setFilterProducts(fpCopy.sort((a, b) => a.new_price - b.new_price));
        break;

      case "hight-low":
        setFilterProducts(fpCopy.sort((a, b) => b.new_price - a.new_price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [subCategory, colorCat, sizeCat, priceRange, search]);

  useEffect(() => {
    if (filterProducts.length) {
      sortProduct();
    }
  }, [sortType]);

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
    navigate,
    all_product,
    // cart
    addToCart,
    cartItems,
    removeFromCart,
    getTotalCartAmount,

    // filter
    dropfilter,
    setDropfilter,
    filterModal,
    setFilterModal,
    filterProducts,
    setFilterProducts,
    sortType,
    setSortType,
    subCategory,
    setSubCategory,
    colorCat,
    setColorCat,
    sizeCat,
    setSizeCat,
    priceRange,
    setPriceRange,
    showFilterModal,
    toggleSubCategory,
    toggleColor,
    toggleSize,
    applyFilter,
    sortProduct,
    // ShopCategoryFilter
    pricedrop,
    setPriceDrop,
    colorDrop,
    setColorDrop,
    sizeDrop,
    setSizeDrop,
    styleDrop,
    setStyleDrop,
    toggleFilter,
    // Search
    search,
    setSearch,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
