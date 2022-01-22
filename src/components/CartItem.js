import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";

import "./Style/cartItem.css";
import { Trash } from "react-feather";
//temp img import

export const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <div className="cart-item">
        <div className="item-image">
          <img src={item.image.url} alt="messi" />
        </div>
        <div className="item-details">
          <div className="top-items">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p> </p>
            </div>
            <div className="delete-icon" onClick={() => removeItem(item.id)}>
              <Trash />
            </div>
          </div>

          <div className="bottom-items">
            <div className="plus-minus">
              {/*  
              <MinusCircle />
              <p>2</p>
              <PlusCircle />
              */}
            </div>
            <div className="subtotal">
              <h3>{item.price}</h3>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
