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
      <div className="footer-middle">
        <div className="link-group">
          <Link>MEN</Link>
          <Link>WOMEN</Link>
          <Link>BOOTS</Link>
          <Link>JERSEYS</Link>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Madhyapur Thimi 07, Gathhaghar</p>
          <p>Call Us Now: 01-322323232 Email: info@footballhub.com</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="email-form">
          <input type="email" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
