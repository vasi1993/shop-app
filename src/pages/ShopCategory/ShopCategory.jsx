import React, { useContext, useEffect, useState } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../Context/ShopContext";
import Card from "../../components/Card/Card";
import ShopCategoryFilter from "../../components/ShopCategoryFilter/ShopCategoryFilter";

import { LuListFilter } from "react-icons/lu";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [dropfilter, setDropfilter] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortType, setSortType] = useState("popular");
  const [subCategory, setSubCategory] = useState([]);
  const [colorCat, setColorCat] = useState([]);
  const [sizeCat, setSizeCat] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);

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
  }, [subCategory, colorCat, sizeCat, priceRange]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

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
          {filterModal && (
            <ShopCategoryFilter
              setFilterModal={setFilterModal}
              setDropfilter={setDropfilter}
              dropfilter={dropfilter}
              toggleSubCategory={toggleSubCategory}
              toggleColor={toggleColor}
              colorCat={colorCat}
              toggleSize={toggleSize}
              sizeCat={sizeCat}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          )}
        </div>
        <div className="shop-category-right">
          <div className="shop-category-header">
            <h1>
              {props.category.charAt(0).toUpperCase() +
                props.category.slice(1).toLowerCase()}
            </h1>
            {/* product sort */}
            <div className="shop-category-header-sort">
              <p>Showing 1-12 of 100 Products</p>
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
