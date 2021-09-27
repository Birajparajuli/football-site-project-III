import React from "react";
import { Link } from "react-router-dom";
import "./Style/categories.css";
import ball from ".././img/categories/ball.svg";
import boot from ".././img/categories/boot.svg";
import gloves from ".././img/categories/gloves.svg";
import offer from ".././img/categories/offer.svg";
import jersey from ".././img/categories/jersey.svg";
import statue from ".././img/categories/statue.svg";

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories">
        <Link to="/" className=" category category-1">
          <img src={offer} alt="offer" />
          <p>Top Offeres</p>
        </Link>
        <Link to="/" className="category category-2">
          <img src={jersey} alt="jersey" />
          <p>Jerseys</p>
        </Link>
        <Link to="/" className="category category-3">
          <img src={ball} alt="ball" />
          <p>Balls</p>
        </Link>
        <Link to="/" className="category category-4">
          <img src={boot} alt="boot" />
          <p>Boots</p>
        </Link>
        <Link to="/" className="category category-4">
          <img src={statue} alt="boot" />
          <p>Collectibles</p>
        </Link>

        <Link to="/" className="category category-4">
          <img src={gloves} alt="gloves" />
          <p>Accessories</p>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
