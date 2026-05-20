import React, { useState } from "react";
import "../styles/contact.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <div className="contact-page">

        {/* HEADER */}
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>We are here to help you with orders and inquiries.</p>

          <div className="contact-info">
            <p><b>Address:</b> Jaffna, Sri Lanka</p>
            <p><b>Phone:</b> +94 75 275 3522</p>
            <p><b>Email:</b> info@anarasweets.com</p>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-box">
          <h2>Contact Us</h2>

          <form onSubmit={handleSubmit} className="contact-form">

            <div className="row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* ✅ PHONE ADDED */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ContactPage;