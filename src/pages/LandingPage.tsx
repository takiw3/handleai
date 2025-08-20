import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Integrations from '../components/Integrations';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Integrations />
      <Benefits />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
};

export default LandingPage;