import React from "react";
import { CartItem } from "../components/CartItem";

//temp img import

const Cart = () => {
  return (
    <div>
      <div className="header">
        <h2>YOUR CART</h2>
      </div>
      <CartItem />
      <CartItem />
    </div>
  );
};

export default Cart;
