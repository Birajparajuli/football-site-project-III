import React from "react";
import { ShoppingCart, Heart, Share2 } from "react-feather";
import "../css/components.css";
import Messi_PSG from "../img/product/Messi_PSG.jpeg";

const SingleProduct = ({ name, price }) => {
  return (
    <div className="product-single">
      <div className="product-image">
        <img src={Messi_PSG} alt="messi-img" />
        <div className="fav-heart">
          <Heart className="round-icon" />
        </div>

        <div className="link-share">
          <Share2 className="round-icon" />
        </div>
      </div>
      <div className="product-info">
        <div className="info">
          <h4>{name}</h4>
          <span>Rs.{price}</span>
        </div>
        <span className="vertical-rod"></span>
        <div className="add-cart">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
