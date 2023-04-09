import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Login = () => {
  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="login-form" action="/login" method="post">
            <input type="text" placeholder="email id" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button type="submit">Login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
