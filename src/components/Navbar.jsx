import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { profileData } from '../data/ProfileData';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25;
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio playback error:", err);
        });
    }
  };

  const isActive = (path) => (location.pathname === path ? 'text-react-cyan fw-bold' : 'text-theme-muted');

  return (
    <nav 
      className="navbar navbar-expand border-bottom sticky-top py-3" 
      style={{ 
        backgroundColor: theme === 'dark' ? '#1c1f26' : '#ffffff', 
        borderColor: theme === 'dark' ? '#343a46' : '#dee2e6' 
      }}
    >
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}bg-music.mp3`} loop preload="auto" />

      <div className="container-wide d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <Link className="navbar-brand text-theme-title fw-bold m-0 fs-5" to="/">
            Asif Raza Shaikh
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
            onClick={toggleMusic}
            onMouseEnter={() => { if (!isPlaying) toggleMusic(); }}
            className={`btn btn-sm border px-3 py-2 rounded-pill fw-semibold d-flex align-items-center gap-2 ${
              isPlaying ? 'border-success text-success' : 'text-theme-muted'
            }`}
            style={{ borderColor: theme === 'dark' ? '#404756' : '#cbd5e1' }}
          >
            <span>{isPlaying ? 'Sound ON' : 'Sound OFF'}</span>
          </button>

          <button 
            onClick={toggleTheme} 
            className="btn btn-sm border px-3 py-2 rounded-pill fw-semibold"
            style={{ 
              color: theme === 'dark' ? '#f6f7f9' : '#212529', 
              borderColor: theme === 'dark' ? '#404756' : '#cbd5e1' 
            }}
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>

          <a 
            href={`${import.meta.env.BASE_URL}${profileData.resumeFileName}`} 
            download 
            className="btn btn-sm btn-react-primary px-4 py-2"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;