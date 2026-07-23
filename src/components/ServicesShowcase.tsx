import React, { useState } from 'react';
import { ArrowUpRight, Check, Palette, Code, FileText, Database } from 'lucide-react';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
  previewTag: string;
}


const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'branding',
    num: '01',
    title: 'BRANDING & PACKAGING',
    subtitle: 'Box Packaging, UI Design & Photo Editing',
    description: 'Crafting eye-catching box packaging designs, modern UI/UX website layouts, logo identity, and professional photo touchups & graphics.',
    deliverables: [
      'Box & Product Packaging Design',
      'UI / UX Web & Interface Design',
      'Logo Creation & Brand Identity',
      'Photo Editing & Retouching',
      'Visual Graphics & Banner Design'
    ],
    icon: <Palette size={20} />,
    previewTag: 'Box Packaging & UI Design'
  },
  {
    id: 'websites',
    num: '02',
    title: 'WEB DEVELOPMENT',
    subtitle: 'High Impact Web Experiences & React Apps',
    description: 'Building ultra-fast, responsive, and interactive websites using modern HTML, CSS, JavaScript, React, and smooth GSAP animations.',
    deliverables: [
      'Responsive Front-End Development',
      'Interactive Motion & GSAP Animations',
      'React & Modern Web Applications',
      'Clean & Maintainable Codebase'
    ],
    icon: <Code size={20} />,
    previewTag: 'Front-End Web Interface & Code'
  },
  {
    id: 'documentation',
    num: '03',
    title: 'DOCUMENTATION & DRAFTING',
    subtitle: 'Rental Agreements, Contracts & Legal Documents',
    description: 'Drafting, typing, and formatting essential legal and business documents such as rental agreements, lease contracts, service drafts, and formal papers.',
    deliverables: [
      'Rental & Property Agreements',
      'Lease Contracts & Service Drafts',
      'Legal Document Typing & Formatting',
      'Agreement Customization & Editing',
      'Formal Business Documentation'
    ],
    icon: <FileText size={20} />,
    previewTag: 'Rental Agreement & Legal Document Format'
  },
  {
    id: 'data-entry',
    num: '04',
    title: 'DATA ENTRY & TYPING',
    subtitle: 'Fast & Reliable Data Typing & Formatting',
    description: 'Providing fast, accurate data typing, document copying, form filling, and basic data organization with careful attention to detail.',
    deliverables: [
      'Fast & Accurate Data Typing',
      'Document Copying & Formatting',
      'Data Entry & Collection',
      'Form Filling & Record Typing',
      'Text Cleanup'
    ],
    icon: <Database size={20} />,
    previewTag: 'Data Typing & Record Management'
  }
];

export const ServicesShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICES_DATA[activeIndex];

  return (
    <section id="services" className="services-section">
      <div className="wrap">
        <p className="eyebrow">Services & Solutions</p>

        <div className="section-head" style={{ marginBottom: '24px' }}>
          <div>
            <h2>
              WHAT WE CREATE <span style={{ color: 'var(--pumpkin)' }}>FOR YOU</span>
            </h2>
            <p className="sub" style={{ fontSize: '16px', maxWidth: '62ch' }}>
              Specialized in Box Packaging, UI Design, Web Development, Rental Agreement Drafting, and Accurate Data Typing.
            </p>
          </div>
        </div>

        <div className="services-showcase-grid">
          {/* LEFT NAV LIST */}
          <div className="service-nav-list">
            {SERVICES_DATA.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.id}
                  className={`service-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  <div className="service-nav-left">
                    <span className="service-nav-num">{service.num}</span>
                    <div className="service-nav-info">
                      <h3>{service.title}</h3>
                      <p>{service.subtitle}</p>
                    </div>
                  </div>

                  <div className="service-nav-arrow">
                    <ArrowUpRight size={20} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT FEATURED DETAIL CARD */}
          <div className="service-featured-card">
            <div className="service-featured-header">
              <span className="service-badge">FEATURED SERVICE</span>
              <span className="service-big-num">{activeService.num}</span>
            </div>

            <h3 className="service-featured-title">{activeService.title}</h3>

            <p className="service-featured-desc">{activeService.description}</p>

            <div className="service-deliverables-heading">KEY DELIVERABLES</div>

            <ul className="service-deliverables-list">
              {activeService.deliverables.map((item, idx) => (
                <li key={idx}>
                  <div className="service-check-icon">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* MOCKUP PREVIEW FOOTER */}
            <div className="service-preview-frame">
              <div className="service-preview-topbar">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="preview-label">{activeService.previewTag}</span>
              </div>
              <div className="service-preview-content">
                {activeIndex === 0 && (
                  <div className="preview-mockup branding-mockup">
                    <div className="brand-card">
                      <div className="brand-logo-mark">📦</div>
                      <div className="brand-meta">
                        <b>BOX PACKAGING & UI DESIGN</b>
                        <span>CUSTOM DIE-LINES & UI LAYOUTS</span>
                      </div>
                    </div>
                    <div className="color-swatches">
                      <div style={{ background: '#FF6A14' }}>BOX MOCK</div>
                      <div style={{ background: '#FF3C00' }}>UI LAYOUT</div>
                      <div style={{ background: '#F9B838' }}>EDITING</div>
                      <div style={{ background: '#0D0D0E' }}>PHOTOSHOP</div>
                    </div>
                  </div>
                )}

                {activeIndex === 1 && (
                  <div className="preview-mockup code-mockup">
                    <pre>
                      <code>
                        <span className="code-kw">export const</span> <span className="code-fn">WebPortfolio</span> = () =&gt; &#123;<br />
                        &nbsp;&nbsp;<span className="code-kw">return</span> (<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-tag">div</span> <span className="code-attr">className</span>=<span className="code-str">"responsive-app"</span>&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-tag">Navbar</span> <span className="code-attr">theme</span>=<span className="code-str">"modern"</span> /&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-tag">Hero</span> <span className="code-attr">video</span>=&#123;<span className="code-kw">true</span>&#125; /&gt;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&lt;<span className="code-tag">div</span>&gt;<br />
                        &nbsp;&nbsp;);<br />
                        &#125;;
                      </code>
                    </pre>
                  </div>
                )}

                {activeIndex === 2 && (
                  <div className="preview-mockup doc-mockup">
                    <div className="doc-item active">
                      <span className="doc-badge">DRAFT</span>
                      <code>RENTAL_AGREEMENT_2026.pdf</code>
                      <span className="status">VERIFIED</span>
                    </div>
                    <div className="doc-item">
                      <span className="doc-badge post">LEASE</span>
                      <code>COMMERCIAL_CONTRACT_DRAFT.docx</code>
                      <span className="status">COMPLETED</span>
                    </div>
                    <div className="doc-spec-box">
                      <b>Legal Scope:</b> Landlord & Tenant Terms, Deposit Clauses, Notice Period & Stamp Duty formatting.
                    </div>
                  </div>
                )}

                {activeIndex === 3 && (
                  <div className="preview-mockup data-mockup">
                    <div className="data-table">
                      <div className="data-row header">
                        <span>ID</span>
                        <span>Document Type</span>
                        <span>Status</span>
                        <span>Accuracy</span>
                      </div>
                      <div className="data-row">
                        <span>#201</span>
                        <span>Data Typing & Entry</span>
                        <span className="tag-verified">Completed</span>
                        <span>100%</span>
                      </div>
                      <div className="data-row">
                        <span>#202</span>
                        <span>Text Record Formatting</span>
                        <span className="tag-verified">Completed</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
