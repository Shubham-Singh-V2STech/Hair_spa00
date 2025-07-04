import React from "react";
import menuImg from "../assets/skin-care-img2.jpg";
import "./SkinMenu.css";

/* helper for a single price row */
const Row = ({ item, price, tag, op }) => (
  <div className="skin-row">
    <span className="skin-row__item">
      {tag && <span className="skin-tag">{tag}</span>} {item}
    </span>
    <span className="skin-row__dots" />
    <span className="skin-row__price">
      {price}
      {op && " OP"}
    </span>
  </div>
);

export default function SkinMenu() {
  return (
    <section className="skin-menu border-frame">
      {/* image */}
      <img src={menuImg} alt="Facial treatment" className="skin-menu__img" />

      {/* price card */}
      <div className="skin-menu__card">
        <h2>Skin Care</h2>

        <div className="skin-menu__table">
          {/* column 1 */}
          <div className="skin-menu__col">
            <h4>Skin Care</h4>
            <Row item="Purity Ritual – For all skin types (30 Mins)"        price="4,000" />
            <Row item="City Life Hydration Treatment (60 Mins)"             price="7,000" />
            <Row item="Clarifying Mineral Treatment (60 Mins)"              price="8,000" />
            <Row item="Radiance Antiox Treatment (75 Mins)"                 price="10,000" />
            <Row item="Multi-Peptide Better Ageing Treatment (75 Mins)"     price="11,000" />
            <Row item="HydroFacial (45-50 Mins)"                            price="7,500" />
          </div>

          {/* column 2 */}
          <div className="skin-menu__col">
            <Row item="Red Light Therapy (20 Mins)"                         price="4,000" tag="NEW" />
            <Row item="Eye Care Ritual Treatment (30 Mins)"                 price="4,000" />
            <Row item="Eye Treatment With Facial"                           price="3,000" />
            <Row item="Add-On – Mask"                                       price="3,000" />
            <Row item="Add-On – Red Light Therapy"                          price="3,000" />
            <Row item="HydroFacial With Facial"                             price="6,000" />
          </div>
        </div>

        {/* Face Gym */}
        <h4>Face Gym</h4>
        <Row item="Cardio (30 Mins)"  price="2,000" op />
        <Row item="Sculpting (45 Mins)" price="3,000" op />
        <Row item="Cool Down (60 Mins)" price="4,000" op />
      </div>
    </section>
  );
}
