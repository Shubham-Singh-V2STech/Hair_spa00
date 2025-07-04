// src/pages/MeetFlorianHurel.jsx
import React from "react";
import florian from "../assets/florian-hurel.png";
import hairSpa from "../assets/hair-spa-img2.jpg";     // ← your salon‐exterior shot
import "./MeetFlorianHurel.css";

export default function MeetFlorianHurel() {
  return (
    <>
      {/* ─── Meet Florian ─── */}
      <section className="florian border-frame">
        <div className="florian__copy">
          <h1>Meet Florian Hurel</h1>
          <h3>Master Stylist&nbsp;and Visionary Entrepreneur.</h3>
          <p>
            With 20-plus years in the beauty industry, Florian Hurel is a renowned
            figure in hair styling and beauty…
          </p>
          {/* …other paragraphs… */}
          <h2>Florian Hurel as a Mentor</h2>
          <p>
            Beyond salon work, Florian is passionate about education and
            mentorship…
          </p>
          <p>
            Seeking a glamorous makeover or a rejuvenating escape? …
          </p>
        </div>
        <div className="florian__img-wrap">
          <img src={florian} alt="Florian Hurel" className="florian__img" />
        </div>
      </section>

      {/* ─── Salon Exterior “About” Strip ─── */}
      <section className="about-florian">
        <div className="about-florian__img-wrap">
          <img
            src={hairSpa}
            alt="Florian Hurel Salon & Spa exterior"
            className="about-florian__img"
          />
        </div>

        <div className="about-florian__copy">
          <h2>Florian Hurel Hair Couture & Spa</h2>
          <p>
            As the founder and creative director of Florian Hurel Salon & Spa,
            Florian has cultivated a sanctuary of beauty and wellness where clients
            can indulge in a transformative experience. …
          </p>
          <p>
            At Florian Hurel Salon & Spa, we believe in the power of beauty to uplift,
            inspire, and empower. With a team of skilled professionals handpicked…
          </p>
          <p>
            Florian’s work has graced the pages of leading fashion magazines,
            adorned the red carpets of prestigious events, and garnered acclaim…
          </p>
        </div>
      </section>
    </>
  );
}
