import React from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
  return (
    <div className="sign-in-container">
      <form className="sign-up-form">
        <h3 className="sign-title">Create an Account</h3>
        <div className="google-login">
          <button
            className="btn google-btn"
            onClick={() =>
              window.location(
                "https://football-site-backend.herokuapp.com/connect/google",
                "Sign up to  FootballHub"
              )
            }
          >
            <div className="icon-btn">
              <FcGoogle size="1.5em" />
              <h3>CONTINUE WITH GOOGLE</h3>
            </div>
          </button>
        </div>
        <div className="or-bar">
          <span className="line"></span>
          <p>Or</p>
          <span className="line"></span>
        </div>
        <h3 className="sign-title">Sign in with E-mail</h3>
        <div className="form-items">
          <label htmlFor="name">Username</label>
          <input type="text" id="name" placeholder="Username" />
          <small>Error Message</small>
        </div>
        <div className="form-items">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Email" />
          <small>Error Message</small>
        </div>
        <div className="form-items">
          <label htmlFor="password">Password</label>
          <input type="password" id="password-1" placeholder="Password" />
          <small>Error Message</small>
        </div>
        <div className="form-items">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password-2" placeholder="Password" />
          <small>Error Message</small>
        </div>
        <button type="submit" className="btn signup-btn">
          Sign In
        </button>
        <h5>
          Already have account? <Link to="/login">Log In</Link>
        </h5>
      </form>
    </div>
  );
};

export default SignIn;
