// src/components/FixedButtons.jsx
import React from "react";
import './fixedButtons.css'; // if your actual file name has a capital F
import "@fortawesome/fontawesome-free/css/all.min.css";  // if not already global

const FixedButtons = () => (
  <div className="fixedButton">
    <div className="pill">
      <a href="tel:+919167777777" aria-label="Call">
        <i className="fa fa-phone" />
      </a>

      <a
        href="https://wa.link/ublfsj"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <i class="fa-brands fa-whatsapp"></i>

      </a>
    </div>
  </div>
);

export default FixedButtons;
