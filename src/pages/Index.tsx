
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Career from '../components/Career';
import Projects from '../components/Projects';
import Travel from '../components/Travel';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Career />
      <Projects />
      <Travel />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
