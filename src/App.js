import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './AddOns/context/ThemeContext';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    // ThemeProvider wraps everything so any component can access
    // the current theme via the useTheme() hook
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          {/* This is a single-page scrolling site.
              Each section below has an id (e.g. id="about")
              that the Navbar links scroll to. */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;