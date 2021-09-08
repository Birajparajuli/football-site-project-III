import React, { Component } from "react";
import { ShoppingCart, User, Heart } from "react-feather";
import { Link } from "react-router-dom";
import "../css/components.css";

export default class Navbar extends Component {
  render() {
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
              <ShoppingCart />
              <span>2</span>
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
            <li>
              <a href="https://#">Category 1</a>
            </li>
            <li>
              <a href="https://#">Category 2</a>
            </li>
            <li>
              <a href="https://#">Category 3</a>
            </li>
            <li>
              <a href="https://#">Category 4</a>
            </li>
            <li>
              <a href="https://#">Category 5</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
