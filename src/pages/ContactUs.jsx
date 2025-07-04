import React, { useState } from "react";
import "./ContactUs.css";

const BRANCHES = [
  {
    id: 1,
    city: "mumbai",
    title: "Florian Hurel Hair Couture and Spa ( Walkeshwar )",
    address: "Annex, White House, 91 Walkeshwar Rd, Krishanaraj Society, Walkeshwar, Malabar Hill, Mumbai 400006",
    open: true,
    hours: "09:00 AM – 9:00 PM",
    phones: [
      { num: "+91 91674 41414" },
      { num: "+91 91670 11414" }
    ],
    email: "info@florianhurelhaircouture.com",
    gmap: "https://maps.app.goo.gl/W7VgaVyeN1oYWAmN6",
    whatsapp: "https://wa.link/ublfsj",
  },
  {
    id: 2,
    city: "mumbai",
    title: "Florian Hurel Hair Couture and Spa ( Bandra West )",
    address: "Antoine Villa 33, Sherly Rajan Rd, off Carter Road, Bandra West, Mumbai 400050",
    open: true,
    hours: "09:00 AM – 10:00 PM",
    phones: [
      { num: "+91 96193 31414" },
      { num: "+91 91678 91414" }
    ],
    email: "desk.bandra@florianhurelhaircouture.com",
    gmap: "https://maps.app.goo.gl/oWjtK1PNSVSsntX87",
    whatsapp: "https://api.whatsapp.com/send?phone=919619331414",
  },
  {
    id: 3,
    city: "mumbai",
    title: "Florian Hurel Hair Couture Advanced Treatments ( Waterfield Bandra West )",
    address: "Ground Floor, Asuda Kutir Co-op Hsg Soc., Plot 245, Waterfield Rd, Bandra (W), Mumbai 400050",
    open: false,
  },
  {
    id: 4,
    city: "ahmedabad",
    title: "Florian Hurel Hair Couture and Spa ( Sindhu Bhavan )",
    address: "Sanblue Trade Link Pvt Ltd · Zion Z1 308-309, Sindhu Bhavan Marg, Ahmedabad 380054",
    open: false,
  },
  {
    id: 5,
    city: "ahmedabad",
    title: "Florian Hurel Hair Couture ( Billionaires St )",
    address: "Inceptum · Opp. Hotel Planet Landmark, Off Sarkhej-Gandhinagar Hwy, Bopal Rd, Ahmedabad 380058",
    open: false,
  },
  {
    id: 6,
    city: "ahmedabad",
    title: "Florian Hurel Hair Couture ( Prahlad Nagar )",
    address: "Aaryan Square, 1st Floor, Opp. Gurudwara, Prahlad Nagar Rd, Ahmedabad 380015",
    open: false,
  },
  {
    id: 7,
    city: "ahmedabad",
    title: "Florian Hurel Hair Couture ( Bodakdev )",
    address: "Aaryan Square, 1st Floor, Opp. Gurudwara, Prahlad Nagar Rd, Ahmedabad 380015",
    open: false,
  },
  {
    id: 8,
    city: "ahmedabad",
    title: "Florian Hurel Hair Couture ( Bodakdev )",
    address: "Aaryan Square, 1st Floor, Opp. Gurudwara, Prahlad Nagar Rd, Ahmedabad 380015",
    open: false,
  },
  {
    id: 9,
    city: "ahmedabad",
    title: "Coming Soon",
    address: "Aaryan Square, 1st Floor, Opp. Gurudwara, Prahlad Nagar Rd, Ahmedabad 380015",
    open: false,
  },
  {
    id: 10,
    city: "Pune",
    title: "Florian Hurel Hair Couture",
    
    address: "362/4 Ground Floor, GVRP+44C Shangrila Garden, A-Wing, Bund Garden Rd, Bund Garden, Sangamvadi, Pune, Maharashtra 411001",
    open: false,
  },
  {
    id: 11,
    city: "ahmedabad",
    title: "Coming Soon",
    address: "Aaryan Square, 1st Floor, Opp. Gurudwara, Prahlad Nagar Rd, Ahmedabad 380015",
    open: false,
  },
  {
    id: 12, 
    city: "dubai",
    title: "Coming Soon",
    address: "Marina Promenade - Dubai Marina - Dubai - United Arab Emirates",
    open: false,
  },
  {
  id: 13,
  city: "pune",
  title: "Coming Soon",
  address: "362/4 Ground Floor, GVRP+44C Shangrila Garden, A-Wing, Bund Garden Rd, Bund Garden, Sangamvadi, Pune, Maharashtra 411001",
  gmap: "https://maps.app.goo.gl/abcXYZ",
  open: false
},
{
id: 14,
  city: "Hydreabad",
  title: "Coming Soon",
  address: "MLA Colony, Film Nagar, Hyderabad, Telangana 500096",
  gmap: "https://maps.app.goo.gl/abcXYZ",
  open: false
}

];

export default function ContactUs() {
  const [city, setCity] = useState("all");
  const visible = BRANCHES.filter(b => city === "all" || b.city === city);

  return (
    <>
      <section className="contact-us-head">
        <h2>Contact&nbsp;Us</h2>
        <p>
          Choose your preferred method of contact to connect with our customer service team
        </p>
        <div className="city-buttons">
          {["all", "mumbai", "ahmedabad","dubai","Pune"," Hydreabad",].map(c => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={city === c ? "active" : ""}
            >
              {c === "all" ? "All" : c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {visible.map(b => (
        <section className="contact-us-section" key={b.id}>
          <h2>{b.title}</h2>
          {b.open ? (
            <div className="branch-inner">
              <div className="cont-flex">
                <div className="cont-flex-head">
                  <h4>Call us</h4>
                  <p>
                    <a href={b.gmap} target="_blank" rel="noreferrer">{b.address}</a>
                  </p>
                </div>
                <ul className="contact">
                  <li>
                    <span className="cont-day">Monday&nbsp;to&nbsp;Sunday</span>
                    <span className="cont-hour">{b.hours}</span>
                  </li>
                </ul>
                {b.phones.map(({ num }) => (
                  <a
                    key={num}
                    href={`tel:${num.replace(/\s+/g, "")}`}
                    className="contact-cta"
                  >
                    {num}
                  </a>
                ))}
                {b.whatsapp && (
                  <>
                    <span className="pill-divider" />
                    <a
                      href={b.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="whats-icon"
                      aria-label="WhatsApp"
                    >
                      <i className="fab fa-whatsapp" />
                    </a>
                  </>
                )}
              </div>

              <div className="cont-flex">
                <div className="cont-flex-head">
                  <h4>Email</h4>
                  <p>Our advisors will be delighted to answer your questions</p>
                </div>
                <ul className="contact">
                  <li>
                    <span className="cont-day">Monday&nbsp;to&nbsp;Sunday</span>
                    <span className="cont-hour">{b.hours}</span>
                  </li>
                </ul>
                <a href={`mailto:${b.email}`} className="email-pill">
                  SEND&nbsp;AN&nbsp;EMAIL
                </a>
              </div>
            </div>
          ) : (
            <div className="branch-block">
              <h4>Coming Soon</h4>
              <p>
                <a
                  href={`https://www.google.com/maps/search/?q=${encodeURIComponent(b.address)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {b.address}
                </a>
              </p>
            </div>
          )}
        </section>
      ))}
    </>
  );
}
