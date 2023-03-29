import React from "react";
import "./cart.css";
const Cart = ({ cart }) => {
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  cart.forEach((product) => {
    product.quantity = product.quantity || 1;
    price += product.price * product.quantity;
    shipping += product.shipping * product.quantity;
    quantity += product.quantity;
  });
  console.log(cart);
  let tax = Number((price * (7 / 100)).toFixed(2));
  let grandTotal = (price + shipping + tax).toFixed(2);
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${price}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax :${tax}</p>
      <h4>Grand Total: ${grandTotal} </h4>
    </div>
  );
};

export default Cart;
