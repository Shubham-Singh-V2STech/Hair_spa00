//import React from "react";
import banner from "../assets/hair-banner.jpg";
import hairView from "../assets/bandrahair.jpeg";
import "./Spa.css";
import { Link } from "react-router-dom";

const Hair = () => (
  <div className="hair-page">
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
      <div className="hero-overlay" style={{ backgroundColor: 'rgba(255, 255, 255, 0)', padding: '40px' }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: "bold" }}>Hair.</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: 0 }}>
          "Exquisite Hair Styling, Redefined"
        </p>
        <p style={{ fontSize: "1rem", marginTop: "10px" }}>
          Florian Hurel - Transforming Elegance into Art
        </p>
      </div>
    </section>

    {/* Why Choose Section */}
    <section className="hair-benefits" style={{ maxWidth: '1100px', margin: '80px auto', color: '#fff' }}>
      <h2 style={{ marginBottom: "30px" }}>Why Choose Us for Your Next Haircut?</h2>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.7', color: '#ccc' }}>
        <li><strong>Expert Precision Cuts</strong><br />Florian Hurel’s globally renowned expertise ensures precision and artistry in every haircut. Whether you're looking for a bold transformation or a subtle refresh, our stylists deliver a style that's uniquely you.</li>
        <li><strong>Customized to Your Face Shape</strong><br />Every haircut is designed to complement your face shape, hair texture, and personal preferences. From chic bobs to layered looks, we create styles that elevate your confidence and beauty.</li>
        <li><strong>Consultation with Professionals</strong><br />Unsure about what style suits you best? Our experts provide in-depth consultations to help you choose a look that aligns with the latest trends while matching your personality.</li>
      </ul>
      <Link to="/catalogue" className="ba-btn" style={{ marginTop: '20px', display: 'inline-block' }}>Download Catalogue</Link>
      <br />
      <Link to="/contact-us" className="ba-btn" style={{ marginTop: '10px', display: 'inline-block' }}>Book an Appointment</Link>
    </section>

    {/* What We Offer */}
    <section className="hair-offers" style={{ maxWidth: '1100px', margin: '60px auto', backgroundColor: '#000', padding: '40px', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}>
      <h2 style={{ marginBottom: '20px' }}>What We Offer</h2>
      <ul style={{ paddingLeft: '20px', color: '#ccc', lineHeight: '1.6' }}>
        <li>Experience expert precision haircuts tailored to your unique style and face shape.</li>
        <li>Transform your look with personalized hairstyling sessions for a confident new you.</li>
        <li>Achieve flawless volume and length with seamless tape hair extensions and clip-ons.</li>
        <li>Enhance your hair’s vibrancy with professional balayage highlights and global coloring.</li>
        <li>Rejuvenate your hair with smoothing treatments and moisturizing hair care rituals.</li>
        <li>Step into elegance and luxury with us because you deserve nothing but the best.</li>
      </ul>
    </section>

    {/* Hair Interior View */}
    <div style={{ margin: '60px 0' }}>
      <img src={hairView} alt="Hair Salon Interior" style={{ width: '100%', height: 'auto' }} />
    </div>

    {/* Price Table Placeholder */}
    <section className="hair-pricing" style={{ maxWidth: '1100px', margin: '60px auto', backgroundColor: '#000', padding: '40px', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}>
      <h2 style={{ marginBottom: "30px" }}>Hair Cutting & Styling</h2>
      <p style={{ color: '#aaa' }}>[Price table as seen in your design goes here]</p>
    </section>

    {/* Footer Consultation & Form */}
    <section className="hair-consultation" style={{ maxWidth: '1100px', margin: '80px auto', color: '#fff', padding: '40px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div style={{ flex: '1 1 45%' }}>
          <h3>Couture Consultations</h3>
          <p style={{ color: '#aaa' }}>Allow us to elevate your style to new heights with expertly crafted haircuts and luxurious styling. Please contact us for a consultation.</p>
        </div>
        <div style={{ flex: '1 1 45%' }}>
          <h3>Style Hours</h3>
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

export default Hair;
