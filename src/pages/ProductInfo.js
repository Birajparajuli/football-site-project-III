import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

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
          <img
            src={"https://football-site-backend.herokuapp.com" + data.image.url}
            alt={data.name}
          />
        </div>

        <div className="right-container">
          <h2>{data.name}</h2>
          <h3>{data.price}</h3>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
