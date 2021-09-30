import React from "react";

import "./Style/pageHeader.css";

const PageHeader = ({ header }) => {
  return (
    <div className="header-container">
      <div className="header-text">
        <h2>{header}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
