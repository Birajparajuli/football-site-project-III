import React from "react";
import { Heart, Share2 } from "react-feather";
import { Link } from "react-router-dom";

import "./Style/singleProduct.css";

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
            {product.categories.map((category) => (
              <span key={category.map} className="category-card cat-secondary">
                {category.name}
              </span>
            ))}
          </div>
          <Link className="link" exact to={`/details/${product.id}`}>
            <h5>{product.name}</h5>
            <h4>Rs.{product.price}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
