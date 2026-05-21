import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import "../styles/aboutus.css";

import heroImg from "../assets/images/img2.jpg";

const AboutUs = () => {
  const scrollRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <Navbar />

      

      {/* ABOUT TEXT */}
      <motion.section
        className="about-content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollRevealVariants}
      >
        <div className="container">
          <h2>About Us</h2>

          <p>
            Every bite is a celebration of our ethnic Indian flavours and rich
            heritage at Aswins Sweets. Made with traditionally followed and
            loved recipes that recite the epic stories of Indian flavours, at
            Aswins Sweets, we make our delicious delights with love.
          </p>

          <p>We bring home a reason to celebrate!</p>

          <p>
            A story that began in 2004 is now a beloved and trusted name in
            homes across Tamil Nadu, with 25 outlets and counting.
          </p>

          <p>
            We’ve proven ourselves to be a harbinger of pride and have withstood
            the test of time amidst the other brands, and we've secured a sweet
            spot in people's hearts with our Indian snacks and savouries. Using
            our whimsically inventive ideas and constant effort to manufacture
            different varieties of bites, our founder, K.R.V. Ganesan, has taken
            this organisation to new heights.
          </p>

          <h3>Why Choose Us?</h3>

          <p>
            As a testament to our rich and varied culinary heritage, we at
            Aswins Sweets are committed to crafting the finest and most
            treasured healthy Indian snacks. We believe that life's every little
            glee should be celebrated every day with a little bit of indulgence.
            Our exclusive range of delicacies is made with the purest, locally
            sourced ingredients and authentic age-old recipes that meet the
            highest standards of safety.
          </p>

          <h3>What makes us special?</h3>

          <p>
            We use only organic, Refined groundnut oil, and our oil is never
            reused. You will receive our love through our carefully prepared
            sweets — made in our own factory using traditional methods and the
            finest ingredients.
          </p>

          <ul>
            <li>We use only organic, refined groundnut oil; oil is never reused.</li>
            <li>All sweets are produced in our own factory under strict hygiene.</li>
            <li>We source locally and use age-old, authentic recipes.</li>
            <li>Our team includes skilled artisans and 1500+ staff, mostly women.</li>
          </ul>

          <p>
            Every sweet you enjoy is made with love and meant to reach your heart.
          </p>
        </div>
      </motion.section>

      {/* HERO */}
      <main className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-image">
            <img src={heroImg} alt="About Hero" />
          </div>

          <div className="about-hero-content">
            <h1 className="about-title">
              The Taste Of Royal India, Perfected Over Generations.
            </h1>

            <p className="about-subtitle">
              Anand sweets, sweetening celebrations since 1988
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default AboutUs;