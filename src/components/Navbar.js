import React from "react";
import { ShoppingCart, User, Heart, Grid } from "react-feather";
import { Link } from "react-router-dom";

import "./Style/navbar.css";

function Navbar() {
  // const { loading, error, data } = useFetch(
  //   "https://football-site-backend.herokuapp.com/categories/"
  // );

  // if (loading) return <p>Loading data from Server</p>;
  // if (error) return <p>Problem Loading data !!!!</p>;

  return (
    <div className="main-nav">
      <div className="top-nav">
        <div className="logo">
          <Link className="logo-text desktop-logo" to="/">
            FootballHub
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder={"Search products......"} />
          <button className="search-button">Search</button>
        </div>
        <div className="icons">
          <div className="icon cart-icon">
            <Link className="link" to={`cart`}>
              <ShoppingCart />
              <span>2</span>
            </Link>
          </div>
          <div className="icon">
            <Heart />
          </div>
          <div className="icon">
            <Link className="link" to="signup">
              <User />
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="bottom-nav">
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
       */}
      <div className="float-nav">
        <Link className="logo-text mobile-logo" to="/">
          FH
        </Link>
        <div className="icon">
          <Grid />
        </div>
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
          <Link to="signup">
            <User />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
