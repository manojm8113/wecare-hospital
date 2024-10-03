import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="py-3 bg-black common-footer">
      <div className="container">
        <div className="row gy-3 gy-sm-0 align-items-sm-center">
          <div className="col-sm-6">
            <div className="credit-wrapper d-block text-secondary fs-10 text-center text-sm-start">
              Built by <a href="https://www.linkedin.com/in/manoj811/" className="link-secondary text-decoration-none">
                Manoj
              </a> with <span className="text-primary">&#9829;</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 copyrigt">
        <p>© 2024 All Rights Reserved. By Manoj</p>
      </div>
    </footer>
  );
};

export default Footer;
