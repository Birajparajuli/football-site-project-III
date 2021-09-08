import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import useFetch from "../hooks/useFetch";
import SingleProduct from "../components/SingleProduct";

function Category() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    "https://football-site-backend.herokuapp.com/categories/" + id
  );
  console.log(data);
  if (loading) return <p>Loading data from Server</p>;
  if (error) return <p>Problem Loading data !!!!</p>;
  return (
    <>
      <h1>Category Page-{id}</h1>
      {data.products.map((product) => (
        <div key={product.id}>
          <SingleProduct product={product} />
        </div>
      ))}
    </>
  );
}

export default Category;
