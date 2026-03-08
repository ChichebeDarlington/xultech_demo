import React from "react";
//TechNova => Xultech

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <small>
          © {new Date().getFullYear()} Xultech. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
