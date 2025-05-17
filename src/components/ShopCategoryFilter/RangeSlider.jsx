import React, { useEffect, useState } from "react";
import "./RangeSlider.css";
import Slider from "react-slider";

const MIN = 0;
const MAX = 500;

const RangeSlider = ({ values, onChange }) => {
  // const [values, setValues] = useState([MIN, MAX]);

  return (
    <div className="range-slider">
      <label htmlFor="price-range-slider" className="visually-hidden">
        Select price range
      </label>
      <div className={"value"} aria-live="polite">
        <span>${values[0]} </span>
        <span> ${values[1]}</span>
      </div>

      <Slider
        id="price-range-slider"
        className={"slider"}
        onChange={onChange}
        value={values}
        min={MIN}
        max={MAX}
        ariaLabel={["Minimum price", "Maximum price"]}
        pearling
        minDistance={10}
      />
    </div>
  );
};

export default RangeSlider;
