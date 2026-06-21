import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faBolt, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../../AddOns/context/ThemeContext';
import './ThemeToggle.css';

const THEME_OPTIONS = [
  { id: 'indigo', icon: faMoon, label: 'Indigo theme' },
  { id: 'neon', icon: faBolt, label: 'Neon theme' },
  { id: 'light', icon: faSun, label: 'Light theme' },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const activeIndex = THEME_OPTIONS.findIndex((t) => t.id === theme);

  return (
    <div className="theme-toggle">
      <motion.div
        className="theme-toggle-indicator"
        animate={{ x: activeIndex * 36 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      />

      {THEME_OPTIONS.map((option) => (
        <button
          key={option.id}
          className={`theme-toggle-btn ${theme === option.id ? 'active' : ''}`}
          onClick={() => setTheme(option.id)}
          aria-label={option.label}
          title={option.label}
        >
          <FontAwesomeIcon icon={option.icon} />
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;