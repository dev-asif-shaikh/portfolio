import React, { useState, useEffect, useRef } from 'react';
import { profileData } from '../data/ProfileData';
import avatarImg from '../assets/avatar.png';
import { DiReact } from 'react-icons/di';
import { FaCode } from 'react-icons/fa';

function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isMousePaused, setIsMousePaused] = useState(false);
  const pauseTimerRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const cardWidth = card.width;
    const cardHeight = card.height;

    const centerX = card.left + cardWidth / 2;
    const centerY = card.top + cardHeight / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (cardHeight / 2)) * -15;
    const rotateY = (mouseX / (cardWidth / 2)) * 15;

    setTilt({ x: rotateX, y: rotateY });
    setMousePos({ x: e.clientX, y: e.clientY });

    setIsMousePaused(false);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);

    pauseTimerRef.current = setTimeout(() => {
      setIsMousePaused(true);
    }, 200);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setIsMousePaused(false);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
  };

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  return (
    <div className="container-wide py-4">
      
      <div 
        className="react-mouse-follower"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          opacity: isHovered && isMousePaused ? 1 : 0,
          scale: isMousePaused ? '1' : '0.5'
        }}
      >
        <div className="react-cursor-ring">
          <DiReact className="text-react-cyan fs-2 spin-react-logo" />
        </div>
      </div>

      <section className="row align-items-center min-vh-75 py-4">
        
        <div className="col-lg-6 text-start pe-lg-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill border mb-4">
              <span className="small text-react-cyan font-monospace fw-semibold">{profileData.status}</span>
          </div>

          <h1 className="display-3 fw-bold text-theme-title mb-3">
            Hello, I'm a <span className="text-react-cyan">Frontend Developer.</span>
          </h1>

          <p className="lead text-theme-muted mb-4 fs-5" style={{ maxWidth: '650px', lineHeight: '1.6' }}>
            I craft interactive web platforms with React and Bootstrap. Focused on modern state architecture and clean user experiences.
          </p>

          <div className="d-flex gap-3 mb-4">
            <a href={`mailto:${profileData.contactEmail}`} className="btn btn-react-primary px-4 py-3 fs-6 fw-semibold">
              Contact Me
            </a>
            <a href={`${import.meta.env.BASE_URL}${profileData.resumeFileName}`} download className="btn btn-react-secondary px-4 py-3 fs-6 fw-semibold">
              Get Resume
            </a>
          </div>
        </div>

        <div 
          className="col-lg-6 text-center position-relative mt-4 mt-lg-0 hero-3d-perspective"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero-glow-aura"></div>

          <div 
            className="position-relative d-inline-block w-100 hero-tilt-card"
            style={{
              transform: isHovered 
                ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.03, 1.03, 1.03)` 
                : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
            }}
          >
            
            <div className="floating-tech-badge badge-float-1 react-card border d-flex align-items-center gap-2">
              <DiReact className="text-react-cyan fs-4 spin-react-logo" />
              <span className="small text-theme-title fw-bold">React.js</span>
            </div>

            <img 
              src={avatarImg} 
              alt="Developer Avatar" 
              className="hero-avatar-img-large" 
            />

            <div className="floating-tech-badge badge-float-2 react-card border d-flex align-items-center gap-2">
              <FaCode className="text-warning fs-6" />
              <span className="small text-theme-title fw-bold">npm run dev</span>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}

export default Hero;