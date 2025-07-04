import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="hero-wrapper">
      <img
        src="/hello-world-app/test-2.jpg"
        alt="Landing page model image"
        className="model-img"
      />
      <div className="appointment-btn">
  <a href="/hello-world-app/contact-us" className="ba-btn" >
    Book an Appointment
  </a>
</div>


    </section>
  );
}
