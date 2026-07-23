import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'projects' | 'detail' | 'contact'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);

  // Synchronize route with hash location
  const syncRouteFromHash = () => {
    const hash = window.location.hash.replace(/^#/, '') || '/';
    let match: RegExpMatchArray | null;

    if ((match = hash.match(/^\/project\/(\d+)/))) {
      setSelectedProjectId(parseInt(match[1], 10));
      setCurrentRoute('detail');
    } else if (hash.startsWith('/projects')) {
      setCurrentRoute('projects');
    } else if (hash.startsWith('/contact')) {
      setCurrentRoute('contact');
    } else {
      setCurrentRoute('home');
      const anchorMatch = hash.match(/#(.+)/);
      if (anchorMatch) {
        setTimeout(() => {
          const el = document.getElementById(anchorMatch[1]);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    }
  };

  useEffect(() => {
    syncRouteFromHash();
    window.addEventListener('hashchange', syncRouteFromHash);
    return () => window.removeEventListener('hashchange', syncRouteFromHash);
  }, []);

  const navigateTo = (route: string, sectionId?: string) => {
    if (route === 'home') {
      window.location.hash = sectionId ? `/#${sectionId}` : '#/';
      setCurrentRoute('home');
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (route === 'projects') {
      window.location.hash = '#/projects';
      setCurrentRoute('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (route === 'contact') {
      window.location.hash = '#/contact';
      setCurrentRoute('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const selectProject = (id: number) => {
    setSelectedProjectId(id);
    window.location.hash = `#/project/${id}`;
    setCurrentRoute('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header currentRoute={currentRoute} onNavigate={navigateTo} />
      
      <main>
        {currentRoute === 'home' && (
          <HomePage onNavigate={navigateTo} onSelectProject={selectProject} />
        )}
        {currentRoute === 'projects' && (
          <ProjectsPage onSelectProject={selectProject} />
        )}
        {currentRoute === 'detail' && (
          <ProjectDetailPage
            projectId={selectedProjectId}
            onNavigate={navigateTo}
            onSelectProject={selectProject}
          />
        )}
        {currentRoute === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
