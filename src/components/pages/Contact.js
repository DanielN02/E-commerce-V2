import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import "../Base.css";
import "./Contact.css";
// const logo = require("../images/sttclogoblack.png");

const Contact = () => {
  return (
    <div>
      <Nav />
      <section>
        <h1>Contact Us</h1>
      </section>

      {/* Start of Form */}

      <div class="form-container">
        <div class="contact-box">
          <div class="left"></div>
          <div class="right">
            <h2>Let us know how you feel</h2>
            <input
              type="name"
              class="field"
              placeholder="Your Name"
              id="name"
              required
            />
            <input
              type="email"
              class="field"
              placeholder="Your Email"
              id="email"
              required
            />
            <input
              type="number"
              class="field"
              placeholder="Phone"
              id="phone"
              required
            />
            <textarea
              placeholder="Message"
              class="field"
              id="message"
              type="text"
              name="fname"
              required
            ></textarea>
            <button className="form-btn">Submit Message</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
