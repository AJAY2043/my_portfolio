import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import heroPhoto from '../../AddOns/Assets/about-candidateA-plaid-smile.jpg';
import './Hero.css';

// Stat data - update these numbers as your real progress changes
const STATS = [
  { number: '6+', label: 'Projects shipped' },
  { number: '1', label: 'Client delivered live' },
  { number: 'AZ-900', label: 'Certification in progress' },
];

// Stagger container - children animate in sequence, not all at once
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Hero() {
  function scrollToProjects() {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function scrollToContact() {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const statCards = STATS.map(function (stat) {
    return (
      <div className="hero-stat-card glass-card" key={stat.label}>
        <div className="hero-stat-number">{stat.number}</div>
        <div className="hero-stat-label">{stat.label}</div>
      </div>
    );
  });

  return (
    <section className="hero" id="hero">
      {/* Background photo + dark overlay so text stays readable */}
      <div className="hero-photo-bg" style={{ backgroundImage: 'url(' + heroPhoto + ')' }} />
      <div className="hero-photo-overlay" />

      {/* Decorative layers - sit above photo, below text */}
      <div className="hero-grid" />
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      <div className="container">
        <motion.div
          className="hero-inner"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="hero-badge-dot" />
            Open to IT roles in Melbourne
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm Ajay, building my way{' '}
            <span className="hero-title-gradient">into IT</span>, one real project at a time
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Master of IT student in Melbourne, transitioning from civil engineering
            into software development. I build with React, I deliver real client
            work, and I'm currently working toward Microsoft Azure certification.
          </motion.p>

          <motion.div className="hero-cta-group" variants={itemVariants}>
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View Projects
            </button>
            <button className="btn btn-outline" onClick={scrollToContact}>
              <FontAwesomeIcon icon={faPaperPlane} />
              Contact Me
            </button>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            {statCards}
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}

export default Hero;