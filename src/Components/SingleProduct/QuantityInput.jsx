import React from "react";
import "./QuantityInput.css";

const QuantityInput = ({ quantity, setQuantity, stock }) => {
  return (
    <>
        <button
            className='quantity-input-button'
            disabled={quantity <= 1}
            onClick={() => setQuantity(quantity - 1)}>
            {" "}
            -{" "}
        </button>
        <p className='quantity-input-count'>{quantity}</p>
        <button
            className='quantity-input-button'
            disabled={quantity >= stock}
            onClick={() => setQuantity(quantity + 1)}>
            {" "}
            +{" "}
        </button>
    </>
);
};
export default QuantityInput;
