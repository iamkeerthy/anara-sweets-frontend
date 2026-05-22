import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import "../../styles/policy.css";

const RefundPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="policy-page">
        <article className="policy-container">
          <h1>Refund Policy</h1>

          <p>
            We prepare and pack every Anara Sweets order with care. Because our
            products are food items, refund and replacement requests are reviewed
            carefully for quality, safety, and delivery concerns.
          </p>

          <h3>Eligibility for Refunds or Replacements</h3>
          <p>
            Please contact us as soon as possible if your order arrives damaged,
            incorrect, missing items, or in a condition that does not meet our
            quality standards.
          </p>

          <h3>Non-Refundable Items</h3>
          <ul>
            <li>Products that have been opened, consumed, or stored incorrectly after delivery.</li>
            <li>Orders with incorrect delivery details provided by the customer.</li>
            <li>Requests made after a reasonable inspection period from delivery.</li>
          </ul>

          <h3>How to Request Support</h3>
          <p>
            To request a refund or replacement, contact us with your order
            details, contact number, and clear photos if the product or package
            was damaged.
          </p>

          <h3>Refund Processing</h3>
          <p>
            Approved refunds will be processed through the original payment
            method where possible. Processing times may vary depending on the
            payment provider.
          </p>

          <h3>Contact</h3>
          <p>
            For refund support, please contact us at +94 75 275 3522 or
            anarasweets.inc@gmail.com.
          </p>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default RefundPolicy;
