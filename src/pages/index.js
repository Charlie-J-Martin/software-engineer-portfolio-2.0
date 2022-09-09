import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Values from '../components/Values';
import Contact from '../components/Contact';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Intro />
      <Projects />
      <Values />
      <Contact />
    </>
  );
};

export default Home;
