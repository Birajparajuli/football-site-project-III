import React from "react";
import "./Style/signIn.css";

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in-info">
        <h2>Welcome to</h2>
        <h1>FootballHub</h1>
      </div>

      <div className="form-container">
        <h3>Create an Account</h3>
        <div className="google-login">
          <button className="btn">SIGN IN WITH GOOGLE</button>
        </div>
        <div className="or-bar">
          <span className="line"></span>
          <h4>Or</h4>
          <span className="line"></span>
        </div>
        <form>
          <h3>Sign in with E-mail</h3>
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
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
