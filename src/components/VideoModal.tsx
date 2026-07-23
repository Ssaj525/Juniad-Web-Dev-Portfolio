import React from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        <div className="modal-body">
          <h3>Intro Video Showcase</h3>
          <p>Watch a 60-second summary of product design principles, design systems, and workflow.</p>
          <div style={{
            aspectRatio: '16/9',
            background: '#121214',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.1)',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#EB8931',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#0B0B0C"><path d="M6 4l14 8-14 8V4z"/></svg>
            </div>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
              Interactive Demo Reel — Ready to wire up to YouTube / Vimeo / HTML5 Video
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
