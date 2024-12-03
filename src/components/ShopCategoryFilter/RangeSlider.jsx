import React, { useState } from "react";
import "./RangeSlider.css";
import Slider from "react-slider";

const MIN = 0;
const MAX = 500;

const RangeSlider = () => {
  const [values, setValues] = useState([MIN, MAX]);
  return (
    <div className="range-slider">
      <div className={"value"}>
        <span>${values[0]} </span>
        <span> ${values[1]}</span>
      </div>

      <Slider
        className={"slider"}
        onChange={setValues}
        value={values}
        min={MIN}
        max={MAX}
      />
    </div>
  );
};

export default RangeSlider;
