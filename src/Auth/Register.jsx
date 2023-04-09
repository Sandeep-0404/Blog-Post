import React from "react";

const Register = () => {
  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="login-form" action="/register" method="post">
            <input type="text" placeholder="name" name="name" />
            <input type="text" placeholder="email address" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button type="submit">Register</button>
            <p class="message">
              Already registered? <a href="/login">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
