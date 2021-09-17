import React from "react";

import "./Style/cartItem.css";
import { Trash, PlusCircle, MinusCircle } from "react-feather";
//temp img import
import productImage from "../img/product/Messi_PSG.jpeg";

export const CartItem = () => {
  return (
    <>
      <div className="cart-item">
        <div className="item-image">
          <img src={productImage} alt="messi" />
        </div>
        <div className="item-details">
          <div className="top-items">
            <div className="item-details">
              <h3>Messi Jersey no 30 Paris Saint German</h3>
              <p>Short info about the product </p>
            </div>
            <div className="delete-icon">
              <Trash />
            </div>
          </div>
          <div className="bottom-items">
            <div className="plus-minus">
              <MinusCircle />
              <p>2</p>
              <PlusCircle />
            </div>
            <div className="subtotal">
              <h3>Rs. 5,690</h3>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
