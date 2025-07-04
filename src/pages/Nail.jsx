import React, { useState, useEffect } from "react";
import nail01 from "../assets/nail01.jpeg";
import nail02 from "../assets/Nail02.jpeg";
import nail03 from "../assets/Nail03.jpeg";
import nail04 from "../assets/Nail04.jpeg";
import banner from "../assets/nail-care-top-img.jpg";
import bandraNails from "../assets/bandra_nails.jpg";
import nailCareLook from "../assets/nail-on-the-left-down.jpg"; // import your image

import "./Nail.css";

const Nail = () => {
  const images = [nail01, nail02, nail03, nail04];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Hero Banner Static Image */}
      <section className="hero-banner" style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center"
      }}>
        <div className="hero-overlay" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', padding: '40px' }}>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "bold" }}>Nail Salon</h1>
          <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>
            Polished Perfection, Crafted by Florian Hurel.
          </p>
        </div>
      </section>

      <div className="container-fluid" style={{ backgroundColor: "#000", color: "#fff", padding: "60px 0" }}>
        <div className="row align-items-center flex-lg-row-reverse">
          <div className="col-lg-6 p-0">
            <div className="swiper-container overflow-hidden">
              <div
                className="swiper-wrapper"
                style={{
                  display: "flex",
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: "transform 0.8s ease-in-out"
                }}
              >
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="swiper-slide"
                    style={{ flex: "0 0 100%" }}
                    role="group"
                    aria-label={`${idx + 1} / ${images.length}`}
                  >
                    <img src={src} className="model-img w-100" alt={`slider_${idx + 1}`} />
                  </div>
                ))}
              </div>
              <div className="text-center mt-3">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`swiper-pagination-bullet ${idx === currentIndex ? "swiper-pagination-bullet-active" : ""}`}
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "10px",
                      margin: "0 5px",
                      borderRadius: "50%",
                      backgroundColor: idx === currentIndex ? "#fff" : "#555",
                    }}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-sec p-4">
              <div className="main-title">
                <h2 className="mb-4">Why Choose Us for Your Nails?</h2>
                <ul className="hairstyle-pointer">
                  <li>
                    <strong>Expert Nail Craftsmanship</strong><br />
                    Our highly skilled technicians deliver stunning nail designs and flawless finishes, tailored to your unique style and preferences.
                  </li>
                  <li className="mt-3">
                    <strong>Advanced Nail Care Solutions</strong><br />
                    We combine innovative techniques with high-performance products to enhance nail health, ensuring a lasting, impeccable finish without compromising the integrity of your nails.
                  </li>
                  <li className="mt-3">
                    <strong>Personalized & Relaxing Services</strong><br />
                    Enjoy customized treatments in a serene ambiance, ensuring your nails are cared for with precision and relaxation.
                  </li>
                  <li className="mt-3">
                    <strong>Trendsetting Designs</strong><br />
                    Stay ahead of the fashion curve with nail art and styles inspired by the latest trends, ensuring your nails are always on point.
                  </li>
                </ul>
              </div>

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
          </div>
        </div>
      </div>

      {/* Static Image and Offer Section */}
      <section style={{ maxWidth: "1100px", margin: "80px auto" }}>
  <div style={{ border: "1px solid #333", borderRadius: "6px", overflow: "hidden", backgroundColor: "#000" }}>
    <img
      src={bandraNails}
      alt="Nail Care Offer"
      style={{ width: "100%", display: "block" }}
    />
    <div style={{ padding: "40px", textAlign: "left", color: "#fff" }}>
      <h2 style={{ marginBottom: "20px" }}>What We Offer</h2>
      <p>
        At Florian Hurel we take immense pride in offering you not just nail
        treatments but an experience where elegance and glamor intertwine
        seamlessly. Explore our range of exquisite nail treatments, each
        designed to elevate your look and reveal your unique beauty. Choose
        from:
      </p>
      <ul>
        <li>Therapeutic Manicure and Pedicure experiences that ensure your hands and feet are transformed into true works of art.</li>
        <li>Classic Manicure or the timeless elegance of a French Manicure.</li>
        <li>Gel Nail Extensions with a trained team to sculpt a flawless, enduring masterpiece.</li>
        <li>Embrace the allure of flawlessly crafted acrylic extensions.</li>
        <li>Nail Art options, which include Stickers, Chrome, Stone, and dazzling Glitter enhancements.</li>
      </ul>
      <p style={{ marginTop: "20px" }}>
        With us your nails will radiate both durability and sophistication.
        Express your creativity with our artistic nail enhancements. Experience
        precision in every stroke.
      </p>
    </div>
  </div>
</section>

<section style={{ maxWidth: "1100px", margin: "80px auto" }}>
  <div style={{
    border: "1px solid #444",
    borderRadius: "6px",
    overflow: "hidden",
    backgroundColor: "#000",
    color: "#fff"
  }}>
    <img
      src={nailCareLook}
      alt="nailcarelook"
      style={{ width: "100%", display: "block" }}
    />
    
  </div>
</section>



    </>
  );
};

export default Nail;
