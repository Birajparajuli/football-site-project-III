import React, { useContext } from "react";
import { CartItem } from "../../components/CartItem";
import CartContext from "../../context/cart/CartContext";
import { Lock } from "react-feather";

import "./cart.css";
import PageHeader from "../../components/PageHeader";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-container">
      <PageHeader header={"Cart"} />
      <div className="cart-wrapper">
        {cartItems.length === 0 ? (
          <h2 className="cart-empty-header">Cart is empty</h2>
        ) : (
          <div className="cart-list">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      <div className="cart-total-pay">
        <div className="subtotal">
          <h3>Subtotal</h3>
          <h3>
            Rs.{cartItems.reduce((amount, item) => item.price + amount, 0)}
          </h3>
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
