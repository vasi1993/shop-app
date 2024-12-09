import React, { useContext, useEffect, useState } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../Context/ShopContext";
import Card from "../../components/Card/Card";
import ShopCategoryFilter from "../../components/ShopCategoryFilter/ShopCategoryFilter";
import { IoIosArrowDropdown } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [dropfilter, setDropfilter] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const showFilterModal = () => {
    setFilterModal(true);
    setDropfilter(true);
  };

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
      {/* <Bredcrum product={product} /> */}
      <div className="shop-category">
        <div className="shop-category-left">
          {filterModal && (
            <ShopCategoryFilter
              setFilterModal={setFilterModal}
              setDropfilter={setDropfilter}
              dropfilter={dropfilter}
            />
          )}
        </div>
        <div className="shop-category-right">
          <div className="shop-category-header">
            <h1>
              {props.category.charAt(0).toUpperCase() +
                props.category.slice(1).toLowerCase()}
            </h1>
            <div className="shop-category-header-sort">
              <p>Showing 1-12 of 100 Products</p>
              <div className="sort-by">
                Sort by:{" "}
                <span>
                  Most Popular <IoIosArrowDropdown className="sort-by-icon" />
                </span>
                <span className="filter-modal">
                  <LuListFilter onClick={showFilterModal} />
                </span>
              </div>
            </div>
          </div>
          <div className="shop-category-products">
            {all_product.map((item, idx) => {
              if (props.category === item.category) {
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
