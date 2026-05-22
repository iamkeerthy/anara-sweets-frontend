import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import "../../styles/policy.css";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main className="policy-page">
        <article className="policy-container">
          <h1>Terms of Service</h1>

          <p>
            These Terms of Service govern your use of the Anara Sweets website
            and your purchases from us. By using our site or placing an order,
            you agree to these terms.
          </p>

          <h3>Online Store Terms</h3>
          <p>
            You agree to provide accurate, current, and complete purchase and
            account information. You may not use our products or website for any
            unlawful or unauthorized purpose.
          </p>

          <h3>Products and Pricing</h3>
          <p>
            Product availability, descriptions, images, and prices may change
            without notice. We make every effort to display products accurately,
            but slight differences in appearance may occur.
          </p>

          <h3>Orders</h3>
          <p>
            We reserve the right to refuse or cancel an order if product
            availability, payment, delivery, or order information cannot be
            confirmed.
          </p>

          <h3>Delivery</h3>
          <p>
            Delivery timelines are estimates and may vary based on courier,
            weather, location, holidays, or other circumstances outside our
            control.
          </p>

          <h3>Limitation of Liability</h3>
          <p>
            Anara Sweets will not be liable for indirect or incidental losses
            arising from the use of our website or products, except as required
            by applicable law.
          </p>

          <h3>Contact</h3>
          <p>
            Questions about these Terms of Service can be sent to
            anarasweets.inc@gmail.com.
          </p>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default TermsOfService;
