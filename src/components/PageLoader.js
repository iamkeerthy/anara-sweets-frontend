import React from "react";
import "../styles/loader.css";
import logo from "../assets/images/logo.png";

const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader-content">

        <img
          src={logo}
          alt="Brand Logo"
          className="loader-logo"
        />

        <div className="loader-line"></div>

      </div>
    </div>
  );
};

export default PageLoader;