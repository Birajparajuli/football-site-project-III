import React from "react";
import PageHeader from "../../components/PageHeader";
import ProductList from "../../components/ProductList";

const AllProduct = () => {
  return (
    <>
      <PageHeader header={"All Products"} />
      <ProductList />
    </>
  );
};

export default AllProduct;
