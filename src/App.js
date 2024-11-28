import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills';
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
