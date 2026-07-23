import React from 'react';
import { Globe, Code, Package, Palette, FileText, Sparkles, Terminal } from 'lucide-react';

interface PrimarySkill {
  name: string;
  percent: number;
  icon: React.ReactNode;
}

const PRIMARY_SKILLS: PrimarySkill[] = [
  { name: 'Web Design & Architecture', percent: 98, icon: <Globe size={18} className="text-orange" /> },
  { name: 'React / Vite / TypeScript', percent: 65, icon: <Code size={18} className="text-orange" /> },
  { name: 'UI/UX & Box Packaging Design', percent: 75, icon: <Package size={18} className="text-orange" /> },
  { name: 'Brand Strategy & Photo Editing', percent: 85, icon: <Palette size={18} className="text-orange" /> },
  { name: 'Rental Agreements & Legal Docs', percent: 94, icon: <FileText size={18} className="text-orange" /> },
  { name: 'Motion & Micro-Animations', percent: 80, icon: <Sparkles size={18} className="text-orange" /> }
];

const OTHER_SKILLS: string[] = [
  'HTML5 / TailwindCSS / AI / GSAP',
  'Figma / Affinity',
  'Rental & Lease Contracts',
  'Git & Version Control',
  'Responsive Layouts',
  'Fast Data Entry & Typing',
  'Firebase / Firebase Studio',
  'REST API Integration',
  'Photo Retouching & Touchups',
];

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="skills-matrix-section">
      <div className="wrap">
        <p className="eyebrow">Skills & Expertise</p>

        <div className="section-head" style={{ marginBottom: '24px' }}>
          <div>
            <h2>
              TECHNOLOGY & <span style={{ color: 'var(--pumpkin)' }}>EXPERTISE </span>
            </h2>
            <p className="sub" style={{ fontSize: '16px', maxWidth: '64ch' }}>
              Core competencies across modern web architecture, responsive frontend code, visual packaging, and document formatting.
            </p>
          </div>
        </div>

        <div className="skills-matrix-grid">
          {/* LEFT CARD: PRIMARY SKILLS KNOWN */}
          <div className="matrix-card">
            <div className="matrix-card-header">
              <div className="matrix-card-title">
                <Sparkles size={20} color="#FF6A14" />
                <span>PRIMARY SKILLS KNOWN</span>
              </div>
              <span className="matrix-badge-core">CORE</span>
            </div>

            <div className="skill-bar-group">
              {PRIMARY_SKILLS.map((skill, index) => (
                <div key={index} className="skill-bar-item">
                  <div className="skill-bar-label">
                    <span className="skill-name">
                      {skill.icon}
                      {skill.name}
                    </span>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD: OTHER SKILLS KNOWN */}
          <div className="matrix-card toolkit">
            <div className="matrix-card-header">
              <div className="matrix-card-title">
                <Terminal size={20} color="#0D0D0E" />
                <span>OTHER SKILLS KNOWN</span>
              </div>
              <span className="matrix-badge-toolkit">TOOLKIT</span>
            </div>

            <p className="toolkit-desc">
              Proficiency across tools, design tokens, responsive web frameworks, document formatting, and fast data entry typing.
            </p>

            <div className="toolkit-tags-grid">
              {OTHER_SKILLS.map((skillName, idx) => (
                <div key={idx} className="toolkit-tag">
                  <span className="tag-dot" />
                  <span>{skillName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
