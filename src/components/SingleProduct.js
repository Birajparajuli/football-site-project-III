import React from "react";
import { Heart, Share2 } from "react-feather";
import "../css/components.css";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <div className="product-single">
      <div className="product-image">
        <img
          src={
            "https://football-site-backend.herokuapp.com" + product.image.url
          }
          alt={product.name}
        />
        <div className="fav-heart">
          <Heart className="round-icon" />
        </div>

        <div className="link-share">
          <Share2 className="round-icon" />
        </div>
      </div>
      <div className="product-info">
        <div className="info">
          <h5>{product.name}</h5>
          <h4>Rs.{product.price}</h4>
        </div>
        <span className="vertical-rod"></span>

        <div className="add-cart">
          <Link to={`/details/${product.id}`}>ADD TO CART</Link>
          {/* <ShoppingCart /> */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
