import React from "react";
import { ShoppingCart, User, Heart } from "react-feather";
import { Link } from "react-router-dom";
import "../css/components.css";

import useFetch from "../hooks/useFetch";

function Navbar() {
  const { loading, error, data } = useFetch(
    "https://football-site-backend.herokuapp.com/categories/"
  );

  if (loading) return <p>Loading data from Server</p>;
  if (error) return <p>Problem Loading data !!!!</p>;

  console.log(data);
  return (
    <div className="main-nav">
      <div className="top-nav">
        <div className="logo">
          <Link className="logo-text" to="/">
            FootballHub
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder={"Search products......"} />
        </div>
        <div className="icons">
          <div className="icon cart-icon">
            <Link className="" to={`cart`}>
              <ShoppingCart />
              <span>2</span>
            </Link>
          </div>
          <div className="icon">
            <Heart />
          </div>
          <div className="icon">
            <User />
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <ul className="nav-links">
          {data.map((category) => (
            <Link
              className="nav-link"
              key={category.id}
              to={`categories/${category.id}`}
            >
              {category.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
