import React, { useState } from "react";
import "./Locations.css";
import spaVideo from "../assets/spa-salon-interior-reff.mp4";   // ← local MP4

/* ── location data ─────────────────────────────── */
const LOCATIONS = [
  {
    id: 1,
    area: "walkeshwar",
    name: "Florian Hurel Hair Couture and Spa (Walkeshwar)",
    addr: `1st Floor, White House Annex, 91 Walkeshwar Rd,
Krishanaraj Society, Walkeshwar, Malabar Hill, Mumbai 400006`,
    catalogue: "https://florianhurelhaircouture.com/FHHCS-Service-Menu.pdf",
    direction: "https://g.co/kgs/ABGZR21",
    tel: "+919167441414",
  },
  {
    id: 2,
    area: "bandra",
    name: "Florian Hurel Hair Couture and Spa (Bandra West)",
    addr: `33 Antoine Rest, Sherly Rajan Rd, Off Carter Rd,
Bandra West, Mumbai 400050`,
    catalogue: "https://florianhurelhaircouture.com/FHHCS-Service-Menu.pdf",
    direction: "https://g.co/kgs/1vGZ4R3",
    tel: "+919619331414",
  },
  {
    id: 3,
    area: "bandra",
    name:
      "Florian Hurel Hair Couture – Advanced Treatments (Waterfield Bandra West)",
    addr:
      "Ground Floor, Asuda Kutir, Waterfield Road, Bandra West, Mumbai 400050",
    catalogue: "#",                       // update when ready
    direction: "#",
    tel: "+919167081414",
  },
];

export default function Locations() {
  const [filter, setFilter] = useState("all");
  const list = LOCATIONS.filter(
    (l) => filter === "all" || l.area === filter
  );

  return (
    <>
      {/* ─────────── map + cards ─────────── */}
      <div className="loc-wrapper">
        <div className="row g-0">
          {/* map */}
          <div className="col-lg-8">
            <iframe
              className="loc-iframe"
              src="https://www.google.com/maps/d/u/0/embed?mid=1xESQIskSo0ZmldMzpDf2CHkO04zBRwk&ehbc=2E312F&noprof=1"
              title="Florian Hurel locations"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* list */}
          <div className="col-lg-4 loc-panel">
            <header className="loc-header">
              <h2>Our Locations</h2>
              <select
                className="loc-select"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Areas</option>
                <option value="walkeshwar">Walkeshwar</option>
                <option value="bandra">Bandra</option>
              </select>
            </header>

            <div className="loc-cards">
              {list.map((l) => (
                <div key={l.id} className="loc-card">
                  <h4>{l.name}</h4>
                  <p>{l.addr}</p>
                  <div className="loc-links">
                    <a href={l.catalogue} target="_blank" rel="noreferrer">
                      Catalogue
                    </a>
                    <a href={l.direction} target="_blank" rel="noreferrer">
                      Direction
                    </a>
                    <a href={`tel:${l.tel}`}>Call</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─────────── interior video ─────────── */}
      <section className="salon-video">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <video
                className="salon-video__player"
                src={spaVideo}
                autoPlay
                muted
                loop
                controls
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
