import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import DreamOutcome from '../components/DreamOutcome';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PainPoints />
      <DreamOutcome />
      <HowItWorks />
      <WhyChooseUs />
      <Features />
      <FAQ />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </>
  );
};

export default LandingPage;