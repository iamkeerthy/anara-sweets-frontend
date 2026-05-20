import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AllCollections.css';
import WhatsAppButton from '../components/WhatsAppButton';

// Importing dummy collection imagery - replace these paths with your real assets
import allProductsImg from '../assets/images/img1.jpg'; 
import sweetsImg from '../assets/images/img2.jpg';
import biscottiImg from '../assets/images/img3.jpg';
import sugarFreeImg from '../assets/images/img4.jpg';
import dryFruitsImg from '../assets/images/img4.jpeg';
import savouriesImg from '../assets/images/img1.jpg';

const AllCollections = () => {
    // Array handling collection items cleanly
    const collectionsData = [
        { id: 1, title: 'All Products', count: 83, image: allProductsImg },
        { id: 2, title: 'Sweets', count: 41, image: sweetsImg },
        { id: 3, title: 'Indian Biscotti', count: 6, image: biscottiImg },
        { id: 4, title: 'Sugar Free', count: 5, image: sugarFreeImg },
        { id: 5, title: 'Dry Fruits', count: 12, image: dryFruitsImg },
        { id: 6, title: 'Savouries', count: 19, image: savouriesImg },
    ];

    return (
        <>
            <Navbar />

            <main className="collections-wrapper">
                <div className="collections-container">
                    {/* Header Title */}
                    <h1 className="collections-main-title">All Collection</h1>
                    
                    {/* Responsively handled Card Grid Layout */}
                    <div className="collections-grid">
                        {collectionsData.map((item) => (
                            <div key={item.id} className="collection-card">
                                <div className="collection-image-box">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="collection-info">
                                    <h3 className="collection-name">{item.title}</h3>
                                    <p className="collection-count">{item.count} Products</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </>
    );
};

export default AllCollections;