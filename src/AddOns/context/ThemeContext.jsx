import React, { createContext, useContext, useState, useEffect } from 'react';

// Three themes available across the site.
// Each component reads colors via CSS variables (set in index.css),
// so switching theme = swapping a data-attribute on <html>, nothing more.
const THEMES = ['indigo', 'neon', 'light'];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Read saved theme from localStorage on first load, default to 'indigo'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return THEMES.includes(saved) ? saved : 'indigo';
  });

  // Whenever theme changes: save it, and set it as an attribute on <html>
  // The CSS variables for each theme are defined against [data-theme="..."]
  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Cycles to the next theme in the list (used by the toggle button)
  const cycleTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setTheme(THEMES[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook so components just call useTheme() instead of importing useContext + ThemeContext every time
export const useTheme = () => useContext(ThemeContext);