import React from "react";
import truck from "../img/truck.png";

import "./Style/infoBox.css";
function InfoBox() {
  return (
    <div className="info-box-container">
      <div className="info-box">
        <div className="info-left">
          <img src={truck} alt="truck" />
        </div>
        <div className="info-right">
          <h3>Free Shipping*</h3>
          <h2>Hassle Free</h2>
          <p>
            You don’t need to get into hassle of visiting different shops for
            the best deal. <br /> You chose your product we deliver them.
          </p>
          <p>
            * Free Shipping Inside KTM Valley Only, cost for Shipping Outside
            Valley <br /> will be informed to the concerned customer.{" "}
          </p>
          <button className="btn">Browse Products</button>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
