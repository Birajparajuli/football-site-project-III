import React from "react";
import truck from "../img/truck.png";
import { Link } from "react-router-dom";

import "./Style/infoBox.css";
function InfoBox() {
  return (
    <div className="info-box-container">
      <div className="info-box">
        <div className="info-left">
          <img src={truck} alt="truck" />
        </div>
        <div className="info-right">
          <h4>Free Shipping*</h4>

          <h3>
            You don’t need to get into hassle of <br /> visiting different shops
            for the best deal. <br /> You chose your product we deliver them.
          </h3>
          <p className="small-txt-info">
            * Free Shipping Inside KTM Valley Only, cost for Shipping Outside
            Valley <br /> will be informed to the concerned customer.{" "}
          </p>
          {/* <button className="btn">Browse Products</button> */}
          <Link to="/all" className="btn">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
