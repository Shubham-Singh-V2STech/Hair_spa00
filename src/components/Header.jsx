import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../public/logo01.png"; // Ensure correct image path

const Header = () => {
  return (
    <header className="main-header">
      <nav className="header-nav">
        <div className="nav-left">
          <ul className="nav-list">
            <li><Link to="/hair">Hair</Link></li>
            <li><Link to="/spa">Spa</Link></li>
            <li><Link to="/nail">Nail</Link></li>
            <li><Link to="/korean-hair-spa">Korean Hair Spa</Link></li>
            <li><Link to="/skin">Skin</Link></li>
          </ul>
        </div>

        <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Florian Hurel" className="logo-img" />
        </Link>
      </div>
      {/* …other nav items… */}
    </nav>

        <div className="nav-right">
          <ul className="nav-list">
            <li><Link to="/meet-florian">Meet Florian Hurel</Link></li>
            <li><Link to="/locations">Locations</Link></li>
            <li><Link to="/gift-card" className="gift-card">Gift Card</Link></li>
            <li><Link to="/franchise">Franchise</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
