import React, { useState } from "react";
import "./ColorInput.css";
const ColorInput = ({ backgroundColor }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="color-input">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="checkbox-round"
        style={{ backgroundColor: backgroundColor }}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default ColorInput;
