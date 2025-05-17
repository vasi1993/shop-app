import React from "react";
import "./ColorInput.css";

const ColorInput = ({ item, toggleColor, colorCat }) => {
  return (
    <label className="color-input">
      <input
        type="checkbox"
        value={item}
        onChange={toggleColor}
        checked={colorCat.includes(item)}
        className="checkbox-round"
        style={{ backgroundColor: item }}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default ColorInput;
