import React from "react";
import Login from "./Login";
import Register from "./Register";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <Register />
      <Footer />
    </>
  );
};

export default Main;
