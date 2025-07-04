import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          This site is protected by reCAPTCHA and the{" "}
          <strong>Florian Hurel Hair Couture & Spa</strong>{" "}
          <a href="/privacypolicy.html">Privacy Policy</a> and{" "}
          <a href="/termsandcondition.html">Terms of Service</a> apply.
        </p>
        <p className="footer-text">
          © 2025 <strong>FLORIAN HUREL SALONS PRIVATE LIMITED</strong>. All rights reserved.
        </p>
        <p className="footer-text">
          <strong>florianhurelhaircouture</strong> is a trading name of{" "}
          <strong>FLORIAN HUREL SALONS PRIVATE LIMITED</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
// Footer.jsx
// import React from 'react';