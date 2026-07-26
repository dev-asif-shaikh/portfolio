import React from 'react';
import { profileData } from '../data/ProfileData';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaFileDownload, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const emailSubject = encodeURIComponent("Inquiry regarding Frontend Developer Role");
  const emailBody = encodeURIComponent(
    "Hi,\n\nI reviewed your portfolio and would like to connect regarding a potential frontend role / internship opportunity.\n\nBest regards,"
  );

  const mailtoLink = `mailto:${profileData.contactEmail}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="container-wide py-5 mt-3">
        <h1 className="text-center fw-bold text-theme-title display-5 mt-1">Let's Build Something Together</h1>

      <div className="row g-4 align-items-stretch max-w-5xl mx-auto" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        <div className="col-lg-6">
          <div className="react-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between shadow-sm">
            <div>
              <div className="d-flex align-items-center gap-2 mb-3">
                <h3 className="fw-bold text-theme-title m-0">Direct Outreach</h3>
              </div>
              <p className="text-theme-muted small mb-4">
                Hey! Send me an email here.
              </p>

              <div className="p-3 rounded border border-secondary border-opacity-25 bg-black bg-opacity-20 font-monospace small mb-4 text-theme-muted">
                <div className="text-react-cyan fw-bold mb-1">Preview Email Template:</div>
                <div><strong>Subject:</strong> Inquiry regarding Frontend Developer Role</div>
                <div className="mt-2 text-opacity-75">"Hi, I reviewed your portfolio and would like to connect regarding..."</div>
              </div>
            </div>

            <div className="d-flex flex-column gap-3">
              <a 
                href={mailtoLink} 
                className="btn btn-react-primary py-3 fw-semibold d-flex align-items-center justify-content-center gap-2 shadow-sm"
              >
                <FaPaperPlane />
                <span>Send Pre-Filled Email</span>
              </a>

              <a 
                href={`/${profileData.resumeFileName}`} 
                download 
                className="btn btn-react-secondary py-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
              >
                <FaFileDownload />
                <span>Download Official Resume</span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="react-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between shadow-sm">
            <div >
              <h3 className="fw-bold text-theme-title mb-2">Connect Elsewhere</h3>
              <p className="text-theme-muted small mb-4">
                Find me across my active profiles and social platforms.
              </p>

              <div className="d-flex flex-column gap-3">
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 rounded border border-secondary border-opacity-25 d-flex align-items-center justify-content-between text-decoration-none text-theme-title hover-cyan-card"
                >
                  <div className="d-flex align-items-center gap-3">
                    <FaLinkedin className="fs-3 text-primary" />
                    <div>
                      <div className="fw-bold">LinkedIn</div>
                      <div className="small text-theme-muted">Professional Network & Career</div>
                    </div>
                  </div>
                  <span className="text-react-cyan font-monospace fs-5">↗</span>
                </a>

                <a 
                  href="https://github.com/dev-asif-shaikh" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 rounded border border-secondary border-opacity-25 d-flex align-items-center justify-content-between text-decoration-none text-theme-title hover-cyan-card"
                >
                  <div className="d-flex align-items-center gap-3">
                    <FaGithub className="fs-3 text-theme-title" />
                    <div>
                      <div className="fw-bold">GitHub</div>
                      <div className="small text-theme-muted">Open Source Code & Repositories</div>
                    </div>
                  </div>
                  <span className="text-react-cyan font-monospace fs-5">↗</span>
                </a>

                <a 
                  href="https://instagram.com/flow.asif/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 rounded border border-secondary border-opacity-25 d-flex align-items-center justify-content-between text-decoration-none text-theme-title hover-cyan-card"
                >
                  <div className="d-flex align-items-center gap-3">
                    <FaInstagram className="fs-3 text-danger" />
                    <div>
                      <div className="fw-bold">Instagram</div>
                      <div className="small text-theme-muted">Personal and Social Highlights</div>
                    </div>
                  </div>
                  <span className="text-react-cyan font-monospace fs-5">↗</span>
                </a>

                <div className="p-3 rounded border border-secondary border-opacity-25 d-flex align-items-center justify-content-between text-theme-title">
                  <div className="d-flex align-items-center gap-3">
                    <FaEnvelope className="fs-3 text-react-cyan" />
                    <div>
                      <div className="fw-bold">Email Address</div>
                      <div className="small text-theme-muted font-monospace">{profileData.contactEmail}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;