import React, { useState } from 'react';
import { Phone, ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS, getPaletteClass } from '../data/projects';

interface ProjectDetailPageProps {
  projectId: number;
  onNavigate: (route: string) => void;
  onSelectProject: (id: number) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  projectId,
  onNavigate,
  onSelectProject
}) => {
  const [galleryIndex, setGalleryIndex] = useState(0);

  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  const otherProjects = PROJECTS.filter(p => p.id !== project.id).slice(0, 3);



  return (
    <div className="route-page active">
      <section style={{ paddingBottom: '60px' }}>
        <div className="wrap">
          {/* ALL PROJECTS BUTTON */}
          <div style={{ marginBottom: '24px' }}>
            <a
              href="#/projects"
              className="all-projects-btn"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('projects');
              }}
            >
              ← All Projects
            </a>
          </div>

          {/* PROJECT HEADER (NO CLIENT, ROLE, TIMELINE GRID) */}
          <div className="detail-head" style={{ marginBottom: '32px' }}>
            <p className="eyebrow">{project.cat} — {project.year}</p>
            <h1 className="project-detail-title">{project.title}</h1>
          </div>

          {/* GALLERY SLIDER WITH REAL PROJECT SCREENSHOTS */}
          <div className="gallery">
            <div className={`gallery-main ${getPaletteClass(project.id + galleryIndex)}`} style={{ position: 'relative', overflow: 'hidden', background: '#0B0B0C' }}>
              {project.images && project.images.length > 0 ? (
                <img
                  src={project.images[galleryIndex % project.images.length]}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    position: 'absolute',
                    inset: 0
                  }}
                />
              ) : (
                <span>{String(galleryIndex + 1).padStart(2, '0')} / 03</span>
              )}
              <button
                className="gallery-nav prev"
                onClick={() => setGalleryIndex((prev) => (prev + (project.images?.length || 3) - 1) % (project.images?.length || 3))}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="gallery-nav next"
                onClick={() => setGalleryIndex((prev) => (prev + 1) % (project.images?.length || 3))}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
            <div className="gallery-thumbs">
              {(project.images && project.images.length > 0 ? project.images : [0, 1, 2]).map((imgSrc, i) => (
                <div
                  key={i}
                  className={`t ${galleryIndex === i ? 'active' : ''} ${typeof imgSrc === 'number' ? getPaletteClass(project.id + i) : ''}`}
                  style={{ overflow: 'hidden', cursor: 'pointer', background: '#0B0B0C', position: 'relative' }}
                  onClick={() => setGalleryIndex(i)}
                >
                  {typeof imgSrc === 'string' && (
                    <img
                      src={imgSrc}
                      alt={`${project.title} screenshot ${i + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* DETAIL CONTENT AFTER SLIDER (MATCHING REFERENCE IMAGE 2) */}
          <div className="project-detail-layout">
            {/* LEFT CONTAINER: OVERVIEW, CHALLENGE, SOLUTION & LIVE SITE BUTTON */}
            <div className="project-overview-card">
              <span className="overview-eyebrow">PROJECT OVERVIEW</span>
              <p className="overview-desc">
                {project.challenge.split('.')[0]}. Crafted a complete visual identity and technical solution tailored to modern audiences.
              </p>

              {/* THE CHALLENGE BOX */}
              <div className="challenge-box">
                <span className="challenge-label">THE CHALLENGE:</span>
                <p>{project.challenge}</p>
              </div>

              {/* THE SOLUTION BOX */}
              <div className="solution-box">
                <span className="solution-label">THE SOLUTION:</span>
                <p>{project.approach}</p>
              </div>

              {/* VISIT LIVE SITE BUTTON */}
              {project.liveUrl && (
                <div style={{ marginTop: '28px' }}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-vermilion visit-live-btn"
                  >
                    Visit Live Site <ExternalLink size={16} style={{ marginLeft: '6px' }} />
                  </a>
                </div>
              )}
            </div>

            {/* RIGHT SIDEBAR: TECHNOLOGIES & CALL TO ACTION CARD */}
            <div className="project-sidebar">
              {/* CARD 1: TECHNOLOGIES USED */}
              <div className="sidebar-card">
                <h4 className="sidebar-title">TECHNOLOGIES USED</h4>
                <div className="tech-tags-grid">
                  {project.tools.concat(['Visual Identity', 'Responsive Design']).map((tool, i) => (
                    <span key={i} className="tech-pill">{tool}</span>
                  ))}
                </div>
              </div>

              {/* CARD 2: WANT A SIMILAR PROJECT? */}
              <div className="cta-orange-card">
                <h3>WANT A SIMILAR PROJECT?</h3>
                <p>Directly connect with Junaid to bring your vision to life.</p>
                <a href="tel:9014843345" className="call-now-btn">
                  <Phone size={16} /> CALL 9014843345
                </a>
              </div>
            </div>
          </div>

          {/* MORE PROJECTS LIKE THIS SECTION */}
          <div className="more-projects-section">
            <h3 className="more-projects-head">MORE PROJECTS LIKE THIS</h3>
            <div className="more-projects-grid">
              {otherProjects.map((p) => (
                <div key={p.id} className="more-proj-card">
                  <div className={`more-proj-thumb ${getPaletteClass(p.id)}`} style={{ position: 'relative', overflow: 'hidden' }}>
                    {p.image ? (
                      <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                    ) : (
                      <span>{p.cat}</span>
                    )}
                  </div>
                  <div className="more-proj-body">
                    <span className="more-proj-cat">{p.cat}</span>
                    <h4 className="more-proj-title">{p.title}</h4>
                    <a
                      href={`#/project/${p.id}`}
                      className="more-proj-link"
                      onClick={(e) => {
                        e.preventDefault();
                        setGalleryIndex(0);
                        onSelectProject(p.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      Explore Project <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
