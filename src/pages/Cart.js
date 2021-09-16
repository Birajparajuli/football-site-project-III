import React from "react";
import { CartItem } from "../components/CartItem";

import { Lock } from "react-feather";

import "./Style/cart.css";

const Cart = () => {
  return (
    <div>
      <div className="header">
        <h2>YOUR CART</h2>
      </div>
      <div className="cart-list">
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-total-pay">
        <div className="subtotal">
          <h3>Subtotal</h3>
          <h3>Rs.10,590</h3>
        </div>
        <div className="pay-now">
          <button className="btn ckeckout-btn">
            <div className="icon-btn">
              <Lock className="lock-icon" />
              <h3>Checkout</h3>
            </div>
          </button>
          <div className="payments-method"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
