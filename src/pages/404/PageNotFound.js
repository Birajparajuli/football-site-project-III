import React from "react";
import "./pageNotFound.css";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="error-page-container">
      <div className="error-page-content">
        <h1>404</h1>
        <h2>Oops, Page not Found !!</h2>
        <Link to="/">
          <button className="btn">Return to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
