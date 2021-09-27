import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import "./Style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <Link to="/" className="logo-text footer-logo">
          FootballHub
        </Link>
        <div className="social-icons">
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
          <a href="https://facebook.com">
            <FaInstagram />
          </a>
          <a href="https://facebook.com">
            <FaTwitter />
          </a>
          <a href="https://facebook.com">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
