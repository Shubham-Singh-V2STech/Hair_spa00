// src/pages/ScalpTreatmentPage.jsx
import React from "react";
import { FaDownload } from "react-icons/fa";

// ─── Assets ────────────────────────────────────────────────────────────────
import heroImg   from "../assets/DSC03612.jpeg";
import backImg   from "../assets/koreanscalpback.jpg";
import scalpVideo from "../assets/scalp-video.mp4";

// ───────────────────────────────────────────────────────────────────────────

const ScalpTreatmentPage = () => {
  return (
    <>
      {/* ─────────────  HERO (Top Banner)  ───────────── */}
      <section
        style={{
          background: `url(${heroImg}) center/cover no-repeat`,
          height: "90vh",
          display: "flex",
          alignItems: "center",
          padding: "0 2rem",
          color: "#fff",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0)",
            padding: "2rem 2.5rem",
            borderRadius: 8,
            maxWidth: 420,
          }}
        >
          <h2 style={{ margin: 0, fontSize: "2.1rem" }}>Scalp Treatment</h2>
          <p style={{ margin: 0 }}>
            Indulge in the purity, enjoy a new confidence!
          </p>
        </div>
      </section>

      {/* ─────────────  WHY CHOOSE (Info + Video)  ───────────── */}
      <section
        style={{
          background: "#000",
          color: "#fff",
          border: "1px solid #222",
          padding: "3rem 2rem",
          margin: "3rem auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
          maxWidth: 1200,
        }}
      >
        {/* Text */}
        <div style={{ flex: "1 1 55%", minWidth: 300 }}>
          <h3 style={{ marginTop: 0 }}>Why Choose Our Korean Hair Spa?</h3>
          <ul style={{ listStyle: "disc", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
            <li>
              <strong>Deep Nourishment &amp; Repair</strong>
              <br />Intensive hydration for stressed strands.
            </li>
            <li>
              <strong>Healthy Scalp, Healthy Hair</strong>
              <br />Rituals that boost circulation and shine.
            </li>
            <li>
              <strong>Natural Ingredients</strong>
              <br />Ginseng, green-tea &amp; camellia-oil formulas.
            </li>
            <li>
              <strong>Customized Care</strong>
              <br />Tailored to dryness, frizz, thinning or volume loss.
            </li>
          </ul>

          {/* CTAs */}
           <div className="download_hair_pdf mt-4">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <a href="FHHCS-Service-Menu.pdf" target="_blank" style={{ color: "#fff" }}>
                      <i className="feather icon-feather-download"></i>&nbsp; Download Catalogue
                    </a>
                  </li>
                </ul>
              </div>

              <a href="#contactUs" className="ba-btn mt-4 btn btn-light">Book an Appointment</a>
        </div>

        {/* Video */}
        <div style={{ flex: "1 1 35%", minWidth: 280 }}>
          <video
            src={scalpVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", borderRadius: 8 }}
          />
        </div>
      </section>

      {/* ─────────────  FULL-BLEED IMAGE + “WHAT WE OFFER”  ───────────── */}
      <section
        style={{
          background: `url(${backImg}) center/cover no-repeat`,
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0)",
            color: "#fff",
            padding: "2rem 3rem",
            maxWidth: 680,
            margin: "0 2rem 3rem",
          }}
        >
          <h3 style={{ marginTop: 0 }}>What We Offer</h3>
          <ul style={{ listStyle: "disc", paddingLeft: 18, lineHeight: 1.8 }}>
            <li>Herbal steam detox for deep pore cleansing</li>
            <li>Ginseng &amp; green-tea revitalising mask</li>
            <li>Aromatherapy massage during rinse</li>
            <li>Cuticle-sealing tonic for mirror finish</li>
          </ul>
        </div>
      </section>

      {/* ─────────────  PRICE TABLE  ───────────── */}
      <section style={{ maxWidth: 1200, margin: "3rem auto", color: "#fff" }}>
        <div style={{ background: "#000", border: "1px solid #222", padding: "2rem" }}>
          <h3 style={{ marginTop: 0 }}>Scalp Treatment</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td>Hair Spa</td>
                <td style={{ textAlign: "right" }}>₹ 3,500</td>
              </tr>
              <tr>
                <td>Deep Nourish Therapy</td>
                <td style={{ textAlign: "right" }}>₹ 3,500</td>
              </tr>
              <tr>
                <td>Lux Facial for Scalp</td>
                <td style={{ textAlign: "right" }}>₹ 3,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────  CONSULTATION / HOURS  ───────────── */}
      <section
        style={{
          maxWidth: 1200,
          margin: "3rem auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "4rem",
          color: "#fff",
        }}
      >
        <div style={{ flex: "1 1 45%", minWidth: 260 }}>
          <h4>Specialized Consultations</h4>
          <p>
            Our stylists analyse lifestyle &amp; scalp health to curate the
            perfect ritual for you.
          </p>
        </div>
        <div style={{ flex: "1 1 45%", minWidth: 260 }}>
          <h4>Rejuvenation Hours</h4>
          <p>Mon – Sun : 10 AM – 8 PM</p>
        </div>
      </section>

      {/* ─────────────  APPOINTMENT FORM  ───────────── */}
      <section style={{ maxWidth: 620, margin: "0 auto 4rem", color: "#fff" }}>
        <h3>Appointment Request</h3>
        <form>
          <Input placeholder="Name" />
          <Input placeholder="Telephone" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Date" type="date" />
          <Textarea placeholder="Message" rows={4} />
          <button
            type="submit"
            style={{
              padding: "0.75rem 1.6rem",
              border: "1px solid #fff",
              background: "transparent",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </section>

      {/* ─────────────  FOOTER  ───────────── */}
      <footer
        style={{
          fontSize: "0.75rem",
          color: "#666",
          textAlign: "center",
          padding: "1rem 0 2rem",
        }}
      >
        We are a premium hair couture &amp; spa chain. © 2025 All rights
        reserved.
      </footer>
    </>
  );
};

/* ── Small reusable primitives ─────────────────────────── */
const inputStyle = {
  width: "100%",
  padding: "0.65rem",
  marginBottom: "1rem",
  background: "transparent",
  border: "1px solid #666",
  color: "#fff",
};

const Input = (props) => <input {...props} style={inputStyle} />;
const Textarea = (props) => <textarea {...props} style={{ ...inputStyle, resize: "vertical" }} />;

export default ScalpTreatmentPage;
