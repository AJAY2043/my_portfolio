import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollReveal from '../Support_Tools/ScrollReveal/ScrollReveal';
import { SKILL_CATEGORIES } from '../../AddOns/data/skills';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0].id);
  const current = SKILL_CATEGORIES.find((c) => c.id === activeCategory);

  // Calculates an evenly-spaced angle for each skill icon around the circle,
  // then converts that angle into x/y position on the orbit ring.
  const getNodePosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // start from top
    const radius = 42; // % from center
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { left: `${x}%`, top: `${y}%` };
  };

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <ScrollReveal>
          <div className="skills-header">
            <span className="eyebrow">What I Work With</span>
            <h2 className="section-title">Skills &amp; Tech Stack</h2>
            <p className="section-subtitle">
              Still growing this list every week — here's where I currently stand
              across the stack.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="skills-tabs">
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`skills-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="skills-content">
            {/* Orbit visual */}
            <div className="skills-orbit">
              <div className="skills-orbit-ring skills-orbit-ring-1" />
              <div className="skills-orbit-ring skills-orbit-ring-2" />
              <div className="skills-orbit-core">{current.label}</div>

              <AnimatePresence mode="wait">
                {current.skills.map((skill, i) => {
                  const pos = getNodePosition(i, current.skills.length);
                  return (
                    <motion.div
                      key={skill.name}
                      className="skills-orbit-node"
                      style={{ left: pos.left, top: pos.top }}
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.4 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                    >
                      <FontAwesomeIcon icon={skill.icon} />
                      <span className="skills-orbit-node-label">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Skill bars */}
            <div className="skills-bars">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
                >
                  {current.skills.map((skill, i) => (
                    <div className="skills-bar-item" key={skill.name}>
                      <div className="skills-bar-top">
                        <span className="skills-bar-name">
                          <FontAwesomeIcon icon={skill.icon} />
                          {skill.name}
                        </span>
                        <span className="skills-bar-percent">{skill.level}%</span>
                      </div>
                      <div className="skills-bar-track">
                        <motion.div
                          className="skills-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;