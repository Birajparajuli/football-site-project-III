import React from "react";
import { Link } from "react-router-dom";
import "./Style/categories.css";
import ball from ".././img/categories/ball.svg";
import boot from ".././img/categories/boot.svg";
import gloves from ".././img/categories/gloves.svg";
import offer from ".././img/categories/offer.svg";
import jersey from ".././img/categories/jersey.svg";
// import statue from ".././img/categories/statue.svg";
import all from ".././img/categories/all.svg";

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories">
        <Link to="/all" className=" category category-1">
          <img src={all} alt="offer" />
          <p>All Products</p>
        </Link>
        <Link
          to="/categories/615886974d598100165656a7"
          className=" category category-1"
        >
          <img src={offer} alt="offer" />
          <p>Top Offeres</p>
        </Link>
        <Link
          to="/categories/6138e7c3c143fa3c74d5e2ea"
          className="category category-2"
        >
          <img src={jersey} alt="jersey" />
          <p>Jerseys</p>
        </Link>
        <Link
          to="/categories/6138e802c143fa3c74d5e2eb"
          className="category category-3"
        >
          <img src={ball} alt="ball" />
          <p>Balls</p>
        </Link>
        <Link
          to="/categories/6138e829c143fa3c74d5e2ec"
          className="category category-4"
        >
          <img src={boot} alt="boot" />
          <p>Boots</p>
        </Link>

        <Link
          to="/categories/615887004d598100165656a9"
          className="category category-4"
        >
          <img src={gloves} alt="gloves" />
          <p>Accessories</p>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
