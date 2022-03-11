import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaCcPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import "./Style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="footer-left">
          <Link to="/" className="logo-text footer-logo">
            FootballHub
          </Link>
          <p>
            We are all delighted sportspeople who have <br /> turned our passion
            into our job, which is to
            <br /> "sustainably make pleasure and benefit of
            <br /> sports accessible to the many"
          </p>
          <div className="social-icons">
            <a className="fb-icon" href="https://facebook.com">
              <FaFacebook className="social-icon " />
            </a>
            <a className=" insta-icon" href="https://facebook.com">
              <FaInstagram className="social-icon" />
            </a>
            <a className="twitter-icon" href="https://facebook.com">
              <FaTwitter className="social-icon " />
            </a>
            <a className="linkedin-icon" href="https://facebook.com">
              <FaLinkedin className="social-icon " />
            </a>
          </div>
        </div>
        <div className="footer-middle-1 link-list">
          <h4>Short Brief</h4>
          <Link className="footer-link" to="/">
            Payements
          </Link>
          <Link className="footer-link" to="/">
            Shipping
          </Link>
          <Link className="footer-link" to="/">
            Cancelletion and Returns
          </Link>
        </div>
        <div className="footer-middle-2 link-list">
          <h4>Quick Link</h4>
          <Link className="footer-link" to="/">
            Home
          </Link>
          <Link className="footer-link" to="/cart">
            Cart
          </Link>
          <Link className="footer-link" to="/all">
            Categories
          </Link>
        </div>
        <div className="footer-right link-list">
          <h4>Support</h4>
          <Link className="footer-link" to="/">
            FAQ
          </Link>
          <Link className="footer-link" to="/">
            Privacy Policy
          </Link>
          <Link className="footer-link" to="/">
            Terms and Conditions
          </Link>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="copyright">
          <h4>© {new Date().getFullYear()} Biraj, Aashish and Saurav</h4>
        </div>
        <div className="payment-icons">
          <FaCcPaypal className="payment-icon" />
          <FaCcMastercard className="payment-icon" />
          <FaCcVisa className="payment-icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
