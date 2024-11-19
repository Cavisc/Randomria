import { useState, useEffect } from "react";

export default function GameQuantity({
  label,
  upperLimit,
  lowerLimit,
  value,
  onChange,
}) {
  const [quantity, setQuantity] = useState(value);

  useEffect(() => {
    setQuantity(value);
  }, [value]);

  const increaseQuantity = () => {
    if (quantity < upperLimit) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > lowerLimit) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="text-lg text-text font-bold mb-2">{label}</label>
      <div className="flex items-center font-bold justify-around w-60 h-16 border-2 border-text rounded-lg bg-base">
        <span
          className={`text-2xl cursor-pointer select-none ${
            quantity === lowerLimit
              ? "text-tertiary cursor-auto"
              : "text-text cursor-pointer"
          }`}
          onClick={decreaseQuantity}
        >
          -
        </span>
        <span className="select-none">{quantity}</span>
        <span
          className={`text-2xl select-none ${
            quantity === upperLimit
              ? "text-tertiary cursor-auto"
              : "text-text cursor-pointer"
          }`}
          onClick={increaseQuantity}
        >
          +
        </span>
      </div>
      <div className="w-full px-2 flex items-center justify-between gap-1 mt-1 text-sm text-tertiary">
        <span>min. {lowerLimit}</span>
        <span>max. {upperLimit}</span>
      </div>
    </div>
  );
}
