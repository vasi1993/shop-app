import React, { useEffect, useState } from "react";
import "./RangeSlider.css";
import Slider from "react-slider";

const MIN = 0;
const MAX = 500;

const RangeSlider = ({ values, onChange }) => {
  // const [values, setValues] = useState([MIN, MAX]);

  return (
    <div className="range-slider">
      <div className={"value"}>
        <span>${values[0]} </span>
        <span> ${values[1]}</span>
      </div>

      <Slider
        className={"slider"}
        onChange={onChange}
        value={values}
        min={MIN}
        max={MAX}
      />
    </div>
  );
};

export default RangeSlider;
