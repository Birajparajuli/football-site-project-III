import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./productinfo.css";

function ProductInfo() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    "https://football-site-backend.herokuapp.com/products/" + id
  );

  if (loading) return <p>Loading data from Server</p>;
  if (error) return <p>Problem Loading data !!!!</p>;
  return (
    <>
      <h1>Details Page-{id}</h1>

      <div className="info-container">
        <div className="left-container">
          <img src={data.image.url} alt={data.name} />
        </div>

        <div className="right-container">
          <h2 className="product-title">{data.name}</h2>
          <p className="product-description">{data.description}</p>
          <h3 className="product-price">Rs.{data.price}</h3>
          <div className="product-amount">
            <button className="btn amount-btn">-</button>
            <p className="amount-counter">3</p>
            <button className="btn amount-btn">+</button>
          </div>
          <button className="btn">ADD TO CART</button>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
