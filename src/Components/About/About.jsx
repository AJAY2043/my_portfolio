import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faGraduationCap,
  faShieldHalved,
  faArrowRight,
  faHardHat,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import ScrollReveal from '../Support_Tools/ScrollReveal/ScrollReveal';
import aboutPhoto from '../../AddOns/Assets/about-candidateA-plaid-smile.jpg';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Photo side */}
          <ScrollReveal>
            <div className="about-photo-wrap">
              <div className="about-photo-glow" />
              <div className="about-photo-card glass-card">
                <img src={aboutPhoto} alt="Ajay Krishna" />
                <div className="about-photo-badge glass-card">
                  <div className="about-photo-badge-icon">
                    <FontAwesomeIcon icon={faLaptopCode} />
                  </div>
                  Civil Engineer → IT
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <div className="about-content">
            <ScrollReveal>
              <span className="eyebrow">About Me</span>
              <h2 className="section-title">
                From building structures to building software
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="about-bio">
                I started out studying <strong>Civil Engineering (BTech)</strong> in
                India — but along the way I realised the part I actually enjoyed
                most was solving logical problems and building things that people
                could directly interact with. That realisation led me to make a
                deliberate pivot into IT.
              </p>
              <p className="about-bio">
                I'm now completing my <strong>Master of Information Technology at
                CQUniversity Melbourne</strong>, majoring in Networks &amp;
                Information Security with a minor in Artificial Intelligence. I
                learn fastest by building real things — which is why, alongside my
                coursework, I've taken on actual freelance client work, delivering
                a full production website for a Melbourne IT firm from first
                commit to live deployment.
              </p>
              <p className="about-bio">
                I'm currently based in <strong>Melbourne, Australia</strong>,
                working toward Microsoft Azure certification, and actively looking
                for opportunities to bring that same hands-on, fast-learning
                approach to a real IT team.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="about-pivot glass-card">
                <div className="about-pivot-stage">
                  <div className="about-pivot-stage-label">Started In</div>
                  <div className="about-pivot-stage-value">
                    <FontAwesomeIcon icon={faHardHat} style={{ marginRight: 6 }} />
                    Civil Engineering
                  </div>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="about-pivot-arrow" />
                <div className="about-pivot-stage">
                  <div className="about-pivot-stage-label">Now Building In</div>
                  <div className="about-pivot-stage-value">
                    <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: 6 }} />
                    Software / IT
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="about-facts">
                <div className="about-fact-chip">
                  <FontAwesomeIcon icon={faLocationDot} />
                  Melbourne, Australia
                </div>
                <div className="about-fact-chip">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  CQUniversity Melbourne
                </div>
                <div className="about-fact-chip">
                  <FontAwesomeIcon icon={faShieldHalved} />
                  Networks &amp; Security + AI
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;