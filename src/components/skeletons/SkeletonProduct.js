import React from "react";
import SkeletonElements from "./SkeletonElements";
import Shimmer from "./Shimmer";

import "./skeleton.css";
const SkeletonProduct = () => {
  return (
    <div className="skeleton-product">
      <div className="skeleton-product-list">
        <SkeletonElements type="product" />
        <SkeletonElements type="product" />
        <SkeletonElements type="product" />
        <SkeletonElements type="product" />
        <SkeletonElements type="product" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProduct;
