import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import "../../styles/policy.css";

const ShippingPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="policy-page">
        <article className="policy-container">
          <h1>Shipping Policy</h1>

          <p><strong>At Anara Sweets</strong></p>
          <p>
            We are committed to delivering our sweets and savouries to your
            doorstep in a timely and careful manner. Please review our shipping
            policy below before placing your order.
          </p>

          <h3>Shipping Areas</h3>
          <p>
            We currently offer delivery to available service locations in Sri
            Lanka. If your location is outside our delivery area, we may be
            unable to fulfill your order at this time.
          </p>

          <h3>Order Processing Time</h3>
          <p>
            Once your order is placed and payment is confirmed, we will process
            and prepare it for shipment. Typical processing time is 1 to 2
            working days, excluding weekends and holidays.
          </p>
          <p>
            During peak seasons or promotional periods, processing times may be
            slightly longer due to high order volumes.
          </p>

          <h3>Shipment Methods</h3>
          <p>
            We work with reliable delivery partners to help ensure your order
            reaches you safely. The delivery method may vary based on your
            location, package weight, and availability.
          </p>

          <h3>Estimated Delivery Time</h3>
          <p>
            Standard delivery generally takes 2 to 7 working days after your
            order has been processed. Delivery times may vary depending on the
            destination and courier conditions.
          </p>

          <h3>Contact</h3>
          <p>
            For shipping questions, please contact us at +94 75 275 3522 or
            anarasweets.inc@gmail.com.
          </p>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ShippingPolicy;
