import React from "react";
import SkeletonElements from "./SkeletonElements";
import SkeletonProduct from "./SkeletonProduct";
import Shimmer from "./Shimmer";

import "./skeleton.css";

const SkeletonCategoriesPage = () => {
  return (
    <div className="skeleton-categories">
      <SkeletonElements type="header-box" />
      <SkeletonProduct />
      <Shimmer />
    </div>
  );
};

export default SkeletonCategoriesPage;
