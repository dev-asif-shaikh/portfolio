import React from 'react';
import { profileData } from '../data/profileData';

function Projects() {
  return (
      <section className="my-5 pt-4" id="projects">
        <div className="d-flex align-items-center gap-2 mb-4">
          <span className="text-react-cyan fs-3 font-monospace">&lt;/&gt;</span>
          <h2 className="fw-bold m-0 text-theme-title display-6">Featured Projects</h2>
        </div>

        <div id="projectCarousel" className="carousel slide carousel-fade react-card overflow-hidden shadow-lg" data-bs-ride="carousel" data-bs-interval="3500">
          <div className="carousel-inner">
            {profileData.projects.map((project, idx) => (
              <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                <div className="row g-0 align-items-center" style={{ minHeight: '400px' }}>
                  <div className="col-md-7 border-end border-secondary border-opacity-25 bg-black">
                    <img src={project.image} className="d-block w-100" alt={project.title} style={{ maxHeight: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className="col-md-5 p-4 p-lg-5 text-start">
                    <span className="text-react-cyan small font-monospace fw-bold">PROJECT 0{idx + 1}</span>
                    <h3 className="fw-bold my-3 text-theme-title">{project.title}</h3>
                    <p className="text-theme-muted fs-6 mb-4">{project.description}</p>
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-react-primary px-4 py-2">View Live Prototype ↗</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Projects;