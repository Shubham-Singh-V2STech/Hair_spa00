// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FixedButtons from "./components/FixedButtons";
import ScrollToTop from "./components/ScrollToTop";

// pages
import Home from "./pages/Home";
import Hair from "./pages/Hair";
import Spa from "./pages/Spa";
import Nail from "./pages/Nail";
import Skin from "./pages/Skin";
import GiftCard from "./pages/GiftCard";
import ContactUs from "./pages/ContactUs";

import Franchise from "./pages/Franchise";
import KoreanHairSpa from "./pages/KoreanHairSpa";
import MeetFlorianHurel from "./pages/MeetFlorianHurel";
import Locations from "./pages/Locations";

function App() {
  return (
    <>
  <Navbar />

      {/* 🔁 Auto scroll to top on route change */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/nail" element={<Nail />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/gift-card" element={<GiftCard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/korean-hair-spa" element={<KoreanHairSpa />} />
        <Route path="/meet-florian-hurel" element={<MeetFlorianHurel />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>

      <Footer />
      <FixedButtons />
    </>
  );
}

export default App;

// This is the main App component that sets up the routing for the application.
// It imports various components including Navbar, Footer, and FixedButtons for WhatsApp and Call functionality.
// The Routes component from react-router-dom is used to define the different pages of the application.
// Each Route specifies a path and the component that should be rendered when that path is accessed.
// The App component is exported for use in the main entry point of the application.
// This structure allows for easy navigation between different sections of the website, such as Hair, Spa, Nail, Skin, Gift Card, Contact Us, Franchise, Korean Hair Spa, Meet Florian Hurel, and Locations.
//       </section>
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-md-6">
//             <h4>Experience the Best of Korean Hair Spa</h4>
//             <p>
//               Our Korean Hair Spa offers a unique blend of traditional techniques and modern science to rejuvenate your scalp and hair.                        