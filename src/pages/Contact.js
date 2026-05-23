import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

// Configuration for EmailJS
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMsg("");
    setErrorMsg("");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setSuccessMsg("✨ Thanks for contacting us! Our team will reach out shortly.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setIsSending(false);

          setTimeout(() => {
            setSuccessMsg("");
          }, 5000);
        },
        (error) => {
          console.error("FAILED to send message via EmailJS:", error);
          setErrorMsg("🚫 Unable to send message right now. Please try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <>
      <Navbar />



      <div className="contact-page">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>We are here to help you with orders and inquiries.</p>

          <div className="contact-info">
            <p><b>Address:</b> Jaffna, Sri Lanka</p>
            <p><b>Phone:</b> +94 75 275 3522</p>
            <p><b>Email:</b> anarasweets.inc@gmail.com </p>
            {/* bhgjhbj */}
          </div>
        </div>

        <div className="contact-box">
          <h2>Contact Us</h2>

          {/* Popup Messages */}
          {successMsg && (
            <div className="popup-message success-popup">
              {successMsg}
            </div>
          )}

          {errorMsg && (
            <div className="popup-message error-popup">
              {errorMsg}
            </div>
          )}

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

            {/* ✅ SCOPED BUTTON */}
            <button type="submit" className="contact-submit-btn" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ContactPage;