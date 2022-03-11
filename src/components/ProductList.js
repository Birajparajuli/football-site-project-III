import React from "react";

import SingleProduct from "./SingleProduct";
import "./Style/productList.css";
import useFetch from "../hooks/useFetch";
import SkeletonProduct from "./skeletons/SkeletonProduct";

function ProductList({ param }) {
  const { loading, error, data } = useFetch(
    `https://football-site-backend.herokuapp.com/products${param}`
  );

  if (loading) return <SkeletonProduct />;
  if (error) return <p>Problem Loading data !!!!</p>;
  console.log(data);

  return (
    <div className="product-list-container">
      <div className="product-list">
        {data.map((product) => (
          <div key={product.id}>
            <SingleProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
