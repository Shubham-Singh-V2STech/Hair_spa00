//import React from "react";
import spaBanner from "../assets/body-spa-top-img.jpg";
import bandraSpa from "../assets/bandra-spa.jpg";
import spaTop from "../assets/body-spa-top-img.jpg";

import "./Spa.css";
import { Link } from "react-router-dom";

const Spa = () => (
  <div className="spa-page">
    {/* Hero Section */}
    <section className="spa-hero" style={{
      backgroundImage: `url(${spaBanner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <div className="hero-overlay"
        style={{ backgroundColor: 'rgba(224, 212, 212, 0)', padding: '40px', color: '#fff' }}>
         <h1>Body spa</h1>
        <p>Florian Hurel – “Revitalization of the body, mind, and spirit.”</p>
      </div>
    </section>

    {/* Why Choose Section */}
    <section className="spa-benefits" style={{ maxWidth: '1100px', margin: '100px auto', color: '#fff' }}>
      <h2 style={{ marginBottom: "30px" }}>Why Choose Our Body Spa?</h2>
      <ul style={{ paddingLeft: "20px", lineHeight: "1.7", color: "#ccc" }}>
        <li><strong>Relaxation Redefined</strong><br />Experience the ultimate relaxation with our range of soothing spa treatments. From full-body massages to therapeutic detox therapies, we offer a serene escape from the stresses of daily life.</li>
        <li><strong>Tailored to Your Needs</strong><br />Whether you're seeking stress relief, muscle recovery, or simply a moment of peace, our professional therapists customize each treatment to meet your specific needs.</li>
        <li><strong>Premium Spa Environment</strong><br />Immerse yourself in our tranquil spa ambiance, featuring calming aromas, soft lighting, and serene music that enhance your relaxation journey.</li>
        <li><strong>Expert Care with High-Quality Products</strong><br />We use only the finest spa-grade products, enriched with natural ingredients, to nourish your skin and deliver long-lasting benefits.</li>
      </ul>
      <Link to="/contact-us" className="ba-btn">Book an Appointment</Link>

      <div className="spa-image" style={{ marginTop: '40px' }}>
        <img src={bandraSpa} alt="Massage Therapy" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      </div>
    </section>

    {/* What We Offer */}
    <section className="spa-offers" style={{ maxWidth: '1100px', margin: '100px auto', backgroundColor: '#000', padding: '40px', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}>
      <h2 style={{ marginBottom: "30px", color: '#fff' }}>What We Offer</h2>
      <p style={{ marginBottom: '20px', color: '#aaa' }}>At Florian Hurel, we are delighted to be your oasis of serenity and rejuvenation. Immerse yourself in the sublime with our signature spa experiences. Choose from:</p>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.7', color: '#ccc' }}>
        <li>The gentle strokes of our Swedish Massage.</li>
        <li>The therapeutic embrace of our Balinese Massage.</li>
        <li>Deep Tissue Massage, guided by our trained therapists, to target muscle tension and vitality.</li>
        <li>The holistic rejuvenation with our Thai Dry Therapy and Herbal Poultice Massage.</li>
        <li>Body Exfoliation and Body Wrap therapies which will leave your skin hydrated and radiant.</li>
        <li>Exclusive Cold Bath and Steam sessions that cleanse, relax, and renew.</li>
        <li>The epitome of togetherness with our Couple Body Therapy.</li>
      </ul>
      <p style={{ marginTop: '20px', color: '#aaa' }}>These ancient techniques, combined with modern luxury, create an unparalleled experience that transcends time. The result is not just relaxation; it’s a revitalization of the body, mind, and spirit that ensures your every visit is an escape into a world where your senses are the priority.</p>
    </section>

     {/* Image section */}
    <div className="spa-gallery" style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
      <img src={spaTop} alt="Spa Tub" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
    </div>

    {/* Service Table (optional) */}
    <section className="spa-pricing" style={{ maxWidth: '1100px', margin: '60px auto', backgroundColor: '#000', padding: '40px', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}>
      <h2 style={{ marginBottom: "30px" }}>Our Signature Treatments</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#ccc' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #444' }}>
            <th style={{ textAlign: 'left', padding: '10px' }}>Treatment</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Duration</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>Swedish Massage</td>
            <td style={{ padding: '10px' }}>60 mins</td>
            <td style={{ padding: '10px' }}>₹1,999</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Aromatherapy Massage</td>
            <td style={{ padding: '10px' }}>60 mins</td>
            <td style={{ padding: '10px' }}>₹2,499</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Hot Stone Massage</td>
            <td style={{ padding: '10px' }}>75 mins</td>
            <td style={{ padding: '10px' }}>₹2,999</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Body Scrub + Wrap</td>
            <td style={{ padding: '10px' }}>90 mins</td>
            <td style={{ padding: '10px' }}>₹3,499</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* Footer Consultation & Form */}
    <section className="spa-consultation" style={{ maxWidth: '1100px', margin: '80px auto', color: '#fff', padding: '40px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div style={{ flex: '1 1 45%' }}>
          <h3>Relaxing Consultations</h3>
          <p style={{ color: '#aaa' }}>Allow us to take you through the harmonious fusion of senses and the redefinition of rejuvenation. We believe in crafting moments of sheer bliss and relaxation. Please contact us for a consultation.</p>
        </div>
        <div style={{ flex: '1 1 45%' }}>
          <h3>Glamour Hours</h3>
          <ul style={{ color: '#aaa', listStyle: 'none', padding: 0 }}>
            <li>Monday to Sunday</li>
            <li>10:00 AM - 9:00 PM</li>
          </ul>
        </div>
      </div>
      <h3>Appointment Request</h3>
      <form style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <input type="text" placeholder="Name" style={{ flex: '1 1 45%', padding: '10px' }} />
        <input type="text" placeholder="Service" style={{ flex: '1 1 45%', padding: '10px' }} />
        <input type="email" placeholder="Email" style={{ flex: '1 1 45%', padding: '10px' }} />
        <input type="text" placeholder="Phone" style={{ flex: '1 1 45%', padding: '10px' }} />
        <input type="text" placeholder="Location" style={{ flex: '1 1 100%', padding: '10px' }} />
        <textarea placeholder="Message" style={{ flex: '1 1 100%', padding: '10px', minHeight: '100px' }}></textarea>
        <button type="submit" style={{ marginTop: '20px', padding: '10px 30px', backgroundColor: '#fff', color: '#000', border: 'none', cursor: 'pointer' }}>Submit</button>
      </form>
    </section>
  </div>
);

export default Spa;
