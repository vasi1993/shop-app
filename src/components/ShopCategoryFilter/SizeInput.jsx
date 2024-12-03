import React, { useState } from "react";
import "./SizeInput.css";
const SizeInput = ({ size }) => {
  const [sizeActive, setSizeActive] = useState(false);
  const handleClick = () => {
    setSizeActive(!sizeActive);
  };
  return (
    <div className="size-input" onClick={handleClick}>
      <button
        className={sizeActive ? "size-input-activebutton" : "size-input-button"}
      >
        {size}
      </button>
    </div>
  );
};

export default SizeInput;
