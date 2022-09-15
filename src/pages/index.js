import React, { useState } from 'react';
import HeroSection from '../components/hero/HeroSection';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/navbar/Sidebar';
import Intro from '../components/intro/Intro';
import Projects from '../components/myProjects/Projects';
import Values from '../components/values/Values';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

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
