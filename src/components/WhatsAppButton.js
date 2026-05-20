import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsapp.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/94752753522"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;