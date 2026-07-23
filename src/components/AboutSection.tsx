import React from 'react';
import { MapPin, Briefcase, Award, GraduationCap, Trophy, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="wrap">
        <p className="eyebrow">About Me</p>

        <div className="section-head" style={{ marginBottom: '32px' }}>
          <h2>Who I Am</h2>
        </div>

        <div className="about-card-container">
          <p className="about-bio-text" style={{ textAlign: 'justify' }}>
            I'm Syed Abdul Junaid, a passionate developer who enjoys building modern websites, Python applications, dashboards, and custom software. I love solving problems with technology while creating clean, interactive user experiences. With a <strong>Bachelor of Computer Applications (BCA)</strong> degree, hands-on experience through virtual internships at <strong>ShadowFox</strong> and <strong>Edunet Foundation</strong>, and winning the prestigious <strong>State-Level Jignasa Competition</strong>, I bring a strong blend of problem-solving, document formatting, and web development skills to every project.
          </p>

          {/* KEY ACHIEVEMENTS / HIGHLIGHT BADGES */}
          <div className="about-achievements-row">
            <div className="achievement-badge">
              <GraduationCap size={16} className="text-orange" />
              <span>BCA Graduate</span>
            </div>
            <div className="achievement-badge">
              <CheckCircle2 size={16} className="text-orange" />
              <span>ShadowFox & Edunet Virtual Internships</span>
            </div>
            <div className="achievement-badge gold">
              <Trophy size={16} style={{ color: '#EAB308' }} />
              <span>State-Level Jignasa Winner 🏆</span>
            </div>
          </div>

          <div className="about-cards-grid">
            {/* CARD 1: LOCATION */}
            <div className="about-mini-card">
              <div className="mini-card-icon">
                <MapPin size={22} />
              </div>
              <div className="mini-card-info">
                <span className="mini-card-label">Location</span>
                <span className="mini-card-value">Hyderabad</span>
              </div>
            </div>

            {/* CARD 2: AVAILABLE FOR FREELANCE */}
            <div className="about-mini-card">
              <div className="mini-card-icon green-status">
                <Briefcase size={22} />
              </div>
              <div className="mini-card-info">
                <span className="mini-card-label">Available for Freelance</span>
                <span className="mini-card-value">
                  <span className="status-dot-pulse"></span>
                  Open to Work
                </span>
              </div>
            </div>

            {/* CARD 3: EXPERIENCE */}
            <div className="about-mini-card">
              <div className="mini-card-icon">
                <Award size={22} />
              </div>
              <div className="mini-card-info">
                <span className="mini-card-label">Experience</span>
                <span className="mini-card-value">20+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
