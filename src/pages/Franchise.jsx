import React, { useState } from "react";
import model1 from "../assets/model1.jpg";      // ⬅️  your photo
import "./Franchise.css";

export default function Franchise() {
  /* simple local-state handler — replace with real submit/hook later */
  const [f, set] = useState({
    name:"", email:"", phone:"", country:"",
    state:"", hear:"", about:""
  });
  const handle = e => set({ ...f, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); alert("✅  Sent!"); };

  return (
    <section className="fr-wrapper">
      {/*  left image  */}
      <div className="fr-img-col">
        <img src={model1} alt="Salon exterior at night" />
      </div>

      {/*  right form  */}
      <div className="fr-form-col">
        <h1>Franchise Opportunities</h1>
        <p className="lead">
          Join the Florian Hurel Hair Couture &amp; Spa family and be part of a
          renowned brand redefining luxury hair care &amp; wellness.
        </p>
        <p className="lead">
          Ready to take the next step? Fill out the form and get in touch with
          us today to explore this exciting opportunity!
        </p>

        <form onSubmit={submit} noValidate>
          <input  name="name"  placeholder="Your Name"
                  value={f.name}  onChange={handle} required/>

          <input  name="email" type="email"
                  placeholder="Your Email Address"
                  value={f.email} onChange={handle} required/>

          <input  name="phone" type="tel"
                  placeholder="Your Contact Number"
                  value={f.phone} onChange={handle} required/>

          {/* country select */}
          <select name="country" value={f.country} onChange={handle} required>
            <option value="">Select Country</option>
            <option>India</option>
            <option>United Arab Emirates</option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Australia</option>
            {/* … add full list if you wish … */}
          </select>

          <input  name="state" placeholder="Enter State"
                  value={f.state} onChange={handle} required/>

          <input  name="hear" placeholder="How did you hear about us ?"
                  value={f.hear} onChange={handle} />

          <textarea name="about" rows="3"
                    placeholder="Tell us about yourself"
                    value={f.about} onChange={handle} />

          <button type="submit">Let’s Talk</button>
        </form>
      </div>
    </section>
  );
}
