import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import CartContext from "../../context/cart/CartContext";

import "./productinfo.css";
import PlatformFeature from "../../components/PlatformFeature";
import {
  FiPlusCircle,
  FiMinusCircle,
  FiShoppingCart,
  FiZap,
  FiStar,
} from "react-icons/fi";

function ProductInfo() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const { loading, error, data } = useFetch(
    "https://football-site-backend.herokuapp.com/products/" + id
  );

  if (loading) return <p>Loading data from Server</p>;
  if (error) return <p>Problem Loading data !!!!</p>;

  return (
    <>
      <div className="info-container">
        <div className="left-container">
          <img src={data.image.url} alt={data.name} />
        </div>

        <div className="right-container">
          <h2 className="product-title">{data.name}</h2>
          <div className="star-ratings-reviews">
            <div className="star">
              <FiStar className="star-icon active-star" />
              <FiStar className="star-icon active-star" />
              <FiStar className="star-icon active-star" />
              <FiStar className="star-icon active-star" />
              <FiStar className="star-icon " />
            </div>
            <p>4,554 Rating 207 Reviews</p>
          </div>
          <p className="product-description">{data.description}</p>
          <h3 className="product-price">Rs.{data.price}</h3>
          <div className="product-size"></div>
          <div className="product-amount">
            <FiMinusCircle className=" icon-minus" />
            <p className="amount-counter">1</p>
            <FiPlusCircle className=" icon-plus" />
          </div>
          <PlatformFeature />
          <div className="cart-buttons">
            <button className="btn add-btn" onClick={() => addToCart(data)}>
              <div className="icon-btn">
                <FiShoppingCart className="add-cart-icon" />
                <h3> ADD TO CART</h3>
              </div>
            </button>
            <button className="btn buy-btn">
              <div className="icon-btn">
                <FiZap className="add-cart-icon" />
                <h3> BUY NOW</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
