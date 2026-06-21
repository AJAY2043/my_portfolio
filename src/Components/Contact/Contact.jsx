import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ScrollReveal from '../Support_Tools/ScrollReveal/ScrollReveal';
import './Contact.css';

const EMAILJS_SERVICE_ID = 'service_r8fke55';
const EMAILJS_TEMPLATE_ID = 'YOUR_NEW_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'Tw4ihtqKKpnvqMipH';

const CONTACT_INFO = [
  { icon: faEnvelope, label: 'Email', value: 'ajaykrishnareddy1@gmail.com', href: 'mailto:ajaykrishnareddy1@gmail.com' },
  { icon: faPhone, label: 'Phone', value: '+61 0402 420 647', href: 'tel:+610402420647' },
  { icon: faLocationDot, label: 'Location', value: 'Melbourne, Australia', href: null },
  { icon: faLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/ajay-krishna-reddy', href: 'https://linkedin.com/in/ajay-krishna-reddy/' },
  { icon: faGithub, label: 'GitHub', value: 'github.com/AJAY2043', href: 'https://github.com/AJAY2043' },
];

function ContactCard(props) {
  const item = props.item;

  const iconBlock = (
    <div className="contact-info-icon">
      <FontAwesomeIcon icon={item.icon} />
    </div>
  );

  const textBlock = (
    <div>
      <div className="contact-info-label">{item.label}</div>
      <div className="contact-info-value">{item.value}</div>
    </div>
  );

  if (item.href) {
    let targetValue = undefined;
    if (item.href.indexOf('http') === 0) {
      targetValue = '_blank';
    }
    return (
      <a href={item.href} target={targetValue} rel="noopener noreferrer" className="contact-info-card glass-card">
        {iconBlock}
        {textBlock}
      </a>
    );
  }

  return (
    <div className="contact-info-card glass-card">
      {iconBlock}
      {textBlock}
    </div>
  );
}

function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(function () {
        setStatus('success');
        formRef.current.reset();
      })
      .catch(function (error) {
        console.error('EmailJS error:', error);
        setStatus('error');
      })
      .finally(function () {
        setSending(false);
      });
  }

  const contactCards = CONTACT_INFO.map(function (item) {
    return <ContactCard item={item} key={item.label} />;
  });

  let statusBox = null;
  if (status === 'success') {
    statusBox = (
      <div className="contact-form-status success">
        Message sent successfully! I'll get back to you soon.
      </div>
    );
  } else if (status === 'error') {
    statusBox = (
      <div className="contact-form-status error">
        Something went wrong. Please try emailing me directly instead.
      </div>
    );
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">Get In Touch</span>
            <h2 className="section-title">Let's work together</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Whether it's a full-time opportunity, an internship, or freelance work, I'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-grid">
          <ScrollReveal>
            <div className="contact-info">{contactCards}</div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="contact-form-card glass-card">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="name">Name</label>
                    <input className="contact-form-input" type="text" id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="email">Email</label>
                    <input className="contact-form-input" type="email" id="email" name="email" placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="subject">Subject</label>
                  <input className="contact-form-input" type="text" id="subject" name="subject" placeholder="What's this about?" required />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="message">Message</label>
                  <textarea className="contact-form-textarea" id="message" name="message" placeholder="Tell me a bit about the role or project..." required />
                </div>

                <button type="submit" className="btn btn-primary contact-form-submit" disabled={sending}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>

                {statusBox}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;