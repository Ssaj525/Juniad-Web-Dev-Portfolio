import React, { useState, useEffect, useRef } from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string, sectionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('home');
  const isManualNavRef = useRef(false);

  useEffect(() => {
    if (currentRoute === 'projects' || currentRoute === 'detail') {
      setActiveTab('works');
    } else if (currentRoute === 'contact') {
      setActiveTab('contact');
    } else if (currentRoute === 'home') {
      const hash = window.location.hash;
      if (hash.includes('services')) {
        setActiveTab('services');
      } else if (hash.includes('skills') || hash.includes('testimonials')) {
        setActiveTab('experience');
      } else if (hash.includes('hire')) {
        setActiveTab('contact');
      }
    }
  }, [currentRoute]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Skip scroll spy if user clicked a nav link recently
      if (isManualNavRef.current) return;

      // Scroll Spy for Home sections in precise bottom-to-top layout order
      if (currentRoute === 'home') {
        const hireEl = document.getElementById('hire');
        const testimonialsEl = document.getElementById('testimonials');
        const servicesEl = document.getElementById('services');
        const skillsEl = document.getElementById('skills');

        const scrollPos = window.scrollY + 160;

        if (hireEl && scrollPos >= hireEl.offsetTop - 60) {
          setActiveTab('contact');
        } else if (testimonialsEl && scrollPos >= testimonialsEl.offsetTop - 60) {
          setActiveTab('experience');
        } else if (servicesEl && scrollPos >= servicesEl.offsetTop - 60) {
          setActiveTab('services');
        } else if (skillsEl && scrollPos >= skillsEl.offsetTop - 60) {
          setActiveTab('experience');
        } else {
          setActiveTab('home');
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentRoute]);

  const handleLinkClick = (e: React.MouseEvent, tab: string, route: string, sectionId?: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveTab(tab);

    // Lock manual navigation for 1.2s during smooth scroll
    isManualNavRef.current = true;
    setTimeout(() => {
      isManualNavRef.current = false;
    }, 1200);

    onNavigate(route, sectionId);
  };

  return (
    <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap">
        <div className="nav-row">
          <a
            href="#/"
            className="logo"
            onClick={(e) => handleLinkClick(e, 'home', 'home')}
          >
            Junaid<span className="logo-dot">.</span>
          </a>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a
              href="#/"
              className={activeTab === 'home' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'home', 'home')}
            >
              Home
            </a>
            <a
              href="#/#services"
              className={activeTab === 'services' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'services', 'home', 'services')}
            >
              Services
            </a>
            <a
              href="#/projects"
              className={activeTab === 'works' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'works', 'projects')}
            >
              Works
            </a>
            <a
              href="#/#testimonials"
              className={activeTab === 'experience' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'experience', 'home', 'skills')}
            >
              Experience
            </a>
            <a
              href="#/contact"
              className={activeTab === 'contact' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'contact', 'contact')}
            >
              Contact
            </a>
          </nav>

          <div className="nav-actions">
            <a href="tel:9014843345" className="phone-badge">
              <Phone size={14} />
              +91 90148 43345
            </a>

            <a
              href="#/contact"
              className="btn btn-orange-accent"
              style={{ padding: '10px 22px', fontSize: '14px' }}
              onClick={(e) => handleLinkClick(e, 'contact', 'contact')}
            >
              Hire Me <ArrowRight size={15} />
            </a>

            <button
              className={`nav-toggle ${menuOpen ? 'open' : ''}`}
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
