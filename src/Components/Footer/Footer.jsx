import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const FOOTER_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const SOCIALS = [
  { icon: faLinkedin, href: 'https://linkedin.com/in/ajay-krishna-reddy/', label: 'LinkedIn' },
  { icon: faGithub, href: 'https://github.com/AJAY2043', label: 'GitHub' },
  { icon: faEnvelope, href: 'mailto:ajaykrishnareddy1@gmail.com', label: 'Email' },
];

function SocialIcon(props) {
  const s = props.s;
  return (
    <a href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label={s.label}>
      <FontAwesomeIcon icon={s.icon} />
    </a>
  );
}

function Footer() {
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const year = new Date().getFullYear();

  const linkElements = FOOTER_LINKS.map(function (link) {
    return (
      <span key={link.id} className="footer-link" onClick={function () { scrollToSection(link.id); }}>
        {link.label}
      </span>
    );
  });

  const socialElements = SOCIALS.map(function (s) {
    return <SocialIcon s={s} key={s.label} />;
  });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-logo">Ajay<span>.dev</span></div>
            <p className="footer-tagline">Building my way into IT, one real project at a time.</p>
          </div>

          <nav className="footer-links">{linkElements}</nav>

          <div className="footer-socials">{socialElements}</div>
        </div>

        <div className="footer-bottom">
          <span>Copyright {year} Ajay Krishna Reddy. All rights reserved.</span>
          <span>Built with React in Melbourne</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;