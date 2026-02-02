import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css'; // Importing the styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>

      <Footer />
    </div>
  );
}
export default App;