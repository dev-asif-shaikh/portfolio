import React from 'react';
import { profileData } from '../data/ProfileData';

function About() {
  return (
    <div className="container-wide py-5">
      <div className="mb-4">
        <h1 className="display-5 fw-bold text-theme-title mb-3">About</h1>
      </div>

      <div className="react-card p-4 p-md-5 d-flex flex-column gap-4">
        <section>
          <h3 className="fw-bold text-theme-title mb-2">Portfolio</h3>
          <p className="text-theme-muted mb-0">
            This portfolio is a single-page application built using React 18, Vite, and Bootstrap 5. It uses the React Context API for dark and light theme switching, React Router for navigation, and dynamic CSS for responsive layouts. All profile content, projects, and skills are managed through a centralized data structure for easy maintenance.
          </p>
        </section>

        <hr className="my-2 border-secondary opacity-25" />

        <section>
          <h3 className="fw-bold text-theme-title mb-2">About Me</h3>
          <p className="text-theme-muted mb-0">
            {profileData.aboutMe}
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;