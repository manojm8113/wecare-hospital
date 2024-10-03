import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1150) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="navbars">
      <div className="top-nav">
        <div className="top-nav__email">wecaresupport@gmail.com   +91 9852467902</div>
        <div className="top-nav__social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <header className="headers">
        <nav className="nav container">
          <NavLink to="/" className="nav__logo">
            We Care
          </NavLink>

          <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about" className="nav__link" onClick={closeMenuOnMobile}>
                  About Us
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/appointment" className="nav__link" onClick={closeMenuOnMobile}>
                  Appointment
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/contact" className="nav__link" onClick={closeMenuOnMobile}>
                  Contact Us
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/profile" className="nav__link nav__cta" onClick={closeMenuOnMobile}>
                  Profile
                </NavLink>
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
