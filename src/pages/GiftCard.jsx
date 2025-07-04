// ── src/pages/GiftCard.jsx
import React, { useState } from "react";
import model1 from "../assets/model1.jpg";          // ← your image
import "./GiftCard.css";

export default function GiftCard() {
  const [data, set] = useState({
    name: "", email: "", to_email: "",
    phone: "", amount: "", location: "", message: ""
  });

  const handle   = e => set({ ...data, [e.target.name]: e.target.value });
  const submit   = e => { e.preventDefault(); alert("➡  hook payment gateway"); };

  return (
    <section className="gift-wrapper">
      {/* picture (left) */}
      <div className="gift-img-col">
        <img src={model1} alt="Salon by night" />
      </div>

      {/* form (right) */}
      <div className="gift-form-col">
        <h1>Gift Card</h1>

        <p className="lead">
          Whether it’s a birthday, anniversary or a special treat, our gift
          cards offer a luxurious and rejuvenating experience. Give the gift of
          indulgent body treatments, premium hair care, skincare and
          professional styling by Florian Hurel Hair Couture &amp; Spa
          professionals. Buy a gift card now!
        </p>
        <p className="lead">
          For international payments,&nbsp;
          <a href="/contact-us">contact&nbsp;us</a>.
        </p>

        <form onSubmit={submit}>
          <input  name="name"        placeholder="Your Name"
                  value={data.name}        onChange={handle}   required />
          <input  name="email"       placeholder="Your Email Address"
                  value={data.email}       onChange={handle}   required />
          <input  name="to_email"    placeholder="Recipient's Email Address"
                  value={data.to_email}    onChange={handle}   required />
          <input  name="phone"       placeholder="Your Contact Number"
                  value={data.phone}       onChange={handle}   required />

          {/* amount field with ₹ prefix */}
          <div className="amount-wrap">
            <span className="rupee">₹</span>
            <input type="number" min="1000" step="0.01"
                   name="amount" placeholder="Enter Amount"
                   value={data.amount} onChange={handle} required />
          </div>

          <select name="location" value={data.location}
                  onChange={handle} required>
            <option value="">Location</option>
            <option>Walkeshwar</option>
            <option>Bandra West</option>
          </select>

          <textarea name="message" rows="3"
                    placeholder="Your message"
                    value={data.message} onChange={handle} />

          <button type="submit">Proceed to Payment</button>
        </form>
      </div>
    </section>
  );
}
