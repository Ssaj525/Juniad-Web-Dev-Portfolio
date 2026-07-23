import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ProjectCard } from '../components/ProjectCard';
import { ServicesShowcase } from '../components/ServicesShowcase';
import { SkillsMatrix } from '../components/SkillsMatrix';
import { AboutSection } from '../components/AboutSection';
import { PROJECTS } from '../data/projects';
import junaidWalkingVideo from '../assets/junaid walking.mp4';
import junaidCodingVideo from '../assets/junaid coding.mp4';

interface HomePageProps {
  onNavigate: (route: string, sectionId?: string) => void;
  onSelectProject: (id: number) => void;
}

const PROJECT_THUMB_IMAGES = [
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80'
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

  const selectedProjects = PROJECTS.slice(0, 3);
  const topProjects = PROJECTS.slice(0, 5);

  useEffect(() => {
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.gsap-hero');
      gsap.fromTo(
        elements,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );
    }
  }, []);

  const handleHireSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const projectType = formData.get('projectType') || '';
    const message = formData.get('message') || '';

    const recipient = 'satauheed.business2@gmail.com';
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name} (${projectType})`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* ============ HERO SECTION WITH FULL BACKSIDE WALKING VIDEO ============ */}
      <section className="hero-container" ref={heroRef}>
        {/* FULL WIDTH BACKSIDE VIDEO */}
        <video
          src={junaidWalkingVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hero-backside-video"
        />
        <div className="hero-video-fade-overlay" />

        <div className="wrap">
          <div className="hero-content">
            <p className="hero-eyebrow-text gsap-hero">Hey There,</p>

            <h1 className="hero-headline gsap-hero">
              I'm{' '}
              <span className="highlight-name">
                Junaid
                <svg className="hand-stroke" viewBox="0 0 250 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 15C50 5 150 3 247 12C200 17 90 18 15 16" stroke="#ff3c00" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="hero-lead-text gsap-hero">
              I design beautifully simple things. And I love what I do.
            </p>
            <p className="hero-sub-text gsap-hero">
              I build modern websites, custom software,
              Python applications, and digital experiences
              that are fast, responsive, and user-focused.
            </p>

            <div className="hero-actions-row gsap-hero">
              <a
                href="#/contact"
                className="btn btn-vermilion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
              >
                Let's Talk →
              </a>
              <a
                href="/assets/Junaid Web Dev Resume.pdf"
                download="Junaid_Web_Dev_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-black"
              >
                Download CV
              </a>
            </div>

            {/* STATS ROW (REAL RELEVANT STATS - NO FAKE EXPERIENCE YEARS) */}
            <div className="hero-stats-row gsap-hero">
              <div className="stat-item">
                <b>20+</b>
                <span>Projects Completed</span>
              </div>
              <div className="stat-item">
                <b>15+</b>
                <span>Happy Students</span>
              </div>
              <div className="stat-item">
                <b>Good</b>
                <span>Code Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* SOFT GRADIENT FADE BOTTOM SHADOW (CIRCLED IN BLUE IN USER REFERENCE) */}
        <div className="hero-bottom-fade" />
      </section>

      {/* ABOUT ME SECTION */}
      <AboutSection />

      {/* TECHNICAL & CREATIVE MATRIX */}
      <SkillsMatrix />

      {/* SELECTED WORK */}
      <section id="work">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Works</h2>
            </div>
          </div>
          <div className="proj-grid">
            {selectedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={onSelectProject}
              />
            ))}
          </div>
          <div className="proj-more">
            <a
              href="#/projects"
              className="btn btn-black"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('projects');
              }}
            >
              View All Projects →
            </a>
          </div>
        </div>
      </section>

      {/* TOP 5 FAN FAVORITES */}
      <section id="top5" style={{ background: 'var(--white)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <p className="eyebrow">Top 5 Projects</p>
          <div className="section-head">
            <h2>Favorites</h2>
          </div>
          <div className="index-list">
            {topProjects.map((p, i) => (
              <a
                key={p.id}
                className="index-row"
                href={`#/project/${p.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectProject(p.id);
                }}
              >
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="title">{p.title}</span>
                <div className={`index-thumb-preview ${i % 2 === 0 ? 'tilt-right' : 'tilt-left'}`}>
                  <img
                    src={p.image || PROJECT_THUMB_IMAGES[i % PROJECT_THUMB_IMAGES.length]}
                    alt={p.title}
                    className="thumb-img"
                  />
                  <div className="thumb-overlay">
                    <span className="thumb-cat">{p.cat}</span>
                    <span className="thumb-title">{p.title}</span>
                  </div>
                </div>
                <span className="meta">{p.tag} · {p.year}</span>
                <span className="arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE SERVICES SHOWCASE */}
      <ServicesShowcase />

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ background: 'var(--white)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <p className="eyebrow">Client Feedback</p>
          <div className="section-head">
            <h2>What Clients Say</h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <p className="testi-quote">"Working with Syed Abdul Junaid was an amazing experience. He delivered my project much faster than I expected without compromising on quality. The communication was smooth throughout the process, and the final result exceeded my expectations. I highly recommend him for anyone looking for affordable and professional development services."</p>
              <div className="testi-who">
                <div className="avatar">HS</div>
                <div>
                  <div className="name">Harshika Sharma</div>
                  <div className="role">Student</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <p className="testi-quote">"Junaid completed my project within the promised timeline and charged a very reasonable price. His attention to detail, clean coding practices, and quick response to revisions made the entire process stress-free. I would definitely work with him again for future projects."</p>
              <div className="testi-who">
                <div className="avatar">KA</div>
                <div>
                  <div className="name">K. Abhishek</div>
                  <div className="role">Student</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <p className="testi-quote">"I was impressed by the speed and quality of the project delivery. Junaid understood my requirements perfectly and implemented everything exactly as requested. He provides excellent value for money and delivers projects on time. I strongly recommend his services."</p>
              <div className="testi-who">
                <div className="avatar">MI</div>
                <div>
                  <div className="name">Mohammed Ishaq</div>
                  <div className="role">Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIRE BAND / GET IN TOUCH */}
      <section className="hire-band" id="hire">
        <div className="wrap">
          <p className="eyebrow">Get In Touch</p>

          <div className="section-head">
            <div>
              <h2 style={{ color: '#fff' }}>Let's build something worth showing.</h2>
              <p className="sub">Tell me a bit about the project and I'll reply within one business day.</p>
            </div>
          </div>

          <div className="contact-split-grid">
            {/* LEFT COLUMN: FORM */}
            <form className="form-grid" onSubmit={handleHireSubmit}>
              <div className="field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Jane Doe" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" name="email" placeholder="jane@company.com" required />
              </div>
              <div className="field full">
                <label>Project Type</label>
                <select name="projectType" defaultValue="Web Development / Website">
                  <option>Web Development / Website</option>
                  <option>Python Application / Automation</option>
                  <option>UI/UX & Box Packaging Design</option>
                  <option>Rental Agreement / Legal Drafting</option>
                  <option>Data Entry & Typing</option>
                  <option>Other / Custom Software</option>
                </select>
              </div>
              <div className="field full">
                <label>Message</label>
                <textarea name="message" placeholder="What are you building?" required></textarea>
              </div>
              <div className="form-actions full">
                <button type="submit" className="btn btn-vermilion">Send Message →</button>
                {formSubmitted && (
                  <p className="form-note">
                    ✓ Opening mail app... Message sent directly to satauheed.business2@gmail.com!
                  </p>
                )}
              </div>
            </form>

            {/* RIGHT COLUMN: ENHANCED CODING VIDEO PREVIEW */}
            <div className="contact-video-card">
              <video
                src={junaidCodingVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  filter: 'brightness(1.18) contrast(1.16) saturate(1.32)',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
              />
              <div className="contact-video-overlay">
                <span className="contact-video-badge">⚡ IN ACTION</span>
                <div className="contact-video-caption">
                  <b>Clean Code & Custom Software</b>
                  <span>Developing web apps, Python scripts & digital tools.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
