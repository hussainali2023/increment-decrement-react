import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">Counter</div>

      <div className="header-nav">
        <p>
          <a href="/home">Home</a>
        </p>
        <p>
          <a href="/products">Products</a>
        </p>
        <p>
          <a href="/about">About Us</a>
        </p>
        <p>
          <a href="/contact">Contact Us</a>
        </p>
      </div>
    </div>
  );
};

export default Header;
