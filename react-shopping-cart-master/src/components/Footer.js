import React, { Component } from "react";

const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
        Developed by <span> : </span>
        <a href="https://www.linkedin.com/in/jatin-bhambhani/" target="_blank">
          Jatin Bhambhani
        </a>
      </p>
      <p>
        &copy; 2019 <strong>Flowers</strong> - Flowers Store
      </p>
    </footer>
  );
};

export default Footer;
