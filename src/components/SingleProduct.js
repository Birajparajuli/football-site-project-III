import React from "react";
import { Heart, Share2 } from "react-feather";
import "../css/components.css";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <div className="product-single">
      <div className="product-image">
        <Link className="link" to={`/details/${product.id}`}>
          <img src={product.image.url} alt={product.name} />
        </Link>
        <div className="fav-heart">
          <Heart className="round-icon" />
        </div>

        <div className="link-share">
          <Share2 className="round-icon" />
        </div>
      </div>
      <div className="product-info">
        <div className="info">
          <div className="cat-cards">
            <span className="category-card cat-primary">Men</span>
            <span className="category-card cat-secondary">New</span>
          </div>
          <Link className="link" to={`/details/${product.id}`}>
            <h5>{product.name}</h5>
            <h4>Rs.{product.price}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
