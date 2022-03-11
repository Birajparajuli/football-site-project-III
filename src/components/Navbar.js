import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import { ShoppingCart, User, Heart, Grid } from "react-feather";
import { Link } from "react-router-dom";

import "./Style/navbar.css";

function Navbar() {
  // const { loading, error, data } = useFetch(
  //   "https://football-site-backend.herokuapp.com/categories/"
  // );

  // if (loading) return <p>Loading data from Server</p>;
  // if (error) return <p>Problem Loading data !!!!</p>;

  const { cartItems } = useContext(CartContext);

  return (
    <div className="main-nav">
      <div className="top-nav">
        <div className="logo">
          <Link className="logo-text desktop-logo" to="/" exact>
            FootballHub
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder={"Search products......"} />
          <button className="search-button">Search</button>
        </div>
        <div className="icons">
          <div className="icon cart-icon">
            <Link className="link" to="/cart" exact>
              <ShoppingCart />
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </Link>
          </div>
          <div className="icon">
            <Heart />
          </div>
          <div className="icon">
            <Link className="link" to="/signup" exact>
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
        <Link to="/all" className="icon">
          <Grid />
        </Link>
        <div className="icon cart-icon">
          <Link className="" to={`cart`}>
            <ShoppingCart />
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
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
