import React from "react";

import "./Style/newsLetter.css";
import newsletter from "../img/newsletter.png";

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="newsletter-left">
          <img src={newsletter} alt="news-letter" />
        </div>
        <div className="newsletter-right">
          <h3>Get deals right in your inbox.</h3>
          <p>Get letest products and offers.</p>
          <div className="newsletter-input-btn">
            <input type="email" name="email" placeholder={"Enter your email"} />
            <button className="newsletter-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
