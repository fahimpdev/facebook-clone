import React from "react";
import "../Login/login.css";
import loginLogo from "../../Image/Facebook-logo (1).png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login_wrapper">
      <div className="login">
        <img src={loginLogo} alt="Facebook Logo" />
        <h2>Sign in with Facebook</h2>
        <Link to="/">Login With Facebook</Link>
      </div>
    </div>
  );
}

export default Login;
