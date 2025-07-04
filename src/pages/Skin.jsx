// ---------- React & assets ----------
import React from "react";

import heroImg  from "../assets/skin-care-banner.jpg";

// Swiper videos
import vid1 from "../assets/hydrafacial.mp4";
import vid2 from "../assets/SKIN_THERAPY.mp4";
import vid3 from "../assets/ALL_SKIN_THERAPY.mp4";

// “What we offer” banner
import offerImg from "../assets/skin-care-banner.jpg";

// ---------- Swiper ----------
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination }  from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ---------- Local components ----------
import SkinMenu from "../components/SkinMenu";
import SkinBooking from "../components/SkinBooking";

// ---------- Styles ----------
import "./Skin.css";

export default function Skin() {
  return (
    <>
      {/* ─────────────  HERO  ───────────── */}
      <section
        className="skin-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="skin-hero__inner">
          <h2 className="skin-hero__title">Skin Care.</h2>
          <p className="skin-hero__subtitle">
            Revitalize Your Skin, Reignite Your Confidence —<br />
            <em>The Florian&nbsp;Hurel Promise</em>
          </p>
        </div>
      </section>

      {/* ─────────────  WHY CHOOSE + VIDEO  ───────────── */}
      <section className="skin-why border-frame">
        {/* left copy */}
        <div className="skin-why__copy">
          <h2>Why Choose Us for Your Skin?</h2>

          <ul className="skin-bullets">
            <li>
              <strong>Tailored Skin Treatments</strong>
              <br />Custom protocols designed after a detailed skin analysis.
            </li>
            <li>
              <strong>Premium Skincare Products</strong>
              <br />Dermatologist-approved formulas enriched with natural
              actives.
            </li>
            <li>
              <strong>Advanced Techniques</strong>
              <br />Rejuvenating facials &amp; cutting-edge devices boost
              radiance.
            </li>
            <li>
              <strong>Relaxing&nbsp;&amp;&nbsp;Luxurious Experience</strong>
              <br />A serene space where skincare meets self-care.
            </li>
          </ul>

          <a
            href="/FHHCS-Service-Menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="dl-link"
          >
            <i className="feather icon-feather-download" />
            &nbsp;Download Catalogue
          </a>

          <a href="#contactUs" className="ba-btn">
            Book an Appointment
          </a>
        </div>

        {/* right carousel */}
        <div className="skin-why__media">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
          >
            {[vid1, vid2, vid3].map((src, i) => (
              <SwiperSlide key={i}>
                <video
                  src={src}
                  className="skin-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ─────────────  WHAT WE OFFER  ───────────── */}
      <section className="skin-offer border-frame">
        <img src={offerImg} alt="Skin treatment" className="skin-offer__img" />

        <div className="skin-offer__frame">
          <h2 className="skin-offer__title">What We Offer</h2>

          <p>
            Florian Hurel’s Skin Sanctuary immerses you in luxurious pampering
            and personalised care. Our bespoke rituals unveil your natural
            elegance and leave you feeling renewed.
          </p>

          <ul className="skin-offer__bullets">
            <li>Marine-active facial to revitalise and refresh.</li>
            <li>Innovative triple-exfoliation treatment.</li>
            <li>Targeted eye-area therapy for hydration &amp; strength.</li>
            <li>
              Custom facials to hydrate, nourish, purify&nbsp;or&nbsp;soothe.
            </li>
            <li>Detoxifying peel-off mask for fine lines &amp; stress.</li>
            <li>
              Hyaluronic acid&nbsp;+&nbsp;marine pro-collagen Roller Booster
              Trio.
            </li>
            <li>
              Signature algae facial with seaweed mask &amp; Heart-of-the-Ocean
              massage.
            </li>
          </ul>

          <p>
            Experience the epitome of beauty and elegance—because you deserve
            nothing but the best.
          </p>
        </div>
      </section>

      {/* ─────────────  PRICE TABLE  ───────────── */}
      <SkinMenu />

      {/* ─────────────  QUICK TIPS  ───────────── */}
    
    </>
  );
}
