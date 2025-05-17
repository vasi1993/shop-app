import React, { useContext, useEffect } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../Context/ShopContext";
import Card from "../../components/Card/Card";
import ShopCategoryFilter from "../../components/ShopCategoryFilter/ShopCategoryFilter";

import { LuListFilter } from "react-icons/lu";

const ShopCategory = (props) => {
  const {
    filterProducts,
    setSortType,
    showFilterModal,
    filterModal,
    setFilterModal,
  } = useContext(ShopContext);

  const categoryTitle = props.category
    ? props.category.charAt(0).toUpperCase() +
      props.category.slice(1).toLowerCase()
    : "Shop ";

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.matchMedia("(max-width: 1050px)").matches) {
        setFilterModal(false);
      } else {
        setFilterModal(true);
      }
    };
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="shop-category-container">
      <div className="shop-category">
        <div className="shop-category-left">
          {filterModal && <ShopCategoryFilter />}
        </div>
        <div className="shop-category-right">
          <div className="shop-category-header">
            <h1>{categoryTitle}</h1>

            {/* product sort */}
            <div className="shop-category-header-sort">
              <p>{filterProducts.length} Products</p>
              <div className="sort-by">
                <span>Sort by:</span>{" "}
                <select
                  onChange={(e) => setSortType(e.target.value)}
                  className="sort-by-select"
                >
                  <option value="popular"> Most Popular</option>
                  <option value="low-hight"> Low to Hight</option>
                  <option value="hight-low"> Hight to Low</option>
                </select>
              </div>

              <div className="filter-modal">
                <LuListFilter onClick={showFilterModal} />
              </div>
            </div>
          </div>
          <div className="shop-category-products">
            {filterProducts.map((item, idx) => {
              if (!props.category || props.category === item.category) {
                return (
                  <Card
                    key={idx}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
