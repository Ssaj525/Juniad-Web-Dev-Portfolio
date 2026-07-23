import React, { useState, useEffect } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
import type { CategoryFilter } from '../types';

interface ProjectsPageProps {
  onSelectProject: (id: number) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [isLoading, setIsLoading] = useState(true);

  const categories: CategoryFilter[] = ['All', 'Website', 'Chrome Extension', 'Data Science'];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.cat === activeFilter);

  const handleFilterChange = (category: CategoryFilter) => {
    if (category !== activeFilter) {
      setActiveFilter(category);
    }
  };

  return (
    <div className="route-page active">
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">WORKS</p>
          <h1>All Projects</h1>
          <p>A running archive of product, web and brand work. Filter by category or open any project for the full case study.</p>

          <div className="filter-row">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${activeFilter === category ? 'active' : ''}`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: '80px' }}>
        <div className="wrap">
          {isLoading ? (
            <div className="works-loader-container">
              <div className="works-spinner">
                <div className="spinner-ring" />
              </div>
              <p className="works-loading-text">Loading Works & Projects...</p>

              <div className="all-proj-grid skeleton-grid">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="proj-card-skeleton">
                    <div className="skeleton-thumb" />
                    <div className="skeleton-line short" />
                    <div className="skeleton-line long" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="all-proj-grid">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={onSelectProject}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
