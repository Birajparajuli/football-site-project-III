import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import SingleProduct from "../../components/SingleProduct";
import PageHeader from "../../components/PageHeader";
import SkeletonCategoriesPage from "../../components/skeletons/SkeletonCategoriesPage";

function Category() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    "https://football-site-backend.herokuapp.com/categories/" + id
  );
  console.log(data);
  if (loading) return <SkeletonCategoriesPage />;
  if (error) return <p>Problem Loading data !!!!</p>;
  return (
    <>
      <PageHeader header={data.name} />
      <div className="product-list">
        {data.products.map((product) => (
          <div key={product.id}>
            <SingleProduct product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
