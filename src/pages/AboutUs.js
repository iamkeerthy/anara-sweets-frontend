import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 1. Import Framer Motion
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import '../styles/aboutus.css';
import WhatsAppButton from '../components/WhatsAppButton';

import heroImg from '../assets/images/img2.jpg';
import gridImg from '../assets/images/img4.jpg';
import smallOne from '../assets/images/img1.jpg';
import logo from '../assets/images/logo.png';

const AboutUs = () => {
    // 2. Define a clean, reusable animation configuration
    const scrollRevealVariants = {
        hidden: { opacity: 0, y: 50 }, // Starts invisible and 50px lower
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: "easeOut" } // Smooth transition settings
        }
    };

    return (
        <>
            <Navbar />

            {/* Hero section loads instantly without waiting for scroll */}
            <main className="about-hero">
                <div className="about-hero-inner">
                    <div className="about-hero-image">
                        <img src={heroImg} alt="Anara sweets hero section" />
                    </div>
                    <div className="about-hero-content">
                        <h1 className="about-title">
                            The Taste Of Royal India, Perfected Over Generations.
                        </h1>
                        <p className="about-subtitle">
                            Anand sweets, sweetening celebrations since 1988
                        </p>
                        <Link to="/all-collections" className="about-shop-btn">
                            SHOP NOW
                        </Link>
                    </div>
                </div>
            </main>

            {/* Excellence Section */}
            <motion.section 
                className="excellence-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Runs animation once when 20% of section is visible
                variants={scrollRevealVariants}
            >
                <div className="container center">
                    <h2>Excellence In Every Morsel</h2>
                    <p className="muted">
                        For over 3 decades, Anand has grown to be synonymous with premium quality Indian Sweets.
                    </p>
                </div>
                <div className="banner-image">
                    <img src={gridImg} alt="assorted sweets arrangement" />
                </div>
            </motion.section>

            {/* Quality Section */}
            <motion.section 
                className="quality-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scrollRevealVariants}
            >
                <div className="container two-col">
                    <div className="col text">
                        <h3>Quality That Delights, In Every Bite.</h3>
                        <p>
                            Over decades, Anand has grown to be synonymous with premium quality Indian sweets.
                        </p>
                    </div>
                    <div className="col image">
                        <img src={gridImg} alt="assorted sweets arrangement" />
                    </div>
                </div>
            </motion.section>

            {/* About Grid Section */}
            <motion.section 
                className="about-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scrollRevealVariants}
            >
                <div className="container two-col reverse-on-mobile">
                    <div className="col image">
                        <img src={gridImg} alt="assorted sweets arrangement" />
                    </div>
                    <div className="col text">
                        <h4>About Us</h4>
                        <h3>Taste Of Royal India</h3>
                        <p>
                            Anand owes its success to tradition, innovation and uncompromising quality.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Philosophy Section */}
            <motion.section 
                className="philosophy-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scrollRevealVariants}
            >
                {/* <div className="container two-col">
                    <div className="col image">
                        <img src={smallOne} alt="sweets preparation" />
                    </div>
                    <div className="col text">
                        <h5>Our Philosophy</h5>
                        <h3>Luxurious Mithais, Accessible To Everyone</h3>
                        <p>
                            We are obsessed with authenticity and curate flavours for every celebration.
                        </p>
                    </div>
                </div> */}

                <div className="container two-col alt">
                    <div className="col text">
                        <h2>Our Craft</h2>
                        <p>
                            Our artisans follow traditional techniques with modern quality standards.
                        </p>
                    </div>
                    <div className="col image">
                        <img src={smallOne} alt="sweets preparation" />
                    </div>
                </div>
            </motion.section>

            {/* Certifications Section */}
            <motion.section 
                className="certifications-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scrollRevealVariants}
            >
                <div className="container center">
                    <h1>Awards And Accreditations</h1>
                    <p className="muted">
                        Anand has won numerous food safety and quality certifications.
                    </p>
                    <div className="cert-icons">
                        <img src={logo} alt="company logo" />
                        <img src={logo} alt="ISO certification icon" />
                        <img src={logo} alt="FDA certification icon" />
                        <img src={logo} alt="FSSAI certification icon" />
                    </div>
                </div>
            </motion.section>

            <Footer />
            <WhatsAppButton />
        </>
    );
};

export default AboutUs;
