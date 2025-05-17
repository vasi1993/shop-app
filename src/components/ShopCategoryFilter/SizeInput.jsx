import "./SizeInput.css";

const SizeInput = ({ size, toggleSize, sizeCat }) => {
  return (
    <label className="size-input" aria-label={`Select size ${size}`}>
      <input
        type="checkbox"
        value={size}
        onChange={toggleSize}
        checked={sizeCat.includes(size)}
        className="size-checkbox"
      />
      <span className="size-checkmark">{size}</span>
    </label>
  );
};

export default SizeInput;
