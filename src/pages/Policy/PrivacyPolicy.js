import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import "../../styles/policy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="policy-page">
        <article className="policy-container">
          <h1>Privacy Policy</h1>

          <p>
            This Privacy Policy describes how Anara Sweets collects, uses, and
            discloses your personal information when you visit our website,
            contact us, or make a purchase from us.
          </p>

          <h2>Collecting Personal Information</h2>
          <p>
            When you visit our site, we collect certain information about your
            device, your interaction with the site, and information needed to
            process your purchases. We may also collect information if you
            contact us for customer support.
          </p>

          <h3>Device Information</h3>
          <ul>
            <li><strong>Examples collected:</strong> browser type, IP address, time zone, cookie information, pages viewed, and how you interact with the site.</li>
            <li><strong>Purpose of collection:</strong> to load the site accurately and improve site performance.</li>
            <li><strong>Source of collection:</strong> collected automatically when you access our site.</li>
          </ul>

          <h3>Order Information</h3>
          <ul>
            <li><strong>Examples collected:</strong> name, billing address, shipping address, payment confirmation, email address, and phone number.</li>
            <li><strong>Purpose of collection:</strong> to fulfill orders, arrange shipping, provide invoices, and communicate with you.</li>
            <li><strong>Source of collection:</strong> collected directly from you when placing an order.</li>
          </ul>

          <h3>Customer Support Information</h3>
          <ul>
            <li><strong>Examples collected:</strong> contact details and information you provide in your support message.</li>
            <li><strong>Purpose of collection:</strong> to respond to questions, order issues, and customer requests.</li>
            <li><strong>Source of collection:</strong> collected directly from you.</li>
          </ul>

          <h2>Using Personal Information</h2>
          <p>
            We use your personal information to provide our services, process
            orders, deliver products, communicate with you, and improve your
            shopping experience.
          </p>

          <h2>Contact</h2>
          <p>
            For more information about our privacy practices, please contact us
            at anarasweets.inc@gmail.com.
          </p>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PrivacyPolicy;
