import React from 'react';
import { Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: string, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, route: string, sectionId?: string) => {
    e.preventDefault();
    onNavigate(route, sectionId);
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="simple-minimal-footer">
      <div className="wrap">
        {/* TOP ROW */}
        <div className="foot-top-row">
          <div className="foot-brand">
            <a href="#/" className="foot-logo" onClick={(e) => handleLinkClick(e, 'home')}>
              <span className="foot-logo-badge">J</span>
              <span className="foot-logo-text">Junaid<span className="foot-logo-dot">.design</span></span>
            </a>
            <p className="foot-tagline">
              Individual UI/UX Designer & Frontend Developer.<br />
              Building clean, intuitive web apps.
            </p>
          </div>

          <div className="foot-actions">
            <a href="tel:9014843345" className="foot-phone-btn">
              <Phone size={15} /> +91 90148 43345
            </a>

            <button className="foot-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
              TOP <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* DIVIDER LINE */}
        <div className="foot-divider" />

        {/* BOTTOM ROW */}
        <div className="foot-bottom-row">
          <span className="foot-copyright">
            © {new Date().getFullYear()} Junaid. All Rights Reserved.
          </span>

          <nav className="foot-nav-links">
            <a href="#/" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
            <a href="#/#services" onClick={(e) => handleLinkClick(e, 'home', 'services')}>Services</a>
            <a href="#/projects" onClick={(e) => handleLinkClick(e, 'projects')}>Works</a>
            <a href="#/contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
