import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Partners from '../components/Partners';
import CaseStudies from '../components/CaseStudies';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <Hero />
            <Expertise />
            <Partners />
            <CaseStudies />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
