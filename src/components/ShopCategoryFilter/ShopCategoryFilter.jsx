import React, { useContext } from "react";
import "./ShopCategoryFilter.css";
import { LuListFilter } from "react-icons/lu";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import RangeSlider from "./RangeSlider";
import ColorInput from "./ColorInput";
import SizeInput from "./SizeInput";
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

const SUBCATEGORIES = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

const ShopCategoryFilter = () => {
  const {
    setFilterModal,
    dropfilter,
    toggleSubCategory,
    toggleColor,
    colorCat,
    sizeCat,
    toggleSize,
    priceRange,
    setPriceRange,
    pricedrop,
    setPriceDrop,
    colorDrop,
    setColorDrop,
    sizeDrop,
    setSizeDrop,
    styleDrop,
    setStyleDrop,
    toggleFilter,
  } = useContext(ShopContext);

  return (
    <div className="filter">
      <div className="filter-header">
        <h1>Filters</h1>
        <div className="filter-icon-header filter-arrow" onClick={toggleFilter}>
          {dropfilter ? <AiOutlineFullscreenExit /> : <LuListFilter />}
        </div>
        <div
          className="filter-icon-header-mobile filter-arrow"
          onClick={() => setFilterModal(false)}
        >
          <AiOutlineFullscreenExit />
        </div>
      </div>

      <hr />
      {dropfilter ? (
        <div className="filter-container">
          <div className="filter-subcategory ">
            {SUBCATEGORIES.map((sub, idx) => (
              <div className="row" key={idx}>
                <p>{sub}</p>
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    onChange={toggleSubCategory}
                    value={sub}
                    className="filter-checkbox"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            ))}
          </div>

          <hr />

          <div className="filter-price">
            <div className="filter-header-title">
              <p>Price</p>
              <div
                className="filter-arrow"
                onClick={() => setPriceDrop(!pricedrop)}
              >
                {pricedrop ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
            </div>
            {!pricedrop && (
              <div className="filter-price-select">
                <RangeSlider values={priceRange} onChange={setPriceRange} />
              </div>
            )}
          </div>

          <hr />

          <div className="filter-color">
            <div className="filter-header-title">
              <p>Color</p>
              <div
                className="filter-arrow"
                onClick={() => setColorDrop(!colorDrop)}
              >
                {colorDrop ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
            </div>
            {!colorDrop && (
              <div className="filter-color-select">
                {COLOR.map((item, i) => {
                  return (
                    <ColorInput
                      key={i}
                      item={item}
                      colorCat={colorCat}
                      toggleColor={toggleColor}
                    />
                  );
                })}
              </div>
            )}
          </div>

          <hr />

          <div className="filter-size">
            <div className="filter-header-title">
              <p>Size</p>
              <div
                className="filter-arrow"
                onClick={() => setSizeDrop(!sizeDrop)}
              >
                {sizeDrop ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
            </div>
            {!sizeDrop && (
              <div className="filter-size-select">
                {SIZE.map((item, i) => {
                  return (
                    <SizeInput
                      key={i}
                      size={item}
                      toggleSize={toggleSize}
                      sizeCat={sizeCat}
                    />
                  );
                })}
              </div>
            )}
          </div>

          <hr />

          <div className="filter-dress-style">
            <div className="filter-header-title">
              <p>Dress Style</p>
              <div
                className="filter-arrow"
                onClick={() => setStyleDrop(!styleDrop)}
              >
                {styleDrop ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
              </div>
            </div>
            {styleDrop ? (
              <div className="filter-dress-style-row">
                <div className="row">
                  <p>Causal</p>
                  <MdKeyboardArrowRight className="filter-arrow" />
                </div>
                <div className="row">
                  <p>Formal</p>
                  <MdKeyboardArrowRight className="filter-arrow" />
                </div>
                <div className="row">
                  <p>Party</p>
                  <MdKeyboardArrowRight className="filter-arrow" />
                </div>
                <div className="row">
                  <p>Gym</p>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>

          <button
            onClick={() => {
              toggleFilter();
              if (window.innerWidth < 1000) setFilterModal(false);
            }}
            className="filter-button"
          >
            Apply Filter
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ShopCategoryFilter;
