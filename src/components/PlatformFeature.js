import React from "react";

import {
  FiTruck,
  FiShield,
  FiCreditCard,
  FiCornerDownLeft,
} from "react-icons/fi";

import "./Style/platformFeature.css";

const PlatformFeature = () => {
  return (
    <div className="feature-card">
      <div className="features">
        <div className="feature feature-1">
          <FiTruck className="feature-icon" />
          <p>
            FootballHub
            <br />
            Delivered
          </p>
        </div>
        <div className="feature feature-1">
          <FiShield className="feature-icon" />
          <p>
            1 Year
            <br />
            Warranty
          </p>
        </div>
        <div className="feature feature-1">
          <FiCreditCard className="feature-icon" />
          <p>
            Pay on
            <br />
            Delivery
          </p>
        </div>
        <div className="feature feature-1">
          <FiCornerDownLeft className="feature-icon" />
          <p>
            7 Days
            <br />
            Replacement
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlatformFeature;
