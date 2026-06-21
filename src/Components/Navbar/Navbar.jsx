import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from '../Support_Tools/ThemeToggle/ThemeToggle';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

// Links match the section ids we'll set on each component (id="about" etc.)
const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Smooth-scrolls to a section by id, then closes mobile menu if open
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="navbar-inner">
          <div
            className="navbar-logo"
            onClick={() => scrollToSection('hero')}
            style={{ cursor: 'pointer' }}
          >
            Ajay<span>.dev</span>
          </div>

          {/* Desktop links */}
          <nav className="navbar-links">
            {NAV_LINKS.map((link) => (
              <span
                key={link.id}
                className="navbar-link"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </span>
            ))}
          </nav>
<div className="navbar-right">
            <button
              className="navbar-resume-btn"
              onClick={() => alert('Resume coming soon — check back shortly!')}
            >
              <FontAwesomeIcon icon={faFileArrowDown} />
              <span>Resume</span>
            </button>
            <ThemeToggle />

            {/* Hamburger - mobile only */}
            <button
              className="navbar-burger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile dropdown - only renders when open */}
        {mobileOpen && (
          <motion.nav
            className="navbar-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map((link) => (
              <span
                key={link.id}
                className="navbar-link"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </span>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;