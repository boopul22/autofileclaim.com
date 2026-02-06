import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Steps from './Steps';
import About from './About';
import ClaimForm from './ClaimForm';
import Services from './Services';
import Benefits from './Benefits';
import FAQ from './FAQ';
import CTASection from './CTASection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Steps />
      <About />
      <ClaimForm />
      <Services />
      <Benefits />
      <FAQ />
      <CTASection />
    </>
  );
};

export default Home;