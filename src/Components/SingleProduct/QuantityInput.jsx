import React from "react";
import "./QuantityInput.css"
const QuantityInput = ({quantity,setQuantity,stock}) => {
  return (
    <>
      <button className="quantity-input-button" disabled={quantity<=1} onClick={setQuantity(quantity)}>
       {" "}-{" "}
      </button>
      <p className="quantity-input-count">{quantity}</p>
      <button className="quantity-input-button"disabled={quantity>=stock}  onClick={console.log("quantity increased")}>+</button>
    </>
  );
};
export default QuantityInput;
