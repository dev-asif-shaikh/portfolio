import React from 'react';

function About() {
  return (
    <div className="container py-5 mt-4">
        <h1 className="text-center fw-bold text-theme-title display-5 mt-1 mb-5">About Me</h1>
      <div className="react-card p-4 mb-4">
        <h3 className="text-theme-title fw-bold mb-3">01. Personal Details</h3>
        <p className="text-theme-muted">
          Junior Frontend Developer focused on building clean, fast user interfaces using modern React ecosystem tools.
        </p>
      </div>

      <div className="react-card p-4 mb-4">
        <h3 className="text-theme-title fw-bold mb-3">02. History</h3>
        <p className="text-theme-muted">
          I previously worked in BPO industry, Where I gained good communication skill, learned how to colaborate with teams. Recently completed React course at SevenMentors, where I learned react with modern UI design systems inspired by industry documentation frameworks.
          </p>
      </div>

      <div className="react-card p-4">
        <h3 className="text-theme-title fw-bold mb-3">03. Hobbies & Interests</h3>
        <p className="text-theme-muted">
          I keep close eyes on new tech updates, in my personal time I like to binge Anime and play mobile games..
        </p>
      </div>
    </div>
  );
}

export default About;