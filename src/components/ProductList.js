import React from "react";
import SingleProduct from "./SingleProduct";
import "../css/components.css";
import useFetch from "../hooks/useFetch";

function ProductList() {
  const { loading, error, data } = useFetch("http://localhost:1337/products");

  if (loading) return <p>Loading data from Server</p>;
  if (error) return <p>Problem Loading data !!!!</p>;
  console.log(data);

  return (
    <div className="product-list">
      {data.map((product) => (
        <div key={product.id}>
          <SingleProduct product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
