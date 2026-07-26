import React from 'react';
import { profileData } from '../data/ProfileData'; 

function Skills() {
  return (
    <section className="my-5 pt-4" id="skills">
      <h2 className="fw-bold mb-4 text-theme-title display-6">Technical Spectrum</h2>
      <div className="row g-4">
        
        <div className="col-md-4">
          <div className="react-card p-4 h-100 border-top border-3 border-success">
            <h4 className="fw-bold text-success mb-3">Comfortable With</h4>
            <div className="d-flex flex-wrap gap-2">
              {profileData.skills.mastered.map((skill, idx) => (
                <span key={idx} className="badge bg-success-subtle text-success border border-success px-3 py-2 rounded-pill fs-6">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="react-card p-4 h-100 border-top border-3 border-info">
            <h4 className="fw-bold text-react-cyan mb-3">Currently Active Learning</h4>
            <div className="d-flex flex-wrap gap-2">
              {profileData.skills.currentlyLearning.map((skill, idx) => (
                <span key={idx} className="badge bg-info-subtle text-react-cyan border border-info px-3 py-2 rounded-pill fs-6">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="react-card p-4 h-100 border-top border-3 border-secondary">
            <h4 className="fw-bold text-theme-muted mb-3">Next Up on Roadmap</h4>
            <div className="d-flex flex-wrap gap-2">
              {profileData.skills.futureLearning.map((skill, idx) => (
                <span key={idx} className="badge bg-light-subtle text-theme-muted border border-secondary px-3 py-2 rounded-pill fs-6">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;