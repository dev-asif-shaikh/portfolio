import React from 'react';
import { Link, useLocation } from 'react-router';
import { DiReact } from 'react-icons/di';
import { FaFileDownload, FaSun, FaMoon } from 'react-icons/fa';
import { profileData } from '../data/ProfileData';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => (location.pathname === path ? 'text-react-cyan fw-bold' : 'text-theme-muted');

  return (
    <nav 
      className="navbar navbar-expand border-bottom sticky-top py-3" 
      style={{ 
        backgroundColor: theme === 'dark' ? '#1c1f26' : '#ffffff', 
        borderColor: theme === 'dark' ? '#343a46' : '#dee2e6' 
      }}
    >
      <div className="container-wide d-flex align-items-center justify-content-between">
        
        <div className="d-flex align-items-center gap-3">
          <Link className="navbar-brand text-theme-title fw-bold d-flex align-items-center gap-2 m-0 fs-5" to="/">
            <DiReact className="text-react-cyan fs-2" />
            <span>Dev.AsifShaikh</span>
          </Link>
          <span className="badge bg-success-subtle text-success border border-success rounded-pill d-none d-md-inline-flex align-items-center gap-1 px-3 py-1">
            <span className="spinner-grow spinner-grow-sm" style={{ width: '6px', height: '6px' }}></span>
            Available
          </span>
        </div>

        <div className="d-flex align-items-center gap-5">
          <Link className={`nav-link fs-6 hover-cyan ${isActive('/')}`} to="/">Home</Link>
          <Link className={`nav-link fs-6 hover-cyan ${isActive('/about')}`} to="/about">About</Link>
          <Link className={`nav-link fs-6 hover-cyan ${isActive('/contact')}`} to="/contact">Contact</Link>
        </div>

        <div className="d-flex align-items-center gap-3">
          
          <button 
            onClick={toggleTheme} 
            className="btn btn-sm border d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
            style={{ 
              color: theme === 'dark' ? '#f6f7f9' : '#212529', 
              borderColor: theme === 'dark' ? '#404756' : '#cbd5e1' 
            }}
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <FaSun className="text-warning" /> : <FaMoon className="text-primary" />}
            <span className="fw-semibold d-none d-lg-inline">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>

          <a 
            href={`/${profileData.resumeFileName}`} 
            download 
            className="btn btn-sm btn-react-primary d-flex align-items-center gap-2 px-4 py-2"
          >
            <FaFileDownload />
            <span>Resume</span>
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;