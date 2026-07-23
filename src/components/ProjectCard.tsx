import React, { useState } from 'react';
import type { Project } from '../types';
import { getPaletteClass } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (id: number) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <a
      className="proj-card"
      href={`#/project/${project.id}`}
      onClick={(e) => {
        e.preventDefault();
        onSelect(project.id);
      }}
    >
      <div
        className={`proj-thumb ${getPaletteClass(index)}`}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* BASE LAYER: Always present colorful palette number */}
        <span style={{ position: 'relative', zIndex: 1 }}>
          {String(project.id).padStart(2, '0')}
        </span>

        {/* MIDDLE LAYER: Animated Shimmer Loader & Spinner while loading */}
        {project.image && !imageLoaded && !imageError && (
          <div className="card-image-loader" style={{ zIndex: 2 }}>
            <div className="card-loader-spinner" />
            <span className="card-loader-text">Loading project...</span>
          </div>
        )}

        {/* TOP LAYER: Real image screenshot */}
        {project.image && !imageError && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              inset: 0,
              zIndex: 3,
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.4s ease, transform 0.4s ease'
            }}
            className="card-real-img"
          />
        )}
      </div>

      <div className="proj-body">
        <p className="proj-cat">{project.cat} · {project.year}</p>
        <h3 className="proj-title">{project.title}</h3>
      </div>
    </a>
  );
};
