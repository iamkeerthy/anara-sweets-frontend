import React from "react";
import "../styles/loader.css";



const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <p>🇱🇰 SriLankan Sweets Loading...</p>
    </div>
  );
};

export default PageLoader;