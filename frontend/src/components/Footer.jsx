import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <small>
          © {new Date().getFullYear()} TechNova. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
