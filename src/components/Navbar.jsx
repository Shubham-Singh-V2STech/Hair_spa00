import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo01.png"; // adjust if needed

// Menu labels
const left = ["Hair", "Spa", "Nail", "Korean Hair Spa", "Skin"];
const right = ["Meet Florian Hurel", "Locations", "Gift Card", "Franchise", "Contact Us"];

// Generate slugs like /gift-card
const slug = (t) => `/${t.toLowerCase().replace(/\s+/g, "-")}`;

// List renderer with shimmer and line break for Gift Card, Meet Florian Hurel, and Contact Us
const Items = ({ list, onClick }) =>
  list.map((txt) => {
    const isGiftCard = txt === "Gift Card";
    const isMeetFlorian = txt === "Meet Florian Hurel";
    const isContactUs = txt === "Contact Us";
    return (
      <li key={txt} className="nav-item">
        <NavLink
          to={slug(txt)}
          onClick={onClick}
          className={({ isActive }) =>
            `nav-link ${isGiftCard ? "shimmer" : ""} ${isActive ? "active" : ""}`
          }
        >
          {isGiftCard ? (
            <>
              Gift<br />
              Card
            </>
          ) : isMeetFlorian ? (
            <>
              Meet Florian<br />
              Hurel
            </>
          ) : isContactUs ? (
            <>
              Contact<br />
              Us
            </>
          ) : (
            txt
          )}
        </NavLink>
      </li>
    );
  });

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const close = () => setOpen(false);

  return (
    <header className="navbar navbar-dark bg-black fixed-top py-2">
      <div className="container">
        {/* Left links (desktop) */}
        <ul className="navbar-nav flex-row d-none d-md-flex nav-side">
          <Items list={left} />
        </ul>

        {/* Logo */}
        <Link to="/" className="logo-wrap" onClick={close}>
          <img src={logo} alt="Florian Hurel" className="logo-img" />
        </Link>

        {/* Right links (desktop) */}
        <ul className="navbar-nav flex-row d-none d-md-flex nav-side justify-content-end">
          <Items list={right} />
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMenu"
          aria-controls="offcanvasMenu"
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>

      {/* Mobile off-canvas menu */}
      <div
        id="offcanvasMenu"
        className={`offcanvas offcanvas-end bg-black text-white ${open ? "show" : ""}`}
        tabIndex="-1"
      >
        <div className="offcanvas-header">
          <h5 className="mb-0">Menu</h5>
          <button className="btn-close btn-close-white" onClick={close} />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <Items list={[...left, ...right]} onClick={close} />
          </ul>
        </div>
      </div>
    </header>
  );
}
