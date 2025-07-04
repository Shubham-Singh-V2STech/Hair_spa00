import React from "react";
import "./SkinBooking.css";

export default function SkinBooking() {
  return (
    <section className="booking border-frame">
      {/* ───── left description ───── */}
      <div className="booking__copy">
        <h3>Serene consultations</h3>
        <p>
          Let us elevate your skin's radiance with customised treatments and
          expert care, because your satisfaction is our utmost priority. Contact
          us today to schedule your personalised skincare consultation. Please{" "}
          <a href="/contact-us" className="inline-link">
            contact us
          </a>{" "}
          for a consultation.
        </p>
      </div>

      {/* ───── hours block ───── */}
      <div className="booking__hours">
        <h3>Leisure Hours</h3>
        <ul>
          <li>•&nbsp; Monday&nbsp;to&nbsp;Sunday</li>
          <li>•&nbsp; 10&nbsp;: 00&nbsp;AM&nbsp;–&nbsp;9&nbsp;: 00&nbsp;PM</li>
        </ul>
      </div>

      {/* ───── form ───── */}
      <div className="booking__form">
        <h3 className="form-title">Appointment Request</h3>

        <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
          {/* Name & Service */}
          <div className="grid-2">
            <label>
              <span>Name</span>
              <input type="text" required />
            </label>

            <label>
              <span>Service</span>
              <select required defaultValue="">
                <option value="" disabled>
                  Select Service
                </option>
                <option>Facial</option>
                <option>Chemical Peel</option>
                <option>HydraFacial</option>
              </select>
            </label>
          </div>

          {/* Email & Phone */}
          <div className="grid-2">
            <label>
              <span>Email</span>
              <input type="email" required />
            </label>

            <label>
              <span>Phone</span>
              <input type="tel" required />
            </label>
          </div>

          {/* Location */}
          <label className="full">
            <span>Location</span>
            <select required defaultValue="">
              <option value="" disabled>
                Location
              </option>
              <option>Mumbai – Juhu</option>
              <option>Mumbai – Bandra</option>
              <option>New Delhi – Aerocity</option>
            </select>
          </label>

          {/* Message */}
          <label className="full">
            <span>Message</span>
            <textarea rows={4} />
          </label>

          {/* Submit */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
// This component provides a booking form for skin care consultations, including fields for name, service, email, phone, location, and a message. It also displays the business hours and a brief description of the services offered.