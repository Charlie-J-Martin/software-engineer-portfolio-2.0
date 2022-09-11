import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Values from '../components/Values';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
      </header>
      <HeroSection />
      <Intro />
      <Projects />
      <Values />
      <Contact />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
