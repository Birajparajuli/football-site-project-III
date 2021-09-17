import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "react-feather";

import "./Style/footer.css";
import esewa from "../img/payment/esewa.png";
import visa from "../img/payment/visa.png";
import ime from "../img/payment/ime.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="left-footer">
          <p>Payments Methods</p>
          <div className="payment-method">
            <img src={visa} alt="eswa" />
            <img src={esewa} alt="eswa" />
            <img src={ime} alt="eswa" />
          </div>
        </div>
        <div className="middle-footer">
          <p>Social Medias</p>
          <div className="social-media">
            <Facebook className="social-icon" />
            <Twitter className="social-icon" />
            <Instagram className="social-icon" />
            <Youtube className="social-icon" />
          </div>
        </div>
        <div className="right-footer">
          <p>Email Newsletter</p>
          <div className="newsletter">
            <input type="email" name="email" />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="link-left">
          <h3>About</h3>
          <ul>
            <li>
              <a href={0}>Contact Us</a>
            </li>
            <li>
              <a href={0}>About Us</a>
            </li>
            <li>
              <a href={0}>Careers</a>
            </li>
            <li>
              <a href={0}>Corporate Information</a>
            </li>
          </ul>
        </div>
        <div className="link-middle">
          <h3>Help</h3>
          <ul>
            <li>
              <a href={0}>Payments</a>
            </li>
            <li>
              {" "}
              <a href={0}>Shipping</a>
            </li>
            <li>
              <a href={0}>Cancellations & Returns</a>
            </li>
            <li>
              <a href={0}>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="link-right">
          <h3>Policy</h3>
          <ul>
            <li>
              <a href={0}>Return Policy</a>
            </li>
            <li>
              <a href={0}>Terms of Use</a>
            </li>
            <li>
              <a href={0}>Security</a>
            </li>
            <li>
              <a href={0}>Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Made with ❤️ by Biraj</p>
        <p>Copyright © 2021 || FootballHub</p>
      </div>
    </div>
  );
}

export default Footer;
